import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import occtimportjs from "occt-import-js";

let renderer = null;
let occtPromise = null;

const EXTS = { stl: 1, stp: 1, step: 1 };
const MAX_SIZE = 200 * 1024 * 1024;
const MAT_COLOR = 0x9bb7d4;

function ensureRenderer() {
  if (renderer) return renderer;
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  return renderer;
}

function loadOcct(baseUrl) {
  if (!occtPromise) {
    occtPromise = occtimportjs({
      locateFile: (path) => baseUrl + "/occt-import-js.wasm",
    }).catch((e) => {
      occtPromise = null;
      throw e;
    });
  }
  return occtPromise;
}

function makeMesh(geo, name) {
  const mat = new THREE.MeshStandardMaterial({
    color: MAT_COLOR,
    roughness: 0.45,
    metalness: 0.1,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geo, mat);
  if (name) mesh.name = name;
  return mesh;
}

function parseStl(buf) {
  const bytes = new Uint8Array(buf);
  const head = bytes.length >= 6
    ? String.fromCharCode(bytes[0], bytes[1], bytes[2], bytes[3], bytes[4], bytes[5])
    : "";
  if (head === "solid") {
    return new STLLoader().parse(new TextDecoder().decode(buf));
  }
  return new STLLoader().parse(buf);
}

function geometryFromStep(result) {
  const group = new THREE.Group();
  for (const mesh of result.meshes || []) {
    const positions = new Float32Array(mesh.attributes.position.array);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    if (mesh.attributes.normal && mesh.attributes.normal.array) {
      const norms = new Float32Array(mesh.attributes.normal.array);
      geo.setAttribute("normal", new THREE.BufferAttribute(norms, 3));
    }
    if (mesh.index && mesh.index.array) {
      const idx = new Uint32Array(mesh.index.array);
      geo.setIndex(new THREE.BufferAttribute(idx, 1));
    }
    geo.computeVertexNormals();
    group.add(makeMesh(geo, mesh.name));
  }
  return group;
}

function fitCamera(camera, controls, obj) {
  const box = new THREE.Box3().setFromObject(obj);
  if (box.isEmpty()) return;
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const radius = Math.max(size.x, size.y, size.z) / 2 || 1;
  const dist = radius / Math.tan((camera.fov * Math.PI) / 360);
  camera.position.set(
    center.x + dist,
    center.y + dist * 0.7,
    center.z + dist
  );
  camera.near = Math.max(radius / 1000, 0.0001);
  camera.far = radius * 200;
  camera.updateProjectionMatrix();
  controls.target.copy(center);
  controls.update();
}

function disposeObject(obj) {
  obj.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) {
      if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
      else o.material.dispose();
    }
  });
}

function makeStatus(container, text) {
  const el = document.createElement("div");
  el.style.cssText =
    "position:absolute;left:8px;bottom:8px;z-index:10;padding:2px 8px;border-radius:4px;background:rgba(0,0,0,0.55);color:#fff;font-size:12px;pointer-events:none;";
  el.textContent = text;
  container.appendChild(el);
  return el;
}

window.__s3viewer.register({
  id: "3d-viewer",
  name: "3D Viewer",
  version: "0.1.0",
  canPreview: function (info) {
    return (
      EXTS[info.ext] === 1 &&
      (info.size == null || info.size < MAX_SIZE)
    );
  },
  render: function (container, ctx) {
    container.style.position = "relative";
    const host = document.createElement("div");
    host.style.cssText = "position:absolute;inset:0;";
    container.appendChild(host);
    const status = makeStatus(container, "3D...");
    const r = ensureRenderer();
    host.appendChild(r.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(ctx.dark ? 0x111827 : 0xf8fafc);
    const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 10000);
    const controls = new OrbitControls(camera, r.domElement);
    controls.enableDamping = true;

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(1, 2, 1);
    scene.add(dir);

    let disposed = false;
    const resizeObs = new ResizeObserver(() => {
      if (disposed) return;
      const w = host.clientWidth || 1;
      const h = host.clientHeight || 1;
      r.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    resizeObs.observe(host);

    ctx
      .fetchObject()
      .then(async function (buf) {
        if (disposed) return;
        let obj;
        if (ctx.ext === "stl") {
          obj = makeMesh(parseStl(buf), ctx.name);
        } else {
          const occt = await loadOcct(ctx.baseUrl);
          if (disposed) return;
          const result = occt.ReadStepFile(new Uint8Array(buf), null);
          if (!result || !result.success) {
            throw new Error(
              result && result.exception ? result.exception : "STEP parse failed"
            );
          }
          obj = geometryFromStep(result);
        }
        if (disposed) {
          disposeObject(obj);
          return;
        }
        scene.add(obj);
        fitCamera(camera, controls, obj);
        status.textContent = ctx.ext.toUpperCase();
      })
      .catch(function (e) {
        if (disposed) return;
        status.textContent =
          "load failed: " + (e && e.message ? e.message : e);
        status.style.background = "rgba(153,27,27,0.75)";
      });

    function animate() {
      if (disposed) return;
      controls.update();
      r.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    return {
      dispose: function () {
        disposed = true;
        resizeObs.disconnect();
        scene.traverse((o) => {
          if (o !== scene && o.parent) o.parent.remove(o);
        });
        disposeObject(scene);
        if (r.domElement.parentNode) r.domElement.parentNode.removeChild(r.domElement);
        if (host.parentNode) host.parentNode.removeChild(host);
        if (status.parentNode) status.parentNode.removeChild(status);
      },
    };
  },
});
