var $d=Object.create;var Cc=Object.defineProperty;var Jd=Object.getOwnPropertyDescriptor;var Kd=Object.getOwnPropertyNames;var jd=Object.getPrototypeOf,Qd=Object.prototype.hasOwnProperty;var Rc=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var ef=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Kd(e))!Qd.call(i,r)&&r!==t&&Cc(i,r,{get:()=>e[r],enumerable:!(n=Jd(e,r))||n.enumerable});return i};var tf=(i,e,t)=>(t=i!=null?$d(jd(i)):{},ef(e||!i||!i.__esModule?Cc(t,"default",{value:i,enumerable:!0}):t,i));var bo=Rc((XM,mu)=>{mu.exports={}});var vu=Rc((_u,dc)=>{var gu=(()=>{var i=typeof document<"u"?document.currentScript?.src:void 0;return typeof __filename<"u"&&(i=i||__filename),(function(e={}){var t,n=e,r,a,l=new Promise((s,o)=>{r=s,a=o}),c=typeof window=="object",d=typeof importScripts=="function",h=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",p=Object.assign({},n),g=[],f="./this.program",v=(s,o)=>{throw o},S="";function A(s){return n.locateFile?n.locateFile(s,S):S+s}var y,_;if(h){var N=bo(),O=bo();S=__dirname+"/",_=s=>{s=At(s)?new URL(s):O.normalize(s);var o=N.readFileSync(s);return o},y=(s,o=!0)=>(s=At(s)?new URL(s):O.normalize(s),new Promise((u,m)=>{N.readFile(s,o?void 0:"utf8",(E,C)=>{E?m(E):u(o?C.buffer:C)})})),!n.thisProgram&&process.argv.length>1&&(f=process.argv[1].replace(/\\/g,"/")),g=process.argv.slice(2),v=(s,o)=>{throw process.exitCode=s,o}}else(c||d)&&(d?S=self.location.href:typeof document<"u"&&document.currentScript&&(S=document.currentScript.src),i&&(S=i),S.startsWith("blob:")?S="":S=S.substr(0,S.replace(/[?#].*/,"").lastIndexOf("/")+1),d&&(_=s=>{var o=new XMLHttpRequest;return o.open("GET",s,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),y=s=>At(s)?new Promise((o,u)=>{var m=new XMLHttpRequest;m.open("GET",s,!0),m.responseType="arraybuffer",m.onload=()=>{if(m.status==200||m.status==0&&m.response){o(m.response);return}u(m.status)},m.onerror=u,m.send(null)}):fetch(s,{credentials:"same-origin"}).then(o=>o.ok?o.arrayBuffer():Promise.reject(new Error(o.status+" : "+o.url))));var T=n.print||console.log.bind(console),D=n.printErr||console.error.bind(console);Object.assign(n,p),p=null,n.arguments&&(g=n.arguments),n.thisProgram&&(f=n.thisProgram);var P=n.wasmBinary,U,b=!1,I;function G(s,o){s||tt(o)}var F,X,te,re,z,Z,ee,se;function ue(){var s=U.buffer;n.HEAP8=F=new Int8Array(s),n.HEAP16=te=new Int16Array(s),n.HEAPU8=X=new Uint8Array(s),n.HEAPU16=re=new Uint16Array(s),n.HEAP32=z=new Int32Array(s),n.HEAPU32=Z=new Uint32Array(s),n.HEAPF32=ee=new Float32Array(s),n.HEAPF64=se=new Float64Array(s)}var be=[],Ae=[],De=[],ct=!1;function Et(){var s=n.preRun;s&&(typeof s=="function"&&(s=[s]),s.forEach(_e)),fe(be)}function ht(){ct=!0,!n.noFSInit&&!M.initialized&&M.init(),M.ignorePermissions=!1,ie.init(),fe(Ae)}function oe(){var s=n.postRun;s&&(typeof s=="function"&&(s=[s]),s.forEach(qe)),fe(De)}function _e(s){be.unshift(s)}function de(s){Ae.unshift(s)}function qe(s){De.unshift(s)}var He=0,ze=null,xt=null;function it(s){return s}function dt(s){He++,n.monitorRunDependencies?.(He)}function st(s){if(He--,n.monitorRunDependencies?.(He),He==0&&(ze!==null&&(clearInterval(ze),ze=null),xt)){var o=xt;xt=null,o()}}function tt(s){n.onAbort?.(s),s="Aborted("+s+")",D(s),b=!0,s+=". Build with -sASSERTIONS for more info.",ct&&wc();var o=new WebAssembly.RuntimeError(s);throw a(o),o}var It="data:application/octet-stream;base64,",Dt=s=>s.startsWith(It),At=s=>s.startsWith("file://");function Ot(){var s="occt-import-js.wasm";return Dt(s)?s:A(s)}var yt;function Ct(s){if(s==yt&&P)return new Uint8Array(P);if(_)return _(s);throw"both async and sync fetching of the wasm failed"}function H(s){return P?Promise.resolve().then(()=>Ct(s)):y(s).then(o=>new Uint8Array(o),()=>Ct(s))}function Wt(s,o,u){return H(s).then(m=>WebAssembly.instantiate(m,o)).then(u,m=>{D(`failed to asynchronously prepare wasm: ${m}`),tt(m)})}function ft(s,o,u,m){return!s&&typeof WebAssembly.instantiateStreaming=="function"&&!Dt(o)&&!At(o)&&!h&&typeof fetch=="function"?fetch(o,{credentials:"same-origin"}).then(E=>{var C=WebAssembly.instantiateStreaming(E,u);return C.then(m,function(L){return D(`wasm streaming compile failed: ${L}`),D("falling back to ArrayBuffer instantiation"),Wt(o,u,m)})}):Wt(o,u,m)}function R(){return{a:Vd}}function x(){var s=R();function o(m,E){return Vt=m.exports,U=Vt._,ue(),fc=Vt.ba,de(Vt.$),st("wasm-instantiate"),Vt}dt("wasm-instantiate");function u(m){o(m.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(s,o)}catch(m){D(`Module.instantiateWasm callback failed with error: ${m}`),a(m)}return yt??(yt=Ot()),ft(P,yt,s,u).catch(a),{}}var k,q;function ne(s){this.name="ExitStatus",this.message=`Program terminated with exit(${s})`,this.status=s}var fe=s=>{s.forEach(o=>o(n))},ve=n.noExitRuntime||!0,j={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return o.exec(s).slice(1)},normalizeArray:(s,o)=>{for(var u=0,m=s.length-1;m>=0;m--){var E=s[m];E==="."?s.splice(m,1):E===".."?(s.splice(m,1),u++):u&&(s.splice(m,1),u--)}if(o)for(;u;u--)s.unshift("..");return s},normalize:s=>{var o=j.isAbs(s),u=s.substr(-1)==="/";return s=j.normalizeArray(s.split("/").filter(m=>!!m),!o).join("/"),!s&&!o&&(s="."),s&&u&&(s+="/"),(o?"/":"")+s},dirname:s=>{var o=j.splitPath(s),u=o[0],m=o[1];return!u&&!m?".":(m&&(m=m.substr(0,m.length-1)),u+m)},basename:s=>{if(s==="/")return"/";s=j.normalize(s),s=s.replace(/\/$/,"");var o=s.lastIndexOf("/");return o===-1?s:s.substr(o+1)},join:(...s)=>j.normalize(s.join("/")),join2:(s,o)=>j.normalize(s+"/"+o)},ae=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return m=>crypto.getRandomValues(m);if(h)try{var s=bo(),o=s.randomFillSync;if(o)return m=>s.randomFillSync(m);var u=s.randomBytes;return m=>(m.set(u(m.byteLength)),m)}catch{}tt("initRandomDevice")},xe=s=>(xe=ae())(s),Ie={resolve:(...s)=>{for(var o="",u=!1,m=s.length-1;m>=-1&&!u;m--){var E=m>=0?s[m]:M.cwd();if(typeof E!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!E)return"";o=E+"/"+o,u=j.isAbs(E)}return o=j.normalizeArray(o.split("/").filter(C=>!!C),!u).join("/"),(u?"/":"")+o||"."},relative:(s,o)=>{s=Ie.resolve(s).substr(1),o=Ie.resolve(o).substr(1);function u(he){for(var we=0;we<he.length&&he[we]==="";we++);for(var Pe=he.length-1;Pe>=0&&he[Pe]==="";Pe--);return we>Pe?[]:he.slice(we,Pe-we+1)}for(var m=u(s.split("/")),E=u(o.split("/")),C=Math.min(m.length,E.length),L=C,B=0;B<C;B++)if(m[B]!==E[B]){L=B;break}for(var Q=[],B=L;B<m.length;B++)Q.push("..");return Q=Q.concat(E.slice(L)),Q.join("/")}},Me=typeof TextDecoder<"u"?new TextDecoder:void 0,me=(s,o=0,u=NaN)=>{for(var m=o+u,E=o;s[E]&&!(E>=m);)++E;if(E-o>16&&s.buffer&&Me)return Me.decode(s.subarray(o,E));for(var C="";o<E;){var L=s[o++];if(!(L&128)){C+=String.fromCharCode(L);continue}var B=s[o++]&63;if((L&224)==192){C+=String.fromCharCode((L&31)<<6|B);continue}var Q=s[o++]&63;if((L&240)==224?L=(L&15)<<12|B<<6|Q:L=(L&7)<<18|B<<12|Q<<6|s[o++]&63,L<65536)C+=String.fromCharCode(L);else{var he=L-65536;C+=String.fromCharCode(55296|he>>10,56320|he&1023)}}return C},Be=[],ke=s=>{for(var o=0,u=0;u<s.length;++u){var m=s.charCodeAt(u);m<=127?o++:m<=2047?o+=2:m>=55296&&m<=57343?(o+=4,++u):o+=3}return o},Ze=(s,o,u,m)=>{if(!(m>0))return 0;for(var E=u,C=u+m-1,L=0;L<s.length;++L){var B=s.charCodeAt(L);if(B>=55296&&B<=57343){var Q=s.charCodeAt(++L);B=65536+((B&1023)<<10)|Q&1023}if(B<=127){if(u>=C)break;o[u++]=B}else if(B<=2047){if(u+1>=C)break;o[u++]=192|B>>6,o[u++]=128|B&63}else if(B<=65535){if(u+2>=C)break;o[u++]=224|B>>12,o[u++]=128|B>>6&63,o[u++]=128|B&63}else{if(u+3>=C)break;o[u++]=240|B>>18,o[u++]=128|B>>12&63,o[u++]=128|B>>6&63,o[u++]=128|B&63}}return o[u]=0,u-E};function V(s,o,u){var m=u>0?u:ke(s)+1,E=new Array(m),C=Ze(s,E,0,E.length);return o&&(E.length=C),E}var ge=()=>{if(!Be.length){var s=null;if(h){var o=256,u=Buffer.alloc(o),m=0,E=process.stdin.fd;try{m=N.readSync(E,u,0,o)}catch(C){if(C.toString().includes("EOF"))m=0;else throw C}m>0&&(s=u.slice(0,m).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;Be=V(s,!0)}return Be.shift()},ie={ttys:[],init(){},shutdown(){},register(s,o){ie.ttys[s]={input:[],output:[],ops:o},M.registerDevice(s,ie.stream_ops)},stream_ops:{open(s){var o=ie.ttys[s.node.rdev];if(!o)throw new M.ErrnoError(43);s.tty=o,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,o,u,m,E){if(!s.tty||!s.tty.ops.get_char)throw new M.ErrnoError(60);for(var C=0,L=0;L<m;L++){var B;try{B=s.tty.ops.get_char(s.tty)}catch{throw new M.ErrnoError(29)}if(B===void 0&&C===0)throw new M.ErrnoError(6);if(B==null)break;C++,o[u+L]=B}return C&&(s.node.timestamp=Date.now()),C},write(s,o,u,m,E){if(!s.tty||!s.tty.ops.put_char)throw new M.ErrnoError(60);try{for(var C=0;C<m;C++)s.tty.ops.put_char(s.tty,o[u+C])}catch{throw new M.ErrnoError(29)}return m&&(s.node.timestamp=Date.now()),C}},default_tty_ops:{get_char(s){return ge()},put_char(s,o){o===null||o===10?(T(me(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output&&s.output.length>0&&(T(me(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,o,u){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,o){o===null||o===10?(D(me(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output&&s.output.length>0&&(D(me(s.output)),s.output=[])}}},ye=(s,o)=>{X.fill(0,s,s+o)},Ee=(s,o)=>Math.ceil(s/o)*o,le=s=>{s=Ee(s,65536);var o=Ec(65536,s);return o&&ye(o,s),o},ce={ops_table:null,mount(s){return ce.createNode(null,"/",16895,0)},createNode(s,o,u,m){if(M.isBlkdev(u)||M.isFIFO(u))throw new M.ErrnoError(63);ce.ops_table||(ce.ops_table={dir:{node:{getattr:ce.node_ops.getattr,setattr:ce.node_ops.setattr,lookup:ce.node_ops.lookup,mknod:ce.node_ops.mknod,rename:ce.node_ops.rename,unlink:ce.node_ops.unlink,rmdir:ce.node_ops.rmdir,readdir:ce.node_ops.readdir,symlink:ce.node_ops.symlink},stream:{llseek:ce.stream_ops.llseek}},file:{node:{getattr:ce.node_ops.getattr,setattr:ce.node_ops.setattr},stream:{llseek:ce.stream_ops.llseek,read:ce.stream_ops.read,write:ce.stream_ops.write,allocate:ce.stream_ops.allocate,mmap:ce.stream_ops.mmap,msync:ce.stream_ops.msync}},link:{node:{getattr:ce.node_ops.getattr,setattr:ce.node_ops.setattr,readlink:ce.node_ops.readlink},stream:{}},chrdev:{node:{getattr:ce.node_ops.getattr,setattr:ce.node_ops.setattr},stream:M.chrdev_stream_ops}});var E=M.createNode(s,o,u,m);return M.isDir(E.mode)?(E.node_ops=ce.ops_table.dir.node,E.stream_ops=ce.ops_table.dir.stream,E.contents={}):M.isFile(E.mode)?(E.node_ops=ce.ops_table.file.node,E.stream_ops=ce.ops_table.file.stream,E.usedBytes=0,E.contents=null):M.isLink(E.mode)?(E.node_ops=ce.ops_table.link.node,E.stream_ops=ce.ops_table.link.stream):M.isChrdev(E.mode)&&(E.node_ops=ce.ops_table.chrdev.node,E.stream_ops=ce.ops_table.chrdev.stream),E.timestamp=Date.now(),s&&(s.contents[o]=E,s.timestamp=E.timestamp),E},getFileDataAsTypedArray(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage(s,o){var u=s.contents?s.contents.length:0;if(!(u>=o)){var m=1024*1024;o=Math.max(o,u*(u<m?2:1.125)>>>0),u!=0&&(o=Math.max(o,256));var E=s.contents;s.contents=new Uint8Array(o),s.usedBytes>0&&s.contents.set(E.subarray(0,s.usedBytes),0)}},resizeFileStorage(s,o){if(s.usedBytes!=o)if(o==0)s.contents=null,s.usedBytes=0;else{var u=s.contents;s.contents=new Uint8Array(o),u&&s.contents.set(u.subarray(0,Math.min(o,s.usedBytes))),s.usedBytes=o}},node_ops:{getattr(s){var o={};return o.dev=M.isChrdev(s.mode)?s.id:1,o.ino=s.id,o.mode=s.mode,o.nlink=1,o.uid=0,o.gid=0,o.rdev=s.rdev,M.isDir(s.mode)?o.size=4096:M.isFile(s.mode)?o.size=s.usedBytes:M.isLink(s.mode)?o.size=s.link.length:o.size=0,o.atime=new Date(s.timestamp),o.mtime=new Date(s.timestamp),o.ctime=new Date(s.timestamp),o.blksize=4096,o.blocks=Math.ceil(o.size/o.blksize),o},setattr(s,o){o.mode!==void 0&&(s.mode=o.mode),o.timestamp!==void 0&&(s.timestamp=o.timestamp),o.size!==void 0&&ce.resizeFileStorage(s,o.size)},lookup(s,o){throw M.genericErrors[44]},mknod(s,o,u,m){return ce.createNode(s,o,u,m)},rename(s,o,u){if(M.isDir(s.mode)){var m;try{m=M.lookupNode(o,u)}catch{}if(m)for(var E in m.contents)throw new M.ErrnoError(55)}delete s.parent.contents[s.name],s.parent.timestamp=Date.now(),s.name=u,o.contents[u]=s,o.timestamp=s.parent.timestamp},unlink(s,o){delete s.contents[o],s.timestamp=Date.now()},rmdir(s,o){var u=M.lookupNode(s,o);for(var m in u.contents)throw new M.ErrnoError(55);delete s.contents[o],s.timestamp=Date.now()},readdir(s){var o=[".",".."];for(var u of Object.keys(s.contents))o.push(u);return o},symlink(s,o,u){var m=ce.createNode(s,o,41471,0);return m.link=u,m},readlink(s){if(!M.isLink(s.mode))throw new M.ErrnoError(28);return s.link}},stream_ops:{read(s,o,u,m,E){var C=s.node.contents;if(E>=s.node.usedBytes)return 0;var L=Math.min(s.node.usedBytes-E,m);if(L>8&&C.subarray)o.set(C.subarray(E,E+L),u);else for(var B=0;B<L;B++)o[u+B]=C[E+B];return L},write(s,o,u,m,E,C){if(o.buffer===F.buffer&&(C=!1),!m)return 0;var L=s.node;if(L.timestamp=Date.now(),o.subarray&&(!L.contents||L.contents.subarray)){if(C)return L.contents=o.subarray(u,u+m),L.usedBytes=m,m;if(L.usedBytes===0&&E===0)return L.contents=o.slice(u,u+m),L.usedBytes=m,m;if(E+m<=L.usedBytes)return L.contents.set(o.subarray(u,u+m),E),m}if(ce.expandFileStorage(L,E+m),L.contents.subarray&&o.subarray)L.contents.set(o.subarray(u,u+m),E);else for(var B=0;B<m;B++)L.contents[E+B]=o[u+B];return L.usedBytes=Math.max(L.usedBytes,E+m),m},llseek(s,o,u){var m=o;if(u===1?m+=s.position:u===2&&M.isFile(s.node.mode)&&(m+=s.node.usedBytes),m<0)throw new M.ErrnoError(28);return m},allocate(s,o,u){ce.expandFileStorage(s.node,o+u),s.node.usedBytes=Math.max(s.node.usedBytes,o+u)},mmap(s,o,u,m,E){if(!M.isFile(s.node.mode))throw new M.ErrnoError(43);var C,L,B=s.node.contents;if(!(E&2)&&B&&B.buffer===F.buffer)L=!1,C=B.byteOffset;else{if(L=!0,C=le(o),!C)throw new M.ErrnoError(48);B&&((u>0||u+o<B.length)&&(B.subarray?B=B.subarray(u,u+o):B=Array.prototype.slice.call(B,u,u+o)),F.set(B,C))}return{ptr:C,allocated:L}},msync(s,o,u,m,E){return ce.stream_ops.write(s,o,0,m,u,!1),0}}},Ue=(s,o,u,m)=>{var E=m?"":`al ${s}`;y(s).then(C=>{o(new Uint8Array(C)),E&&st(E)},C=>{if(u)u();else throw`Loading data file "${s}" failed.`}),E&&dt(E)},wt=(s,o,u,m,E,C)=>{M.createDataFile(s,o,u,m,E,C)},_t=n.preloadPlugins||[],_n=(s,o,u,m)=>{typeof Browser<"u"&&Browser.init();var E=!1;return _t.forEach(C=>{E||C.canHandle(o)&&(C.handle(s,o,u,m),E=!0)}),E},vn=(s,o,u,m,E,C,L,B,Q,he)=>{var we=o?Ie.resolve(j.join2(s,o)):s,Pe=`cp ${we}`;function We(Ne){function $e(ot){he?.(),B||wt(s,o,ot,m,E,Q),C?.(),st(Pe)}_n(Ne,we,$e,()=>{L?.(),st(Pe)})||$e(Ne)}dt(Pe),typeof u=="string"?Ue(u,We,L):We(u)},wo=s=>{var o={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},u=o[s];if(typeof u>"u")throw new Error(`Unknown file open mode: ${s}`);return u},Tr=(s,o)=>{var u=0;return s&&(u|=365),o&&(u|=146),u},M={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(s){this.name="ErrnoError",this.errno=s}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{constructor(s,o,u,m){s||(s=this),this.parent=s,this.mount=s.mount,this.mounted=null,this.id=M.nextInode++,this.name=o,this.mode=u,this.node_ops={},this.stream_ops={},this.rdev=m,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return M.isDir(this.mode)}get isDevice(){return M.isChrdev(this.mode)}},lookupPath(s,o={}){if(s=Ie.resolve(s),!s)return{path:"",node:null};var u={follow_mount:!0,recurse_count:0};if(o=Object.assign(u,o),o.recurse_count>8)throw new M.ErrnoError(32);for(var m=s.split("/").filter(Pe=>!!Pe),E=M.root,C="/",L=0;L<m.length;L++){var B=L===m.length-1;if(B&&o.parent)break;if(E=M.lookupNode(E,m[L]),C=j.join2(C,m[L]),M.isMountpoint(E)&&(!B||B&&o.follow_mount)&&(E=E.mounted.root),!B||o.follow)for(var Q=0;M.isLink(E.mode);){var he=M.readlink(C);C=Ie.resolve(j.dirname(C),he);var we=M.lookupPath(C,{recurse_count:o.recurse_count+1});if(E=we.node,Q++>40)throw new M.ErrnoError(32)}}return{path:C,node:E}},getPath(s){for(var o;;){if(M.isRoot(s)){var u=s.mount.mountpoint;return o?u[u.length-1]!=="/"?`${u}/${o}`:u+o:u}o=o?`${s.name}/${o}`:s.name,s=s.parent}},hashName(s,o){for(var u=0,m=0;m<o.length;m++)u=(u<<5)-u+o.charCodeAt(m)|0;return(s+u>>>0)%M.nameTable.length},hashAddNode(s){var o=M.hashName(s.parent.id,s.name);s.name_next=M.nameTable[o],M.nameTable[o]=s},hashRemoveNode(s){var o=M.hashName(s.parent.id,s.name);if(M.nameTable[o]===s)M.nameTable[o]=s.name_next;else for(var u=M.nameTable[o];u;){if(u.name_next===s){u.name_next=s.name_next;break}u=u.name_next}},lookupNode(s,o){var u=M.mayLookup(s);if(u)throw new M.ErrnoError(u);for(var m=M.hashName(s.id,o),E=M.nameTable[m];E;E=E.name_next){var C=E.name;if(E.parent.id===s.id&&C===o)return E}return M.lookup(s,o)},createNode(s,o,u,m){var E=new M.FSNode(s,o,u,m);return M.hashAddNode(E),E},destroyNode(s){M.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var o=["r","w","rw"][s&3];return s&512&&(o+="w"),o},nodePermissions(s,o){return M.ignorePermissions?0:o.includes("r")&&!(s.mode&292)||o.includes("w")&&!(s.mode&146)||o.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!M.isDir(s.mode))return 54;var o=M.nodePermissions(s,"x");return o||(s.node_ops.lookup?0:2)},mayCreate(s,o){try{var u=M.lookupNode(s,o);return 20}catch{}return M.nodePermissions(s,"wx")},mayDelete(s,o,u){var m;try{m=M.lookupNode(s,o)}catch(C){return C.errno}var E=M.nodePermissions(s,"wx");if(E)return E;if(u){if(!M.isDir(m.mode))return 54;if(M.isRoot(m)||M.getPath(m)===M.cwd())return 10}else if(M.isDir(m.mode))return 31;return 0},mayOpen(s,o){return s?M.isLink(s.mode)?32:M.isDir(s.mode)&&(M.flagsToPermissionString(o)!=="r"||o&512)?31:M.nodePermissions(s,M.flagsToPermissionString(o)):44},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=M.MAX_OPEN_FDS;s++)if(!M.streams[s])return s;throw new M.ErrnoError(33)},getStreamChecked(s){var o=M.getStream(s);if(!o)throw new M.ErrnoError(8);return o},getStream:s=>M.streams[s],createStream(s,o=-1){return s=Object.assign(new M.FSStream,s),o==-1&&(o=M.nextfd()),s.fd=o,M.streams[o]=s,s},closeStream(s){M.streams[s]=null},dupStream(s,o=-1){var u=M.createStream(s,o);return u.stream_ops?.dup?.(u),u},chrdev_stream_ops:{open(s){var o=M.getDevice(s.node.rdev);s.stream_ops=o.stream_ops,s.stream_ops.open?.(s)},llseek(){throw new M.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,o)=>s<<8|o,registerDevice(s,o){M.devices[s]={stream_ops:o}},getDevice:s=>M.devices[s],getMounts(s){for(var o=[],u=[s];u.length;){var m=u.pop();o.push(m),u.push(...m.mounts)}return o},syncfs(s,o){typeof s=="function"&&(o=s,s=!1),M.syncFSRequests++,M.syncFSRequests>1&&D(`warning: ${M.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var u=M.getMounts(M.root.mount),m=0;function E(L){return M.syncFSRequests--,o(L)}function C(L){if(L)return C.errored?void 0:(C.errored=!0,E(L));++m>=u.length&&E(null)}u.forEach(L=>{if(!L.type.syncfs)return C(null);L.type.syncfs(L,s,C)})},mount(s,o,u){var m=u==="/",E=!u,C;if(m&&M.root)throw new M.ErrnoError(10);if(!m&&!E){var L=M.lookupPath(u,{follow_mount:!1});if(u=L.path,C=L.node,M.isMountpoint(C))throw new M.ErrnoError(10);if(!M.isDir(C.mode))throw new M.ErrnoError(54)}var B={type:s,opts:o,mountpoint:u,mounts:[]},Q=s.mount(B);return Q.mount=B,B.root=Q,m?M.root=Q:C&&(C.mounted=B,C.mount&&C.mount.mounts.push(B)),Q},unmount(s){var o=M.lookupPath(s,{follow_mount:!1});if(!M.isMountpoint(o.node))throw new M.ErrnoError(28);var u=o.node,m=u.mounted,E=M.getMounts(m);Object.keys(M.nameTable).forEach(L=>{for(var B=M.nameTable[L];B;){var Q=B.name_next;E.includes(B.mount)&&M.destroyNode(B),B=Q}}),u.mounted=null;var C=u.mount.mounts.indexOf(m);u.mount.mounts.splice(C,1)},lookup(s,o){return s.node_ops.lookup(s,o)},mknod(s,o,u){var m=M.lookupPath(s,{parent:!0}),E=m.node,C=j.basename(s);if(!C||C==="."||C==="..")throw new M.ErrnoError(28);var L=M.mayCreate(E,C);if(L)throw new M.ErrnoError(L);if(!E.node_ops.mknod)throw new M.ErrnoError(63);return E.node_ops.mknod(E,C,o,u)},create(s,o){return o=o!==void 0?o:438,o&=4095,o|=32768,M.mknod(s,o,0)},mkdir(s,o){return o=o!==void 0?o:511,o&=1023,o|=16384,M.mknod(s,o,0)},mkdirTree(s,o){for(var u=s.split("/"),m="",E=0;E<u.length;++E)if(u[E]){m+="/"+u[E];try{M.mkdir(m,o)}catch(C){if(C.errno!=20)throw C}}},mkdev(s,o,u){return typeof u>"u"&&(u=o,o=438),o|=8192,M.mknod(s,o,u)},symlink(s,o){if(!Ie.resolve(s))throw new M.ErrnoError(44);var u=M.lookupPath(o,{parent:!0}),m=u.node;if(!m)throw new M.ErrnoError(44);var E=j.basename(o),C=M.mayCreate(m,E);if(C)throw new M.ErrnoError(C);if(!m.node_ops.symlink)throw new M.ErrnoError(63);return m.node_ops.symlink(m,E,s)},rename(s,o){var u=j.dirname(s),m=j.dirname(o),E=j.basename(s),C=j.basename(o),L,B,Q;if(L=M.lookupPath(s,{parent:!0}),B=L.node,L=M.lookupPath(o,{parent:!0}),Q=L.node,!B||!Q)throw new M.ErrnoError(44);if(B.mount!==Q.mount)throw new M.ErrnoError(75);var he=M.lookupNode(B,E),we=Ie.relative(s,m);if(we.charAt(0)!==".")throw new M.ErrnoError(28);if(we=Ie.relative(o,u),we.charAt(0)!==".")throw new M.ErrnoError(55);var Pe;try{Pe=M.lookupNode(Q,C)}catch{}if(he!==Pe){var We=M.isDir(he.mode),Ne=M.mayDelete(B,E,We);if(Ne)throw new M.ErrnoError(Ne);if(Ne=Pe?M.mayDelete(Q,C,We):M.mayCreate(Q,C),Ne)throw new M.ErrnoError(Ne);if(!B.node_ops.rename)throw new M.ErrnoError(63);if(M.isMountpoint(he)||Pe&&M.isMountpoint(Pe))throw new M.ErrnoError(10);if(Q!==B&&(Ne=M.nodePermissions(B,"w"),Ne))throw new M.ErrnoError(Ne);M.hashRemoveNode(he);try{B.node_ops.rename(he,Q,C),he.parent=Q}catch($e){throw $e}finally{M.hashAddNode(he)}}},rmdir(s){var o=M.lookupPath(s,{parent:!0}),u=o.node,m=j.basename(s),E=M.lookupNode(u,m),C=M.mayDelete(u,m,!0);if(C)throw new M.ErrnoError(C);if(!u.node_ops.rmdir)throw new M.ErrnoError(63);if(M.isMountpoint(E))throw new M.ErrnoError(10);u.node_ops.rmdir(u,m),M.destroyNode(E)},readdir(s){var o=M.lookupPath(s,{follow:!0}),u=o.node;if(!u.node_ops.readdir)throw new M.ErrnoError(54);return u.node_ops.readdir(u)},unlink(s){var o=M.lookupPath(s,{parent:!0}),u=o.node;if(!u)throw new M.ErrnoError(44);var m=j.basename(s),E=M.lookupNode(u,m),C=M.mayDelete(u,m,!1);if(C)throw new M.ErrnoError(C);if(!u.node_ops.unlink)throw new M.ErrnoError(63);if(M.isMountpoint(E))throw new M.ErrnoError(10);u.node_ops.unlink(u,m),M.destroyNode(E)},readlink(s){var o=M.lookupPath(s),u=o.node;if(!u)throw new M.ErrnoError(44);if(!u.node_ops.readlink)throw new M.ErrnoError(28);return Ie.resolve(M.getPath(u.parent),u.node_ops.readlink(u))},stat(s,o){var u=M.lookupPath(s,{follow:!o}),m=u.node;if(!m)throw new M.ErrnoError(44);if(!m.node_ops.getattr)throw new M.ErrnoError(63);return m.node_ops.getattr(m)},lstat(s){return M.stat(s,!0)},chmod(s,o,u){var m;if(typeof s=="string"){var E=M.lookupPath(s,{follow:!u});m=E.node}else m=s;if(!m.node_ops.setattr)throw new M.ErrnoError(63);m.node_ops.setattr(m,{mode:o&4095|m.mode&-4096,timestamp:Date.now()})},lchmod(s,o){M.chmod(s,o,!0)},fchmod(s,o){var u=M.getStreamChecked(s);M.chmod(u.node,o)},chown(s,o,u,m){var E;if(typeof s=="string"){var C=M.lookupPath(s,{follow:!m});E=C.node}else E=s;if(!E.node_ops.setattr)throw new M.ErrnoError(63);E.node_ops.setattr(E,{timestamp:Date.now()})},lchown(s,o,u){M.chown(s,o,u,!0)},fchown(s,o,u){var m=M.getStreamChecked(s);M.chown(m.node,o,u)},truncate(s,o){if(o<0)throw new M.ErrnoError(28);var u;if(typeof s=="string"){var m=M.lookupPath(s,{follow:!0});u=m.node}else u=s;if(!u.node_ops.setattr)throw new M.ErrnoError(63);if(M.isDir(u.mode))throw new M.ErrnoError(31);if(!M.isFile(u.mode))throw new M.ErrnoError(28);var E=M.nodePermissions(u,"w");if(E)throw new M.ErrnoError(E);u.node_ops.setattr(u,{size:o,timestamp:Date.now()})},ftruncate(s,o){var u=M.getStreamChecked(s);if((u.flags&2097155)===0)throw new M.ErrnoError(28);M.truncate(u.node,o)},utime(s,o,u){var m=M.lookupPath(s,{follow:!0}),E=m.node;E.node_ops.setattr(E,{timestamp:Math.max(o,u)})},open(s,o,u){if(s==="")throw new M.ErrnoError(44);o=typeof o=="string"?wo(o):o,o&64?(u=typeof u>"u"?438:u,u=u&4095|32768):u=0;var m;if(typeof s=="object")m=s;else{s=j.normalize(s);try{var E=M.lookupPath(s,{follow:!(o&131072)});m=E.node}catch{}}var C=!1;if(o&64)if(m){if(o&128)throw new M.ErrnoError(20)}else m=M.mknod(s,u,0),C=!0;if(!m)throw new M.ErrnoError(44);if(M.isChrdev(m.mode)&&(o&=-513),o&65536&&!M.isDir(m.mode))throw new M.ErrnoError(54);if(!C){var L=M.mayOpen(m,o);if(L)throw new M.ErrnoError(L)}o&512&&!C&&M.truncate(m,0),o&=-131713;var B=M.createStream({node:m,path:M.getPath(m),flags:o,seekable:!0,position:0,stream_ops:m.stream_ops,ungotten:[],error:!1});return B.stream_ops.open&&B.stream_ops.open(B),n.logReadFiles&&!(o&1)&&(s in M.readFiles||(M.readFiles[s]=1)),B},close(s){if(M.isClosed(s))throw new M.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(o){throw o}finally{M.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,o,u){if(M.isClosed(s))throw new M.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new M.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new M.ErrnoError(28);return s.position=s.stream_ops.llseek(s,o,u),s.ungotten=[],s.position},read(s,o,u,m,E){if(m<0||E<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===1)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.read)throw new M.ErrnoError(28);var C=typeof E<"u";if(!C)E=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var L=s.stream_ops.read(s,o,u,m,E);return C||(s.position+=L),L},write(s,o,u,m,E,C){if(m<0||E<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===0)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.write)throw new M.ErrnoError(28);s.seekable&&s.flags&1024&&M.llseek(s,0,2);var L=typeof E<"u";if(!L)E=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var B=s.stream_ops.write(s,o,u,m,E,C);return L||(s.position+=B),B},allocate(s,o,u){if(M.isClosed(s))throw new M.ErrnoError(8);if(o<0||u<=0)throw new M.ErrnoError(28);if((s.flags&2097155)===0)throw new M.ErrnoError(8);if(!M.isFile(s.node.mode)&&!M.isDir(s.node.mode))throw new M.ErrnoError(43);if(!s.stream_ops.allocate)throw new M.ErrnoError(138);s.stream_ops.allocate(s,o,u)},mmap(s,o,u,m,E){if((m&2)!==0&&(E&2)===0&&(s.flags&2097155)!==2)throw new M.ErrnoError(2);if((s.flags&2097155)===1)throw new M.ErrnoError(2);if(!s.stream_ops.mmap)throw new M.ErrnoError(43);if(!o)throw new M.ErrnoError(28);return s.stream_ops.mmap(s,o,u,m,E)},msync(s,o,u,m,E){return s.stream_ops.msync?s.stream_ops.msync(s,o,u,m,E):0},ioctl(s,o,u){if(!s.stream_ops.ioctl)throw new M.ErrnoError(59);return s.stream_ops.ioctl(s,o,u)},readFile(s,o={}){if(o.flags=o.flags||0,o.encoding=o.encoding||"binary",o.encoding!=="utf8"&&o.encoding!=="binary")throw new Error(`Invalid encoding type "${o.encoding}"`);var u,m=M.open(s,o.flags),E=M.stat(s),C=E.size,L=new Uint8Array(C);return M.read(m,L,0,C,0),o.encoding==="utf8"?u=me(L):o.encoding==="binary"&&(u=L),M.close(m),u},writeFile(s,o,u={}){u.flags=u.flags||577;var m=M.open(s,u.flags,u.mode);if(typeof o=="string"){var E=new Uint8Array(ke(o)+1),C=Ze(o,E,0,E.length);M.write(m,E,0,C,void 0,u.canOwn)}else if(ArrayBuffer.isView(o))M.write(m,o,0,o.byteLength,void 0,u.canOwn);else throw new Error("Unsupported data type");M.close(m)},cwd:()=>M.currentPath,chdir(s){var o=M.lookupPath(s,{follow:!0});if(o.node===null)throw new M.ErrnoError(44);if(!M.isDir(o.node.mode))throw new M.ErrnoError(54);var u=M.nodePermissions(o.node,"x");if(u)throw new M.ErrnoError(u);M.currentPath=o.path},createDefaultDirectories(){M.mkdir("/tmp"),M.mkdir("/home"),M.mkdir("/home/web_user")},createDefaultDevices(){M.mkdir("/dev"),M.registerDevice(M.makedev(1,3),{read:()=>0,write:(m,E,C,L,B)=>L}),M.mkdev("/dev/null",M.makedev(1,3)),ie.register(M.makedev(5,0),ie.default_tty_ops),ie.register(M.makedev(6,0),ie.default_tty1_ops),M.mkdev("/dev/tty",M.makedev(5,0)),M.mkdev("/dev/tty1",M.makedev(6,0));var s=new Uint8Array(1024),o=0,u=()=>(o===0&&(o=xe(s).byteLength),s[--o]);M.createDevice("/dev","random",u),M.createDevice("/dev","urandom",u),M.mkdir("/dev/shm"),M.mkdir("/dev/shm/tmp")},createSpecialDirectories(){M.mkdir("/proc");var s=M.mkdir("/proc/self");M.mkdir("/proc/self/fd"),M.mount({mount(){var o=M.createNode(s,"fd",16895,73);return o.node_ops={lookup(u,m){var E=+m,C=M.getStreamChecked(E),L={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>C.path}};return L.parent=L,L}},o}},{},"/proc/self/fd")},createStandardStreams(s,o,u){s?M.createDevice("/dev","stdin",s):M.symlink("/dev/tty","/dev/stdin"),o?M.createDevice("/dev","stdout",null,o):M.symlink("/dev/tty","/dev/stdout"),u?M.createDevice("/dev","stderr",null,u):M.symlink("/dev/tty1","/dev/stderr");var m=M.open("/dev/stdin",0),E=M.open("/dev/stdout",1),C=M.open("/dev/stderr",1)},staticInit(){[44].forEach(s=>{M.genericErrors[s]=new M.ErrnoError(s),M.genericErrors[s].stack="<generic error, no stack>"}),M.nameTable=new Array(4096),M.mount(ce,{},"/"),M.createDefaultDirectories(),M.createDefaultDevices(),M.createSpecialDirectories(),M.filesystems={MEMFS:ce}},init(s,o,u){M.initialized=!0,s??(s=n.stdin),o??(o=n.stdout),u??(u=n.stderr),M.createStandardStreams(s,o,u)},quit(){M.initialized=!1;for(var s=0;s<M.streams.length;s++){var o=M.streams[s];o&&M.close(o)}},findObject(s,o){var u=M.analyzePath(s,o);return u.exists?u.object:null},analyzePath(s,o){try{var u=M.lookupPath(s,{follow:!o});s=u.path}catch{}var m={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=M.lookupPath(s,{parent:!0});m.parentExists=!0,m.parentPath=u.path,m.parentObject=u.node,m.name=j.basename(s),u=M.lookupPath(s,{follow:!o}),m.exists=!0,m.path=u.path,m.object=u.node,m.name=u.node.name,m.isRoot=u.path==="/"}catch(E){m.error=E.errno}return m},createPath(s,o,u,m){s=typeof s=="string"?s:M.getPath(s);for(var E=o.split("/").reverse();E.length;){var C=E.pop();if(C){var L=j.join2(s,C);try{M.mkdir(L)}catch{}s=L}}return L},createFile(s,o,u,m,E){var C=j.join2(typeof s=="string"?s:M.getPath(s),o),L=Tr(m,E);return M.create(C,L)},createDataFile(s,o,u,m,E,C){var L=o;s&&(s=typeof s=="string"?s:M.getPath(s),L=o?j.join2(s,o):s);var B=Tr(m,E),Q=M.create(L,B);if(u){if(typeof u=="string"){for(var he=new Array(u.length),we=0,Pe=u.length;we<Pe;++we)he[we]=u.charCodeAt(we);u=he}M.chmod(Q,B|146);var We=M.open(Q,577);M.write(We,u,0,u.length,0,C),M.close(We),M.chmod(Q,B)}},createDevice(s,o,u,m){var B;var E=j.join2(typeof s=="string"?s:M.getPath(s),o),C=Tr(!!u,!!m);(B=M.createDevice).major??(B.major=64);var L=M.makedev(M.createDevice.major++,0);return M.registerDevice(L,{open(Q){Q.seekable=!1},close(Q){m?.buffer?.length&&m(10)},read(Q,he,we,Pe,We){for(var Ne=0,$e=0;$e<Pe;$e++){var ot;try{ot=u()}catch{throw new M.ErrnoError(29)}if(ot===void 0&&Ne===0)throw new M.ErrnoError(6);if(ot==null)break;Ne++,he[we+$e]=ot}return Ne&&(Q.node.timestamp=Date.now()),Ne},write(Q,he,we,Pe,We){for(var Ne=0;Ne<Pe;Ne++)try{m(he[we+Ne])}catch{throw new M.ErrnoError(29)}return Pe&&(Q.node.timestamp=Date.now()),Ne}}),M.mkdev(E,C,L)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{s.contents=_(s.url),s.usedBytes=s.contents.length}catch{throw new M.ErrnoError(29)}},createLazyFile(s,o,u,m,E){class C{constructor(){this.lengthKnown=!1,this.chunks=[]}get(Ne){if(!(Ne>this.length-1||Ne<0)){var $e=Ne%this.chunkSize,ot=Ne/this.chunkSize|0;return this.getter(ot)[$e]}}setDataGetter(Ne){this.getter=Ne}cacheLength(){var Ne=new XMLHttpRequest;if(Ne.open("HEAD",u,!1),Ne.send(null),!(Ne.status>=200&&Ne.status<300||Ne.status===304))throw new Error("Couldn't load "+u+". Status: "+Ne.status);var $e=Number(Ne.getResponseHeader("Content-length")),ot,Xt=(ot=Ne.getResponseHeader("Accept-Ranges"))&&ot==="bytes",Lt=(ot=Ne.getResponseHeader("Content-Encoding"))&&ot==="gzip",An=1024*1024;Xt||(An=$e);var Cn=(kn,qi)=>{if(kn>qi)throw new Error("invalid range ("+kn+", "+qi+") or no bytes requested!");if(qi>$e-1)throw new Error("only "+$e+" bytes available! programmer error!");var qt=new XMLHttpRequest;if(qt.open("GET",u,!1),$e!==An&&qt.setRequestHeader("Range","bytes="+kn+"-"+qi),qt.responseType="arraybuffer",qt.overrideMimeType&&qt.overrideMimeType("text/plain; charset=x-user-defined"),qt.send(null),!(qt.status>=200&&qt.status<300||qt.status===304))throw new Error("Couldn't load "+u+". Status: "+qt.status);return qt.response!==void 0?new Uint8Array(qt.response||[]):V(qt.responseText||"",!0)},Cr=this;Cr.setDataGetter(kn=>{var qi=kn*An,qt=(kn+1)*An-1;if(qt=Math.min(qt,$e-1),typeof Cr.chunks[kn]>"u"&&(Cr.chunks[kn]=Cn(qi,qt)),typeof Cr.chunks[kn]>"u")throw new Error("doXHR failed!");return Cr.chunks[kn]}),(Lt||!$e)&&(An=$e=1,$e=this.getter(0).length,An=$e,T("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=$e,this._chunkSize=An,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!d)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var L=new C,B={isDevice:!1,contents:L}}else var B={isDevice:!1,url:u};var Q=M.createFile(s,o,B,m,E);B.contents?Q.contents=B.contents:B.url&&(Q.contents=null,Q.url=B.url),Object.defineProperties(Q,{usedBytes:{get:function(){return this.contents.length}}});var he={},we=Object.keys(Q.stream_ops);we.forEach(We=>{var Ne=Q.stream_ops[We];he[We]=(...$e)=>(M.forceLoadFile(Q),Ne(...$e))});function Pe(We,Ne,$e,ot,Xt){var Lt=We.node.contents;if(Xt>=Lt.length)return 0;var An=Math.min(Lt.length-Xt,ot);if(Lt.slice)for(var Cn=0;Cn<An;Cn++)Ne[$e+Cn]=Lt[Xt+Cn];else for(var Cn=0;Cn<An;Cn++)Ne[$e+Cn]=Lt.get(Xt+Cn);return An}return he.read=(We,Ne,$e,ot,Xt)=>(M.forceLoadFile(Q),Pe(We,Ne,$e,ot,Xt)),he.mmap=(We,Ne,$e,ot,Xt)=>{M.forceLoadFile(Q);var Lt=le(Ne);if(!Lt)throw new M.ErrnoError(48);return Pe(We,F,Lt,Ne,$e),{ptr:Lt,allocated:!0}},Q.stream_ops=he,Q}},Ri=(s,o)=>s?me(X,s,o):"",ut={DEFAULT_POLLMASK:5,calculateAt(s,o,u){if(j.isAbs(o))return o;var m;if(s===-100)m=M.cwd();else{var E=ut.getStreamFromFD(s);m=E.path}if(o.length==0){if(!u)throw new M.ErrnoError(44);return m}return j.join2(m,o)},doStat(s,o,u){var m=s(o);z[u>>2]=m.dev,z[u+4>>2]=m.mode,Z[u+8>>2]=m.nlink,z[u+12>>2]=m.uid,z[u+16>>2]=m.gid,z[u+20>>2]=m.rdev,q=[m.size>>>0,(k=m.size,+Math.abs(k)>=1?k>0?+Math.floor(k/4294967296)>>>0:~~+Math.ceil((k-+(~~k>>>0))/4294967296)>>>0:0)],z[u+24>>2]=q[0],z[u+28>>2]=q[1],z[u+32>>2]=4096,z[u+36>>2]=m.blocks;var E=m.atime.getTime(),C=m.mtime.getTime(),L=m.ctime.getTime();return q=[Math.floor(E/1e3)>>>0,(k=Math.floor(E/1e3),+Math.abs(k)>=1?k>0?+Math.floor(k/4294967296)>>>0:~~+Math.ceil((k-+(~~k>>>0))/4294967296)>>>0:0)],z[u+40>>2]=q[0],z[u+44>>2]=q[1],Z[u+48>>2]=E%1e3*1e3*1e3,q=[Math.floor(C/1e3)>>>0,(k=Math.floor(C/1e3),+Math.abs(k)>=1?k>0?+Math.floor(k/4294967296)>>>0:~~+Math.ceil((k-+(~~k>>>0))/4294967296)>>>0:0)],z[u+56>>2]=q[0],z[u+60>>2]=q[1],Z[u+64>>2]=C%1e3*1e3*1e3,q=[Math.floor(L/1e3)>>>0,(k=Math.floor(L/1e3),+Math.abs(k)>=1?k>0?+Math.floor(k/4294967296)>>>0:~~+Math.ceil((k-+(~~k>>>0))/4294967296)>>>0:0)],z[u+72>>2]=q[0],z[u+76>>2]=q[1],Z[u+80>>2]=L%1e3*1e3*1e3,q=[m.ino>>>0,(k=m.ino,+Math.abs(k)>=1?k>0?+Math.floor(k/4294967296)>>>0:~~+Math.ceil((k-+(~~k>>>0))/4294967296)>>>0:0)],z[u+88>>2]=q[0],z[u+92>>2]=q[1],0},doMsync(s,o,u,m,E){if(!M.isFile(o.node.mode))throw new M.ErrnoError(43);if(m&2)return 0;var C=X.slice(s,s+u);M.msync(o,C,E,u,m)},getStreamFromFD(s){var o=M.getStreamChecked(s);return o},varargs:void 0,getStr(s){var o=Ri(s);return o}};function ms(s,o){try{return s=ut.getStr(s),M.chmod(s,o),0}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function gs(s,o,u,m){try{if(o=ut.getStr(o),o=ut.calculateAt(s,o),u&-8)return-28;var E=M.lookupPath(o,{follow:!0}),C=E.node;if(!C)return-44;var L="";return u&4&&(L+="r"),u&2&&(L+="w"),u&1&&(L+="x"),L&&M.nodePermissions(C,L)?-2:0}catch(B){if(typeof M>"u"||B.name!=="ErrnoError")throw B;return-B.errno}}function xn(){var s=z[+ut.varargs>>2];return ut.varargs+=4,s}var On=xn;function _s(s,o,u){ut.varargs=u;try{var m=ut.getStreamFromFD(s);switch(o){case 0:{var E=xn();if(E<0)return-28;for(;M.streams[E];)E++;var C;return C=M.dupStream(m,E),C.fd}case 1:case 2:return 0;case 3:return m.flags;case 4:{var E=xn();return m.flags|=E,0}case 12:{var E=On(),L=0;return te[E+L>>1]=2,0}case 13:case 14:return 0}return-28}catch(B){if(typeof M>"u"||B.name!=="ErrnoError")throw B;return-B.errno}}function vs(s,o){try{var u=ut.getStreamFromFD(s);return ut.doStat(M.stat,u.path,o)}catch(m){if(typeof M>"u"||m.name!=="ErrnoError")throw m;return-m.errno}}function Gi(s,o,u){ut.varargs=u;try{var m=ut.getStreamFromFD(s);switch(o){case 21509:return m.tty?0:-59;case 21505:{if(!m.tty)return-59;if(m.tty.ops.ioctl_tcgets){var E=m.tty.ops.ioctl_tcgets(m),C=On();z[C>>2]=E.c_iflag||0,z[C+4>>2]=E.c_oflag||0,z[C+8>>2]=E.c_cflag||0,z[C+12>>2]=E.c_lflag||0;for(var L=0;L<32;L++)F[C+L+17]=E.c_cc[L]||0;return 0}return 0}case 21510:case 21511:case 21512:return m.tty?0:-59;case 21506:case 21507:case 21508:{if(!m.tty)return-59;if(m.tty.ops.ioctl_tcsets){for(var C=On(),B=z[C>>2],Q=z[C+4>>2],he=z[C+8>>2],we=z[C+12>>2],Pe=[],L=0;L<32;L++)Pe.push(F[C+L+17]);return m.tty.ops.ioctl_tcsets(m.tty,o,{c_iflag:B,c_oflag:Q,c_cflag:he,c_lflag:we,c_cc:Pe})}return 0}case 21519:{if(!m.tty)return-59;var C=On();return z[C>>2]=0,0}case 21520:return m.tty?-28:-59;case 21531:{var C=On();return M.ioctl(m,o,C)}case 21523:{if(!m.tty)return-59;if(m.tty.ops.ioctl_tiocgwinsz){var We=m.tty.ops.ioctl_tiocgwinsz(m.tty),C=On();te[C>>1]=We[0],te[C+2>>1]=We[1]}return 0}case 21524:return m.tty?0:-59;case 21515:return m.tty?0:-59;default:return-28}}catch(Ne){if(typeof M>"u"||Ne.name!=="ErrnoError")throw Ne;return-Ne.errno}}function xs(s,o){try{return s=ut.getStr(s),ut.doStat(M.lstat,s,o)}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Hi(s,o,u,m){try{o=ut.getStr(o);var E=m&256,C=m&4096;return m=m&-6401,o=ut.calculateAt(s,o,C),ut.doStat(E?M.lstat:M.stat,o,u)}catch(L){if(typeof M>"u"||L.name!=="ErrnoError")throw L;return-L.errno}}function ys(s,o,u,m){ut.varargs=m;try{o=ut.getStr(o),o=ut.calculateAt(s,o);var E=m?xn():0;return M.open(o,u,E).fd}catch(C){if(typeof M>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}function Ms(s){try{return s=ut.getStr(s),M.rmdir(s),0}catch(o){if(typeof M>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}function To(s,o){try{return s=ut.getStr(s),ut.doStat(M.stat,s,o)}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Ao(s,o,u){try{return o=ut.getStr(o),o=ut.calculateAt(s,o),u===0?M.unlink(o):u===512?M.rmdir(o):tt("Invalid flags passed to unlinkat"),0}catch(m){if(typeof M>"u"||m.name!=="ErrnoError")throw m;return-m.errno}}var Co=()=>{tt("")},Ro=(s,o,u,m,E)=>{},w=()=>{for(var s=new Array(256),o=0;o<256;++o)s[o]=String.fromCharCode(o);W=s},W,K=s=>{for(var o="",u=s;X[u];)o+=W[X[u++]];return o},$={},J={},Se={},Ce,pe=s=>{throw new Ce(s)},Fe,Oe=s=>{throw new Fe(s)},Ke=(s,o,u)=>{s.forEach(B=>Se[B]=o);function m(B){var Q=u(B);Q.length!==s.length&&Oe("Mismatched type converter count");for(var he=0;he<s.length;++he)Le(s[he],Q[he])}var E=new Array(o.length),C=[],L=0;o.forEach((B,Q)=>{J.hasOwnProperty(B)?E[Q]=J[B]:(C.push(B),$.hasOwnProperty(B)||($[B]=[]),$[B].push(()=>{E[Q]=J[B],++L,L===C.length&&m(E)}))}),C.length===0&&m(E)};function je(s,o,u={}){var m=o.name;if(s||pe(`type "${m}" must have a positive integer typeid pointer`),J.hasOwnProperty(s)){if(u.ignoreDuplicateRegistrations)return;pe(`Cannot register type '${m}' twice`)}if(J[s]=o,delete Se[s],$.hasOwnProperty(s)){var E=$[s];delete $[s],E.forEach(C=>C())}}function Le(s,o,u={}){return je(s,o,u)}var at=8,Rt=(s,o,u,m)=>{o=K(o),Le(s,{name:o,fromWireType:function(E){return!!E},toWireType:function(E,C){return C?u:m},argPackAdvance:at,readValueFromPointer:function(E){return this.fromWireType(X[E])},destructorFunction:null})},Mt=[],rt=[],Ut=s=>{s>9&&--rt[s+1]===0&&(rt[s]=void 0,Mt.push(s))},Re=()=>rt.length/2-5-Mt.length,en=()=>{rt.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=Re},Ge={toValue:s=>(s||pe("Cannot use deleted val. handle = "+s),rt[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let o=Mt.pop()||rt.length;return rt[o]=s,rt[o+1]=1,o}}}};function $t(s){return this.fromWireType(Z[s>>2])}var yn={name:"emscripten::val",fromWireType:s=>{var o=Ge.toValue(s);return Ut(s),o},toWireType:(s,o)=>Ge.toHandle(o),argPackAdvance:at,readValueFromPointer:$t,destructorFunction:null},Bn=s=>Le(s,yn),oi=(s,o)=>{switch(o){case 4:return function(u){return this.fromWireType(ee[u>>2])};case 8:return function(u){return this.fromWireType(se[u>>3])};default:throw new TypeError(`invalid float width (${o}): ${s}`)}},mt=(s,o,u)=>{o=K(o),Le(s,{name:o,fromWireType:m=>m,toWireType:(m,E)=>E,argPackAdvance:at,readValueFromPointer:oi(o,u),destructorFunction:null})},St=(s,o)=>Object.defineProperty(o,"name",{value:s}),wn=s=>{for(;s.length;){var o=s.pop(),u=s.pop();u(o)}};function gt(s){for(var o=1;o<s.length;++o)if(s[o]!==null&&s[o].destructorFunction===void 0)return!0;return!1}function Tn(s,o){if(!(s instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof s} which is not a function`);var u=St(s.name||"unknownFunctionName",function(){});u.prototype=s.prototype;var m=new u,E=s.apply(m,o);return E instanceof Object?E:m}function li(s,o,u,m){var E=gt(s),C=s.length-2,L=[],B=["fn"];o&&B.push("thisWired");for(var Q=0;Q<C;++Q)L.push(`arg${Q}`),B.push(`arg${Q}Wired`);L=L.join(","),B=B.join(",");var he=`return function (${L}) {
`;E&&(he+=`var destructors = [];
`);var we=E?"destructors":"null",Pe=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];o&&(he+=`var thisWired = classParam['toWireType'](${we}, this);
`);for(var Q=0;Q<C;++Q)he+=`var arg${Q}Wired = argType${Q}['toWireType'](${we}, arg${Q});
`,Pe.push(`argType${Q}`);if(he+=(u||m?"var rv = ":"")+`invoker(${B});
`,E)he+=`runDestructors(destructors);
`;else for(var Q=o?1:2;Q<s.length;++Q){var We=Q===1?"thisWired":"arg"+(Q-2)+"Wired";s[Q].destructorFunction!==null&&(he+=`${We}_dtor(${We});
`,Pe.push(`${We}_dtor`))}return u&&(he+=`var ret = retType['fromWireType'](rv);
return ret;
`),he+=`}
`,[Pe,he]}function Ss(s,o,u,m,E,C){var L=o.length;L<2&&pe("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var B=o[1]!==null&&u!==null,Q=gt(o),he=o[0].name!=="void",we=[s,pe,m,E,wn,o[0],o[1]],Pe=0;Pe<L-2;++Pe)we.push(o[Pe+2]);if(!Q)for(var Pe=B?1:2;Pe<o.length;++Pe)o[Pe].destructorFunction!==null&&we.push(o[Pe].destructorFunction);let[We,Ne]=li(o,B,he,C);We.push(Ne);var $e=Tn(Function,We)(...we);return St(s,$e)}var Su=(s,o,u)=>{if(s[o].overloadTable===void 0){var m=s[o];s[o]=function(...E){return s[o].overloadTable.hasOwnProperty(E.length)||pe(`Function '${u}' called with an invalid number of arguments (${E.length}) - expects one of (${s[o].overloadTable})!`),s[o].overloadTable[E.length].apply(this,E)},s[o].overloadTable=[],s[o].overloadTable[m.argCount]=m}},bu=(s,o,u)=>{n.hasOwnProperty(s)?((u===void 0||n[s].overloadTable!==void 0&&n[s].overloadTable[u]!==void 0)&&pe(`Cannot register public name '${s}' twice`),Su(n,s,s),n.hasOwnProperty(u)&&pe(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),n[s].overloadTable[u]=o):(n[s]=o,u!==void 0&&(n[s].numArguments=u))},Eu=(s,o)=>{for(var u=[],m=0;m<s;m++)u.push(Z[o+m*4>>2]);return u},wu=(s,o,u)=>{n.hasOwnProperty(s)||Oe("Replacing nonexistent public symbol"),n[s].overloadTable!==void 0&&u!==void 0?n[s].overloadTable[u]=o:(n[s]=o,n[s].argCount=u)},Tu=(s,o,u)=>{s=s.replace(/p/g,"i");var m=n["dynCall_"+s];return m(o,...u)},bs=[],fc,pc=s=>{var o=bs[s];return o||(s>=bs.length&&(bs.length=s+1),bs[s]=o=fc.get(s)),o},Au=(s,o,u=[])=>{if(s.includes("j"))return Tu(s,o,u);var m=pc(o)(...u);return m},Cu=(s,o)=>(...u)=>Au(s,o,u),Ru=(s,o)=>{s=K(s);function u(){return s.includes("j")?Cu(s,o):pc(o)}var m=u();return typeof m!="function"&&pe(`unknown function pointer with signature ${s}: ${o}`),m},Pu=(s,o)=>{var u=St(o,function(m){this.name=o,this.message=m;var E=new Error(m).stack;E!==void 0&&(this.stack=this.toString()+`
`+E.replace(/^Error(:[^\n]*)?\n/,""))});return u.prototype=Object.create(s.prototype),u.prototype.constructor=u,u.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},u},mc,gc=s=>{var o=Sc(s),u=K(o);return Zn(o),u},Iu=(s,o)=>{var u=[],m={};function E(C){if(!m[C]&&!J[C]){if(Se[C]){Se[C].forEach(E);return}u.push(C),m[C]=!0}}throw o.forEach(E),new mc(`${s}: `+u.map(gc).join([", "]))},Du=s=>{s=s.trim();let o=s.indexOf("(");return o!==-1?s.substr(0,o):s},Lu=(s,o,u,m,E,C,L,B)=>{var Q=Eu(o,u);s=K(s),s=Du(s),E=Ru(m,E),bu(s,function(){Iu(`Cannot call ${s} due to unbound types`,Q)},o-1),Ke([],Q,he=>{var we=[he[0],null].concat(he.slice(1));return wu(s,Ss(s,we,null,E,C,L),o-1),[]})},Nu=(s,o,u)=>{switch(o){case 1:return u?m=>F[m]:m=>X[m];case 2:return u?m=>te[m>>1]:m=>re[m>>1];case 4:return u?m=>z[m>>2]:m=>Z[m>>2];default:throw new TypeError(`invalid integer width (${o}): ${s}`)}},Uu=(s,o,u,m,E)=>{o=K(o),E===-1&&(E=4294967295);var C=we=>we;if(m===0){var L=32-8*u;C=we=>we<<L>>>L}var B=o.includes("unsigned"),Q=(we,Pe)=>{},he;B?he=function(we,Pe){return Q(Pe,this.name),Pe>>>0}:he=function(we,Pe){return Q(Pe,this.name),Pe},Le(s,{name:o,fromWireType:C,toWireType:he,argPackAdvance:at,readValueFromPointer:Nu(o,u,m!==0),destructorFunction:null})},Fu=(s,o,u)=>{var m=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],E=m[o];function C(L){var B=Z[L>>2],Q=Z[L+4>>2];return new E(F.buffer,Q,B)}u=K(u),Le(s,{name:u,fromWireType:C,argPackAdvance:at,readValueFromPointer:C},{ignoreDuplicateRegistrations:!0})},Wi=(s,o,u)=>Ze(s,X,o,u),Ou=(s,o)=>{o=K(o);var u=o==="std::string";Le(s,{name:o,fromWireType(m){var E=Z[m>>2],C=m+4,L;if(u)for(var B=C,Q=0;Q<=E;++Q){var he=C+Q;if(Q==E||X[he]==0){var we=he-B,Pe=Ri(B,we);L===void 0?L=Pe:(L+="\0",L+=Pe),B=he+1}}else{for(var We=new Array(E),Q=0;Q<E;++Q)We[Q]=String.fromCharCode(X[C+Q]);L=We.join("")}return Zn(m),L},toWireType(m,E){E instanceof ArrayBuffer&&(E=new Uint8Array(E));var C,L=typeof E=="string";L||E instanceof Uint8Array||E instanceof Uint8ClampedArray||E instanceof Int8Array||pe("Cannot pass non-string to std::string"),u&&L?C=ke(E):C=E.length;var B=Uo(4+C+1),Q=B+4;if(Z[B>>2]=C,u&&L)Wi(E,Q,C+1);else if(L)for(var he=0;he<C;++he){var we=E.charCodeAt(he);we>255&&(Zn(Q),pe("String has UTF-16 code units that do not fit in 8 bits")),X[Q+he]=we}else for(var he=0;he<C;++he)X[Q+he]=E[he];return m!==null&&m.push(Zn,B),B},argPackAdvance:at,readValueFromPointer:$t,destructorFunction(m){Zn(m)}})},_c=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Bu=(s,o)=>{for(var u=s,m=u>>1,E=m+o/2;!(m>=E)&&re[m];)++m;if(u=m<<1,u-s>32&&_c)return _c.decode(X.subarray(s,u));for(var C="",L=0;!(L>=o/2);++L){var B=te[s+L*2>>1];if(B==0)break;C+=String.fromCharCode(B)}return C},ku=(s,o,u)=>{if(u??(u=2147483647),u<2)return 0;u-=2;for(var m=o,E=u<s.length*2?u/2:s.length,C=0;C<E;++C){var L=s.charCodeAt(C);te[o>>1]=L,o+=2}return te[o>>1]=0,o-m},zu=s=>s.length*2,Vu=(s,o)=>{for(var u=0,m="";!(u>=o/4);){var E=z[s+u*4>>2];if(E==0)break;if(++u,E>=65536){var C=E-65536;m+=String.fromCharCode(55296|C>>10,56320|C&1023)}else m+=String.fromCharCode(E)}return m},Gu=(s,o,u)=>{if(u??(u=2147483647),u<4)return 0;for(var m=o,E=m+u-4,C=0;C<s.length;++C){var L=s.charCodeAt(C);if(L>=55296&&L<=57343){var B=s.charCodeAt(++C);L=65536+((L&1023)<<10)|B&1023}if(z[o>>2]=L,o+=4,o+4>E)break}return z[o>>2]=0,o-m},Hu=s=>{for(var o=0,u=0;u<s.length;++u){var m=s.charCodeAt(u);m>=55296&&m<=57343&&++u,o+=4}return o},Wu=(s,o,u)=>{u=K(u);var m,E,C,L;o===2?(m=Bu,E=ku,L=zu,C=B=>re[B>>1]):o===4&&(m=Vu,E=Gu,L=Hu,C=B=>Z[B>>2]),Le(s,{name:u,fromWireType:B=>{for(var Q=Z[B>>2],he,we=B+4,Pe=0;Pe<=Q;++Pe){var We=B+4+Pe*o;if(Pe==Q||C(We)==0){var Ne=We-we,$e=m(we,Ne);he===void 0?he=$e:(he+="\0",he+=$e),we=We+o}}return Zn(B),he},toWireType:(B,Q)=>{typeof Q!="string"&&pe(`Cannot pass non-string to C++ string type ${u}`);var he=L(Q),we=Uo(4+he+o);return Z[we>>2]=he/o,E(Q,we+4,he+o),B!==null&&B.push(Zn,we),we},argPackAdvance:at,readValueFromPointer:$t,destructorFunction(B){Zn(B)}})},Xu=(s,o)=>{o=K(o),Le(s,{isVoid:!0,name:o,argPackAdvance:0,fromWireType:()=>{},toWireType:(u,m)=>{}})},qu=1,Yu=()=>qu,vc=s=>{for(var o=s.split("."),u=0;u<4;u++){var m=Number(o[u]);if(isNaN(m))return null;o[u]=m}return(o[0]|o[1]<<8|o[2]<<16|o[3]<<24)>>>0},Es=s=>parseInt(s),Zu=s=>{var o,u,m,E,C=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,L=[];if(!C.test(s))return null;if(s==="::")return[0,0,0,0,0,0,0,0];for(s.startsWith("::")?s=s.replace("::","Z:"):s=s.replace("::",":Z:"),s.indexOf(".")>0?(s=s.replace(new RegExp("[.]","g"),":"),o=s.split(":"),o[o.length-4]=Es(o[o.length-4])+Es(o[o.length-3])*256,o[o.length-3]=Es(o[o.length-2])+Es(o[o.length-1])*256,o=o.slice(0,o.length-2)):o=s.split(":"),m=0,E=0,u=0;u<o.length;u++)if(typeof o[u]=="string")if(o[u]==="Z"){for(E=0;E<8-o.length+1;E++)L[u+E]=0;m=E-1}else L[u+m]=bc(parseInt(o[u],16));else L[u+m]=o[u];return[L[1]<<16|L[0],L[3]<<16|L[2],L[5]<<16|L[4],L[7]<<16|L[6]]},ci={address_map:{id:1,addrs:{},names:{}},lookup_name(s){var o=vc(s);if(o!==null||(o=Zu(s),o!==null))return s;var u;if(ci.address_map.addrs[s])u=ci.address_map.addrs[s];else{var m=ci.address_map.id++;G(m<65535,"exceeded max address mappings of 65535"),u="172.29."+(m&255)+"."+(m&65280),ci.address_map.names[u]=s,ci.address_map.addrs[s]=u}return u},lookup_addr(s){return ci.address_map.names[s]?ci.address_map.names[s]:null}},$u=s=>{var o=Ri(s);return vc(ci.lookup_name(o))},Ju=(s,o,u)=>X.copyWithin(s,o,o+u),Po=(s,o)=>{var u=J[s];return u===void 0&&pe(`${o} has unknown type ${gc(s)}`),u},xc=(s,o,u)=>{var m=[],E=s.toWireType(m,u);return m.length&&(Z[o>>2]=Ge.toHandle(m)),E},Ku=(s,o,u)=>(s=Ge.toValue(s),o=Po(o,"emval::as"),xc(o,u,s)),ju={},Io=s=>{var o=ju[s];return o===void 0?K(s):o},Do=[],Qu=(s,o,u,m,E)=>(s=Do[s],o=Ge.toValue(o),u=Io(u),s(o,o[u],m,E)),yc=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),ed=s=>s===0?Ge.toHandle(yc()):(s=Io(s),Ge.toHandle(yc()[s])),td=s=>{var o=Do.length;return Do.push(s),o},nd=(s,o)=>{for(var u=new Array(s),m=0;m<s;++m)u[m]=Po(Z[o+m*4>>2],"parameter "+m);return u},lv=Reflect.construct,id=(s,o,u)=>{var m=nd(s,o),E=m.shift();s--;var C=`return function (obj, func, destructorsRef, args) {
`,L=0,B=[];u===0&&B.push("obj");for(var Q=["retType"],he=[E],we=0;we<s;++we)B.push("arg"+we),Q.push("argType"+we),he.push(m[we]),C+=`  var arg${we} = argType${we}.readValueFromPointer(args${L?"+"+L:""});
`,L+=m[we].argPackAdvance;var Pe=u===1?"new func":"func.call";C+=`  var rv = ${Pe}(${B.join(", ")});
`,E.isVoid||(Q.push("emval_returnValue"),he.push(xc),C+=`  return emval_returnValue(retType, destructorsRef, rv);
`),C+=`};
`,Q.push(C);var We=Tn(Function,Q)(...he),Ne=`methodCaller<(${m.map($e=>$e.name).join(", ")}) => ${E.name}>`;return td(St(Ne,We))},rd=(s,o)=>(s=Ge.toValue(s),o=Ge.toValue(o),Ge.toHandle(s[o])),sd=s=>{s>9&&(rt[s+1]+=1)},ad=()=>Ge.toHandle([]),od=s=>Ge.toHandle(Io(s)),ld=()=>Ge.toHandle({}),cd=s=>{var o=Ge.toValue(s);wn(o),Ut(s)},hd=(s,o,u)=>{s=Ge.toValue(s),o=Ge.toValue(o),u=Ge.toValue(u),s[o]=u},ud=(s,o)=>{s=Po(s,"_emval_take_value");var u=s.readValueFromPointer(o);return Ge.toHandle(u)},dd=s=>s%4===0&&(s%100!==0||s%400===0),fd=[0,31,60,91,121,152,182,213,244,274,305,335],pd=[0,31,59,90,120,151,181,212,243,273,304,334],md=s=>{var o=dd(s.getFullYear()),u=o?fd:pd,m=u[s.getMonth()]+s.getDate()-1;return m},Lo=(s,o)=>o+2097152>>>0<4194305-!!s?(s>>>0)+o*4294967296:NaN;function gd(s,o,u){var m=Lo(s,o),E=new Date(m*1e3);z[u>>2]=E.getSeconds(),z[u+4>>2]=E.getMinutes(),z[u+8>>2]=E.getHours(),z[u+12>>2]=E.getDate(),z[u+16>>2]=E.getMonth(),z[u+20>>2]=E.getFullYear()-1900,z[u+24>>2]=E.getDay();var C=md(E)|0;z[u+28>>2]=C,z[u+36>>2]=-(E.getTimezoneOffset()*60);var L=new Date(E.getFullYear(),0,1),B=new Date(E.getFullYear(),6,1).getTimezoneOffset(),Q=L.getTimezoneOffset(),he=(B!=Q&&E.getTimezoneOffset()==Math.min(Q,B))|0;z[u+32>>2]=he}function _d(s,o,u,m,E,C,L){var B=Lo(C,L);try{var Q=ut.getStreamFromFD(E);u&2&&ut.doMsync(s,Q,o,m,B)}catch(he){if(typeof M>"u"||he.name!=="ErrnoError")throw he;return-he.errno}}var vd=(s,o,u,m)=>{var E=new Date().getFullYear(),C=new Date(E,0,1),L=new Date(E,6,1),B=C.getTimezoneOffset(),Q=L.getTimezoneOffset(),he=Math.max(B,Q);Z[s>>2]=he*60,z[o>>2]=+(B!=Q);var we=Ne=>{var $e=Ne>=0?"-":"+",ot=Math.abs(Ne),Xt=String(Math.floor(ot/60)).padStart(2,"0"),Lt=String(ot%60).padStart(2,"0");return`UTC${$e}${Xt}${Lt}`},Pe=we(B),We=we(Q);Q<B?(Wi(Pe,u,17),Wi(We,m,17)):(Wi(Pe,m,17),Wi(We,u,17))},xd=()=>Date.now();function yd(){return new Error().stack.toString()}var Xi=s=>{Xi.shown||(Xi.shown={}),Xi.shown[s]||(Xi.shown[s]=1,h&&(s="warning: "+s),D(s))};function Md(s){var o=yd(),u=o.lastIndexOf("_emscripten_log"),m=o.lastIndexOf("_emscripten_get_callstack"),E=o.indexOf(`
`,Math.max(u,m))+1;o=o.slice(E),s&8&&typeof emscripten_source_map>"u"&&(Xi('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),s^=8,s|=16);var C=o.split(`
`);o="";var L=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),B=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),Q=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var he in C){var we=C[he],Pe="",We="",Ne=0,$e=0,ot=Q.exec(we);if(ot&&ot.length==5)Pe=ot[1],We=ot[2],Ne=ot[3],$e=ot[4];else if(ot=L.exec(we)||B.exec(we),ot&&ot.length>=4)Pe=ot[1],We=ot[2],Ne=ot[3],$e=ot[4]|0;else{o+=we+`
`;continue}var Xt=!1;if(s&8){var Lt=emscripten_source_map.originalPositionFor({line:Ne,column:$e});Xt=Lt?.source,Xt&&(s&64&&(Lt.source=Lt.source.substring(Lt.source.replace(/\\/g,"/").lastIndexOf("/")+1)),o+=`    at ${Pe} (${Lt.source}:${Lt.line}:${Lt.column})
`)}(s&16||!Xt)&&(s&64&&(We=We.substring(We.replace(/\\/g,"/").lastIndexOf("/")+1)),o+=(Xt?`     = ${Pe}`:`    at ${Pe}`)+` (${We}:${Ne}:${$e})
`)}return o=o.replace(/\s+$/,""),o}function Sd(s,o,u){var m=Md(s);if(!o||u<=0)return ke(m)+1;var E=Wi(m,o,u);return E+1}var Mc=()=>2147483648,bd=()=>Mc(),Ed=s=>{var o=U.buffer,u=(s-o.byteLength+65535)/65536|0;try{return U.grow(u),ue(),1}catch{}},wd=s=>{var o=X.length;s>>>=0;var u=Mc();if(s>u)return!1;for(var m=1;m<=4;m*=2){var E=o*(1+.2/m);E=Math.min(E,s+100663296);var C=Math.min(u,Ee(Math.max(s,E),65536)),L=Ed(C);if(L)return!0}return!1},No={},Td=()=>f||"./this.program",Ar=()=>{if(!Ar.strings){var s=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:Td()};for(var u in No)No[u]===void 0?delete o[u]:o[u]=No[u];var m=[];for(var u in o)m.push(`${u}=${o[u]}`);Ar.strings=m}return Ar.strings},Ad=(s,o)=>{for(var u=0;u<s.length;++u)F[o++]=s.charCodeAt(u);F[o]=0},Cd=(s,o)=>{var u=0;return Ar().forEach((m,E)=>{var C=o+u;Z[s+E*4>>2]=C,Ad(m,C),u+=m.length+1}),0},Rd=(s,o)=>{var u=Ar();Z[s>>2]=u.length;var m=0;return u.forEach(E=>m+=E.length+1),Z[o>>2]=m,0},Pd=0,Id=()=>ve||Pd>0,Dd=s=>{I=s,Id()||(n.onExit?.(s),b=!0),v(s,new ne(s))},Ld=(s,o)=>{I=s,Dd(s)},Nd=Ld;function Ud(s){try{var o=ut.getStreamFromFD(s);return M.close(o),0}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return u.errno}}var Fd=(s,o,u,m)=>{for(var E=0,C=0;C<u;C++){var L=Z[o>>2],B=Z[o+4>>2];o+=8;var Q=M.read(s,F,L,B,m);if(Q<0)return-1;if(E+=Q,Q<B)break;typeof m<"u"&&(m+=Q)}return E};function Od(s,o,u,m){try{var E=ut.getStreamFromFD(s),C=Fd(E,o,u);return Z[m>>2]=C,0}catch(L){if(typeof M>"u"||L.name!=="ErrnoError")throw L;return L.errno}}function Bd(s,o,u,m,E){var C=Lo(o,u);try{if(isNaN(C))return 61;var L=ut.getStreamFromFD(s);return M.llseek(L,C,m),q=[L.position>>>0,(k=L.position,+Math.abs(k)>=1?k>0?+Math.floor(k/4294967296)>>>0:~~+Math.ceil((k-+(~~k>>>0))/4294967296)>>>0:0)],z[E>>2]=q[0],z[E+4>>2]=q[1],L.getdents&&C===0&&m===0&&(L.getdents=null),0}catch(B){if(typeof M>"u"||B.name!=="ErrnoError")throw B;return B.errno}}var kd=(s,o,u,m)=>{for(var E=0,C=0;C<u;C++){var L=Z[o>>2],B=Z[o+4>>2];o+=8;var Q=M.write(s,F,L,B,m);if(Q<0)return-1;if(E+=Q,Q<B)break;typeof m<"u"&&(m+=Q)}return E};function zd(s,o,u,m){try{var E=ut.getStreamFromFD(s),C=kd(E,o,u);return Z[m>>2]=C,0}catch(L){if(typeof M>"u"||L.name!=="ErrnoError")throw L;return L.errno}}M.createPreloadedFile=vn,M.staticInit(),w(),Ce=n.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},Fe=n.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},en(),mc=n.UnboundTypeError=Pu(Error,"UnboundTypeError");var Vd={M:ms,N:gs,h:_s,I:vs,Q:Gi,F:xs,G:Hi,j:ys,B:Ms,H:To,C:Ao,A:Co,w:Ro,V:Rt,U:Bn,n:mt,f:Lu,b:Uu,a:Fu,m:Ou,i:Wu,W:Xu,J:Yu,x:$u,L:Ju,e:Ku,q:Qu,T:Ut,u:ed,p:id,k:rd,Y:sd,X:ad,r:od,Z:ld,o:cd,c:hd,d:ud,t:gd,s:_d,O:vd,K:xd,R:Sd,z:bd,y:wd,D:Cd,E:Rd,S:Nd,g:Ud,P:Od,v:Bd,l:zd},Vt=x(),Gd=()=>(Gd=Vt.$)(),Sc=s=>(Sc=Vt.aa)(s),Uo=s=>(Uo=Vt.ca)(s),Zn=s=>(Zn=Vt.da)(s),bc=s=>(bc=Vt.ea)(s),Ec=(s,o)=>(Ec=Vt.fa)(s,o),wc=()=>(wc=Vt.ga)(),Hd=n.dynCall_viijii=(s,o,u,m,E,C,L)=>(Hd=n.dynCall_viijii=Vt.ha)(s,o,u,m,E,C,L),Wd=n.dynCall_viiiiji=(s,o,u,m,E,C,L,B)=>(Wd=n.dynCall_viiiiji=Vt.ia)(s,o,u,m,E,C,L,B),Xd=n.dynCall_jiji=(s,o,u,m,E)=>(Xd=n.dynCall_jiji=Vt.ja)(s,o,u,m,E),qd=n.dynCall_iiiiij=(s,o,u,m,E,C,L)=>(qd=n.dynCall_iiiiij=Vt.ka)(s,o,u,m,E,C,L),Yd=n.dynCall_iiiiijj=(s,o,u,m,E,C,L,B,Q)=>(Yd=n.dynCall_iiiiijj=Vt.la)(s,o,u,m,E,C,L,B,Q),Zd=n.dynCall_iiiiiijj=(s,o,u,m,E,C,L,B,Q,he)=>(Zd=n.dynCall_iiiiiijj=Vt.ma)(s,o,u,m,E,C,L,B,Q,he),ws,Tc;xt=function s(){ws||Ac(),ws||(xt=s)};function Ac(){if(He>0||!Tc&&(Tc=1,Et(),He>0))return;function s(){ws||(ws=1,n.calledRun=1,!b&&(ht(),r(n),n.onRuntimeInitialized?.(),oe()))}n.setStatus?(n.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>n.setStatus(""),1),s()},1)):s()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Ac(),t=l,t})})();typeof _u=="object"&&typeof dc=="object"?dc.exports=gu:typeof define=="function"&&define.amd&&define([],()=>gu)});var Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jc=0,gl=1,Qc=2;var ns=1,eh=2,vr=3,ii=0,an=1,bn=2,Wn=0,Fi=1,_l=2,vl=3,xl=4,th=5;var _i=100,nh=101,ih=102,rh=103,sh=104,ah=200,oh=201,lh=202,ch=203,Ys=204,Zs=205,hh=206,uh=207,dh=208,fh=209,ph=210,mh=211,gh=212,_h=213,vh=214,$s=0,Js=1,Ks=2,Oi=3,js=4,Qs=5,ea=6,ta=7,yl=0,xh=1,yh=2,Nn=0,Ml=1,Sl=2,bl=3,El=4,wl=5,Tl=6,Al=7;var Cl=300,Ei=301,ki=302,wa=303,Ta=304,is=306,na=1e3,Vn=1001,ia=1002,Ht=1003,Mh=1004;var rs=1005;var Zt=1006,Aa=1007;var wi=1008;var cn=1009,Rl=1010,Pl=1011,xr=1012,Ca=1013,Un=1014,Fn=1015,Xn=1016,Ra=1017,Pa=1018,yr=1020,Il=35902,Dl=35899,Ll=1021,Nl=1022,En=1023,Gn=1026,Ti=1027,Ul=1028,Ia=1029,Ai=1030,Da=1031;var La=1033,ss=33776,as=33777,os=33778,ls=33779,Na=35840,Ua=35841,Fa=35842,Oa=35843,Ba=36196,ka=37492,za=37496,Va=37488,Ga=37489,cs=37490,Ha=37491,Wa=37808,Xa=37809,qa=37810,Ya=37811,Za=37812,$a=37813,Ja=37814,Ka=37815,ja=37816,Qa=37817,eo=37818,to=37819,no=37820,io=37821,ro=36492,so=36494,ao=36495,oo=36283,lo=36284,hs=36285,co=36286;var Ur=2300,ra=2301,qs=2302,rl=2303,sl=2400,al=2401,ol=2402;var Sh=3200;var ho=0,bh=1,ai="",Yt="srgb",Fr="srgb-linear",Or="linear",pt="srgb";var Ni=7680;var ll=519,Eh=512,wh=513,Th=514,uo=515,Ah=516,Ch=517,fo=518,Rh=519,cl=35044;var Fl="300 es",Dn=2e3,or=2001;function nf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ph(){let i=Br("canvas");return i.style.display="block",i}var Pc={},lr=null;function Ol(...i){let e="THREE."+i.shift();lr?lr("log",e,...i):console.log(e,...i)}function Ih(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=Ih(i);let e="THREE."+i.shift();if(lr)lr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=Ih(i);let e="THREE."+i.shift();if(lr)lr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ui(...i){let e=i.join(" ");e in Pc||(Pc[e]=!0,Ve(...i))}function Dh(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}var Lh={[$s]:Js,[Ks]:ea,[js]:ta,[Oi]:Qs,[Js]:$s,[ea]:Ks,[ta]:js,[Qs]:Oi},Ln=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ic=1234567,Lr=Math.PI/180,cr=180/Math.PI;function Mr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Bl(i,e){return(i%e+e)%e}function sf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function af(i,e,t){return i!==e?(t-i)/(e-i):0}function Nr(i,e,t){return(1-t)*i+t*e}function of(i,e,t,n){return Nr(i,e,1-Math.exp(-t*n))}function lf(i,e=1){return e-Math.abs(Bl(i,e*2)-e)}function cf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function uf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function df(i,e){return i+Math.random()*(e-i)}function ff(i){return i*(.5-Math.random())}function pf(i){i!==void 0&&(Ic=i);let e=Ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mf(i){return i*Lr}function gf(i){return i*cr}function _f(i){return(i&i-1)===0&&i!==0}function vf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yf(i,e,t,n,r){let a=Math.cos,l=Math.sin,c=a(t/2),d=l(t/2),h=a((e+n)/2),p=l((e+n)/2),g=a((e-n)/2),f=l((e-n)/2),v=a((n-e)/2),S=l((n-e)/2);switch(r){case"XYX":i.set(c*p,d*g,d*f,c*h);break;case"YZY":i.set(d*f,c*p,d*g,c*h);break;case"ZXZ":i.set(d*g,d*f,c*p,c*h);break;case"XZX":i.set(c*p,d*S,d*v,c*h);break;case"YXY":i.set(d*v,c*p,d*S,c*h);break;case"ZYZ":i.set(d*S,d*v,c*p,c*h);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function sr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var kl={DEG2RAD:Lr,RAD2DEG:cr,generateUUID:Mr,clamp:nt,euclideanModulo:Bl,mapLinear:sf,inverseLerp:af,lerp:Nr,damp:of,pingpong:lf,smoothstep:cf,smootherstep:hf,randInt:uf,randFloat:df,randFloatSpread:ff,seededRandom:pf,degToRad:mf,radToDeg:gf,isPowerOfTwo:_f,ceilPowerOfTwo:vf,floorPowerOfTwo:xf,setQuaternionFromProperEuler:yf,normalize:tn,denormalize:sr},Wl=class Wl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wl.prototype.isVector2=!0;var Ye=Wl,fn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let d=n[r+0],h=n[r+1],p=n[r+2],g=n[r+3],f=a[l+0],v=a[l+1],S=a[l+2],A=a[l+3];if(g!==A||d!==f||h!==v||p!==S){let y=d*f+h*v+p*S+g*A;y<0&&(f=-f,v=-v,S=-S,A=-A,y=-y);let _=1-c;if(y<.9995){let N=Math.acos(y),O=Math.sin(N);_=Math.sin(_*N)/O,c=Math.sin(c*N)/O,d=d*_+f*c,h=h*_+v*c,p=p*_+S*c,g=g*_+A*c}else{d=d*_+f*c,h=h*_+v*c,p=p*_+S*c,g=g*_+A*c;let N=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=N,h*=N,p*=N,g*=N}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,a,l){let c=n[r],d=n[r+1],h=n[r+2],p=n[r+3],g=a[l],f=a[l+1],v=a[l+2],S=a[l+3];return e[t]=c*S+p*g+d*v-h*f,e[t+1]=d*S+p*f+h*g-c*v,e[t+2]=h*S+p*v+c*f-d*g,e[t+3]=p*S-c*g-d*f-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,d=Math.sin,h=c(n/2),p=c(r/2),g=c(a/2),f=d(n/2),v=d(r/2),S=d(a/2);switch(l){case"XYZ":this._x=f*p*g+h*v*S,this._y=h*v*g-f*p*S,this._z=h*p*S+f*v*g,this._w=h*p*g-f*v*S;break;case"YXZ":this._x=f*p*g+h*v*S,this._y=h*v*g-f*p*S,this._z=h*p*S-f*v*g,this._w=h*p*g+f*v*S;break;case"ZXY":this._x=f*p*g-h*v*S,this._y=h*v*g+f*p*S,this._z=h*p*S+f*v*g,this._w=h*p*g-f*v*S;break;case"ZYX":this._x=f*p*g-h*v*S,this._y=h*v*g+f*p*S,this._z=h*p*S-f*v*g,this._w=h*p*g+f*v*S;break;case"YZX":this._x=f*p*g+h*v*S,this._y=h*v*g+f*p*S,this._z=h*p*S-f*v*g,this._w=h*p*g-f*v*S;break;case"XZY":this._x=f*p*g-h*v*S,this._y=h*v*g-f*p*S,this._z=h*p*S+f*v*g,this._w=h*p*g+f*v*S;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],d=t[9],h=t[2],p=t[6],g=t[10],f=n+c+g;if(f>0){let v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(p-d)*v,this._y=(a-h)*v,this._z=(l-r)*v}else if(n>c&&n>g){let v=2*Math.sqrt(1+n-c-g);this._w=(p-d)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(a+h)/v}else if(c>g){let v=2*Math.sqrt(1+c-n-g);this._w=(a-h)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(d+p)/v}else{let v=2*Math.sqrt(1+g-n-c);this._w=(l-r)/v,this._x=(a+h)/v,this._y=(d+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=n*p+l*c+r*h-a*d,this._y=r*p+l*d+a*c-n*h,this._z=a*p+l*h+n*d-r*c,this._w=l*p-n*c-r*d-a*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,l=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,a=-a,l=-l,c=-c);let d=1-t;if(c<.9995){let h=Math.acos(c),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+l*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xl=class Xl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,d=e.w,h=2*(l*r-c*n),p=2*(c*t-a*r),g=2*(a*n-l*t);return this.x=t+d*h+l*g-c*p,this.y=n+d*p+c*h-a*g,this.z=r+d*g+a*p-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,d=t.z;return this.x=r*d-a*c,this.y=a*l-n*d,this.z=n*c-r*l,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xl.prototype.isVector3=!0;var Y=Xl,Fo=new Y,Dc=new fn,ql=class ql{constructor(e,t,n,r,a,l,c,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,d,h)}set(e,t,n,r,a,l,c,d,h){let p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=n,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],d=n[6],h=n[1],p=n[4],g=n[7],f=n[2],v=n[5],S=n[8],A=r[0],y=r[3],_=r[6],N=r[1],O=r[4],T=r[7],D=r[2],P=r[5],U=r[8];return a[0]=l*A+c*N+d*D,a[3]=l*y+c*O+d*P,a[6]=l*_+c*T+d*U,a[1]=h*A+p*N+g*D,a[4]=h*y+p*O+g*P,a[7]=h*_+p*T+g*U,a[2]=f*A+v*N+S*D,a[5]=f*y+v*O+S*P,a[8]=f*_+v*T+S*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*l*p-t*c*h-n*a*p+n*c*d+r*a*h-r*l*d}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=p*l-c*h,f=c*d-p*a,v=h*a-l*d,S=t*g+n*f+r*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/S;return e[0]=g*A,e[1]=(r*h-p*n)*A,e[2]=(c*n-r*l)*A,e[3]=f*A,e[4]=(p*t-r*d)*A,e[5]=(r*a-c*t)*A,e[6]=v*A,e[7]=(n*d-h*t)*A,e[8]=(l*t-n*a)*A,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){let d=Math.cos(a),h=Math.sin(a);return this.set(n*d,n*h,-n*(d*l+h*c)+l+e,-r*h,r*d,-r*(-h*l+d*c)+c+t,0,0,1),this}scale(e,t){return Ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oo.makeScale(e,t)),this}rotate(e){return Ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oo.makeRotation(-e)),this}translate(e,t){return Ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ql.prototype.isMatrix3=!0;var Je=ql,Oo=new Je,Lc=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mf(){let i={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(r,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===pt&&(r.r=ni(r.r),r.g=ni(r.g),r.b=ni(r.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===pt&&(r.r=ar(r.r),r.g=ar(r.g),r.b=ar(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?Or:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,l){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fr]:{primaries:e,whitePoint:n,transfer:Or,toXYZ:Lc,fromXYZ:Nc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Lc,fromXYZ:Nc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}var lt=Mf();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yi,sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=Br("canvas")),Yi.width=e.width,Yi.height=e.height;let r=Yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=ni(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sf=0,hr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(Bo(r[l].image)):a.push(Bo(r[l]))}else a=Bo(r);n.url=a}return t||(e.images[this.uuid]=n),n}};function Bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var bf=0,ko=new Y,on=class i extends Ln{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Vn,r=Vn,a=Zt,l=wi,c=En,d=cn,h=i.DEFAULT_ANISOTROPY,p=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Mr(),this.name="",this.source=new hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ko).x}get height(){return this.source.getSize(ko).y}get depth(){return this.source.getSize(ko).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Cl;on.DEFAULT_ANISOTROPY=1;var Yl=class Yl{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a,d=e.elements,h=d[0],p=d[4],g=d[8],f=d[1],v=d[5],S=d[9],A=d[2],y=d[6],_=d[10];if(Math.abs(p-f)<.01&&Math.abs(g-A)<.01&&Math.abs(S-y)<.01){if(Math.abs(p+f)<.1&&Math.abs(g+A)<.1&&Math.abs(S+y)<.1&&Math.abs(h+v+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let O=(h+1)/2,T=(v+1)/2,D=(_+1)/2,P=(p+f)/4,U=(g+A)/4,b=(S+y)/4;return O>T&&O>D?O<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(O),r=P/n,a=U/n):T>D?T<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),n=P/r,a=b/r):D<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(D),n=U/a,r=b/a),this.set(n,r,a,t),this}let N=Math.sqrt((y-S)*(y-S)+(g-A)*(g-A)+(f-p)*(f-p));return Math.abs(N)<.001&&(N=1),this.x=(y-S)/N,this.y=(g-A)/N,this.z=(f-p)/N,this.w=Math.acos((h+v+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yl.prototype.isVector4=!0;var Tt=Yl,aa=class extends Ln{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},a=new on(r),l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new hr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends aa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},kr=class extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var oa=class extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ea=class Ea{constructor(e,t,n,r,a,l,c,d,h,p,g,f,v,S,A,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,d,h,p,g,f,v,S,A,y)}set(e,t,n,r,a,l,c,d,h,p,g,f,v,S,A,y){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=a,_[5]=l,_[9]=c,_[13]=d,_[2]=h,_[6]=p,_[10]=g,_[14]=f,_[3]=v,_[7]=S,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ea().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),a=1/Zi.setFromMatrixColumn(e,1).length(),l=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),d=Math.cos(r),h=Math.sin(r),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){let f=l*p,v=l*g,S=c*p,A=c*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=v+S*h,t[5]=f-A*h,t[9]=-c*d,t[2]=A-f*h,t[6]=S+v*h,t[10]=l*d}else if(e.order==="YXZ"){let f=d*p,v=d*g,S=h*p,A=h*g;t[0]=f+A*c,t[4]=S*c-v,t[8]=l*h,t[1]=l*g,t[5]=l*p,t[9]=-c,t[2]=v*c-S,t[6]=A+f*c,t[10]=l*d}else if(e.order==="ZXY"){let f=d*p,v=d*g,S=h*p,A=h*g;t[0]=f-A*c,t[4]=-l*g,t[8]=S+v*c,t[1]=v+S*c,t[5]=l*p,t[9]=A-f*c,t[2]=-l*h,t[6]=c,t[10]=l*d}else if(e.order==="ZYX"){let f=l*p,v=l*g,S=c*p,A=c*g;t[0]=d*p,t[4]=S*h-v,t[8]=f*h+A,t[1]=d*g,t[5]=A*h+f,t[9]=v*h-S,t[2]=-h,t[6]=c*d,t[10]=l*d}else if(e.order==="YZX"){let f=l*d,v=l*h,S=c*d,A=c*h;t[0]=d*p,t[4]=A-f*g,t[8]=S*g+v,t[1]=g,t[5]=l*p,t[9]=-c*p,t[2]=-h*p,t[6]=v*g+S,t[10]=f-A*g}else if(e.order==="XZY"){let f=l*d,v=l*h,S=c*d,A=c*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=f*g+A,t[5]=l*p,t[9]=v*g-S,t[2]=S*g-v,t[6]=c*p,t[10]=A*g+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ef,e,wf)}lookAt(e,t,n){let r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),hi.crossVectors(n,un),hi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),hi.crossVectors(n,un)),hi.normalize(),Ts.crossVectors(un,hi),r[0]=hi.x,r[4]=Ts.x,r[8]=un.x,r[1]=hi.y,r[5]=Ts.y,r[9]=un.y,r[2]=hi.z,r[6]=Ts.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],d=n[8],h=n[12],p=n[1],g=n[5],f=n[9],v=n[13],S=n[2],A=n[6],y=n[10],_=n[14],N=n[3],O=n[7],T=n[11],D=n[15],P=r[0],U=r[4],b=r[8],I=r[12],G=r[1],F=r[5],X=r[9],te=r[13],re=r[2],z=r[6],Z=r[10],ee=r[14],se=r[3],ue=r[7],be=r[11],Ae=r[15];return a[0]=l*P+c*G+d*re+h*se,a[4]=l*U+c*F+d*z+h*ue,a[8]=l*b+c*X+d*Z+h*be,a[12]=l*I+c*te+d*ee+h*Ae,a[1]=p*P+g*G+f*re+v*se,a[5]=p*U+g*F+f*z+v*ue,a[9]=p*b+g*X+f*Z+v*be,a[13]=p*I+g*te+f*ee+v*Ae,a[2]=S*P+A*G+y*re+_*se,a[6]=S*U+A*F+y*z+_*ue,a[10]=S*b+A*X+y*Z+_*be,a[14]=S*I+A*te+y*ee+_*Ae,a[3]=N*P+O*G+T*re+D*se,a[7]=N*U+O*F+T*z+D*ue,a[11]=N*b+O*X+T*Z+D*be,a[15]=N*I+O*te+T*ee+D*Ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],d=e[9],h=e[13],p=e[2],g=e[6],f=e[10],v=e[14],S=e[3],A=e[7],y=e[11],_=e[15],N=d*v-h*f,O=c*v-h*g,T=c*f-d*g,D=l*v-h*p,P=l*f-d*p,U=l*g-c*p;return t*(A*N-y*O+_*T)-n*(S*N-y*D+_*P)+r*(S*O-A*D+_*U)-a*(S*T-A*P+y*U)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],a=e[1],l=e[5],c=e[9],d=e[2],h=e[6],p=e[10];return t*(l*p-c*h)-n*(a*p-c*d)+r*(a*h-l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=e[9],f=e[10],v=e[11],S=e[12],A=e[13],y=e[14],_=e[15],N=t*c-n*l,O=t*d-r*l,T=t*h-a*l,D=n*d-r*c,P=n*h-a*c,U=r*h-a*d,b=p*A-g*S,I=p*y-f*S,G=p*_-v*S,F=g*y-f*A,X=g*_-v*A,te=f*_-v*y,re=N*te-O*X+T*F+D*G-P*I+U*b;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/re;return e[0]=(c*te-d*X+h*F)*z,e[1]=(r*X-n*te-a*F)*z,e[2]=(A*U-y*P+_*D)*z,e[3]=(f*P-g*U-v*D)*z,e[4]=(d*G-l*te-h*I)*z,e[5]=(t*te-r*G+a*I)*z,e[6]=(y*T-S*U-_*O)*z,e[7]=(p*U-f*T+v*O)*z,e[8]=(l*X-c*G+h*b)*z,e[9]=(n*G-t*X-a*b)*z,e[10]=(S*P-A*T+_*N)*z,e[11]=(g*T-p*P-v*N)*z,e[12]=(c*I-l*F-d*b)*z,e[13]=(t*F-n*I+r*b)*z,e[14]=(A*O-S*D-y*N)*z,e[15]=(p*D-g*O+f*N)*z,this}scale(e){let t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,d=e.z,h=a*l,p=a*c;return this.set(h*l+n,h*c-r*d,h*d+r*c,0,h*c+r*d,p*c+n,p*d-r*l,0,h*d-r*c,p*d+r*l,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,a=t._x,l=t._y,c=t._z,d=t._w,h=a+a,p=l+l,g=c+c,f=a*h,v=a*p,S=a*g,A=l*p,y=l*g,_=c*g,N=d*h,O=d*p,T=d*g,D=n.x,P=n.y,U=n.z;return r[0]=(1-(A+_))*D,r[1]=(v+T)*D,r[2]=(S-O)*D,r[3]=0,r[4]=(v-T)*P,r[5]=(1-(f+_))*P,r[6]=(y+N)*P,r[7]=0,r[8]=(S+O)*U,r[9]=(y-N)*U,r[10]=(1-(f+A))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let l=Zi.set(r[0],r[1],r[2]).length(),c=Zi.set(r[4],r[5],r[6]).length(),d=Zi.set(r[8],r[9],r[10]).length();a<0&&(l=-l),Rn.copy(this);let h=1/l,p=1/c,g=1/d;return Rn.elements[0]*=h,Rn.elements[1]*=h,Rn.elements[2]*=h,Rn.elements[4]*=p,Rn.elements[5]*=p,Rn.elements[6]*=p,Rn.elements[8]*=g,Rn.elements[9]*=g,Rn.elements[10]*=g,t.setFromRotationMatrix(Rn),n.x=l,n.y=c,n.z=d,this}makePerspective(e,t,n,r,a,l,c=Dn,d=!1){let h=this.elements,p=2*a/(t-e),g=2*a/(n-r),f=(t+e)/(t-e),v=(n+r)/(n-r),S,A;if(d)S=a/(l-a),A=l*a/(l-a);else if(c===Dn)S=-(l+a)/(l-a),A=-2*l*a/(l-a);else if(c===or)S=-l/(l-a),A=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=Dn,d=!1){let h=this.elements,p=2/(t-e),g=2/(n-r),f=-(t+e)/(t-e),v=-(n+r)/(n-r),S,A;if(d)S=1/(l-a),A=l/(l-a);else if(c===Dn)S=-2/(l-a),A=-(l+a)/(l-a);else if(c===or)S=-1/(l-a),A=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=g,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=S,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ea.prototype.isMatrix4=!0;var Pt=Ea,Zi=new Y,Rn=new Pt,Ef=new Y(0,0,0),wf=new Y(1,1,1),hi=new Y,Ts=new Y,un=new Y,Uc=new Pt,Fc=new fn,ri=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,a=r[0],l=r[4],c=r[8],d=r[1],h=r[5],p=r[9],g=r[2],f=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-nt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,v),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tf=0,Oc=new Y,$i=new fn,$n=new Pt,As=new Y,Rr=new Y,Af=new Y,Cf=new fn,Bc=new Y(1,0,0),kc=new Y(0,1,0),zc=new Y(0,0,1),Vc={type:"added"},Rf={type:"removed"},Ji={type:"childadded",child:null},zo={type:"childremoved",child:null},rn=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new Y,t=new ri,n=new fn,r=new Y(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Je}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Bc,e)}rotateY(e){return this.rotateOnAxis(kc,e)}rotateZ(e){return this.rotateOnAxis(zc,e)}translateOnAxis(e,t){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bc,e)}translateY(e){return this.translateOnAxis(kc,e)}translateZ(e){return this.translateOnAxis(zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Rr,As,this.up):$n.lookAt(As,Rr,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),$i.setFromRotationMatrix($n),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rf),zo.child=e,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,Af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Cf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){let g=d[h];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){let d=this.animations[c];r.animations.push(a(e.animations,d))}}if(t){let c=l(e.geometries),d=l(e.materials),h=l(e.textures),p=l(e.images),g=l(e.shapes),f=l(e.skeletons),v=l(e.animations),S=l(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),f.length>0&&(n.skeletons=f),v.length>0&&(n.animations=v),S.length>0&&(n.nodes=S)}return n.object=r,n;function l(c){let d=[];for(let h in c){let p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};rn.DEFAULT_UP=new Y(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pf={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null,c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(let A of e.hand.values()){let y=t.getJointPose(A,n),_=this._getHandJoint(h,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}let p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],f=p.position.distanceTo(g.position),v=.02,S=.005;h.inputState.pinching&&f>v+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=v-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Pf)))}return c!==null&&(c.visible=r!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Vo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=lt.workingColorSpace){if(e=Bl(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Vo(l,a,e+1/3),this.g=Vo(l,a,e),this.b=Vo(l,a,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function n(a){a!==void 0&&parseFloat(a)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let n=Nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return lt.workingToColorSpace(Kt.copy(this),e),Math.round(nt(Kt.r*255,0,255))*65536+Math.round(nt(Kt.g*255,0,255))*256+Math.round(nt(Kt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Kt.copy(this),t);let n=Kt.r,r=Kt.g,a=Kt.b,l=Math.max(n,r,a),c=Math.min(n,r,a),d,h,p=(c+l)/2;if(c===l)d=0,h=0;else{let g=l-c;switch(h=p<=.5?g/(l+c):g/(2-l-c),l){case n:d=(r-a)/g+(r<a?6:0);break;case r:d=(a-n)/g+2;break;case a:d=(n-r)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Yt){lt.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,r=Kt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Cs);let n=Nr(ui.h,Cs.h,t),r=Nr(ui.s,Cs.s,t),a=Nr(ui.l,Cs.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Qe;Qe.NAMES=Nh;var Vr=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new Y,Jn=new Y,Go=new Y,Kn=new Y,Ki=new Y,ji=new Y,Gc=new Y,Ho=new Y,Wo=new Y,Xo=new Y,qo=new Tt,Yo=new Tt,Zo=new Tt,gi=class i{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Pn.subVectors(r,t),Jn.subVectors(n,t),Go.subVectors(e,t);let l=Pn.dot(Pn),c=Pn.dot(Jn),d=Pn.dot(Go),h=Jn.dot(Jn),p=Jn.dot(Go),g=l*h-c*c;if(g===0)return a.set(0,0,0),null;let f=1/g,v=(h*d-c*p)*f,S=(l*p-c*d)*f;return a.set(1-v-S,S,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,r,a,l,c,d){return this.getBarycoord(e,t,n,r,Kn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Kn.x),d.addScaledVector(l,Kn.y),d.addScaledVector(c,Kn.z),d)}static getInterpolatedAttribute(e,t,n,r,a,l){return qo.setScalar(0),Yo.setScalar(0),Zo.setScalar(0),qo.fromBufferAttribute(e,t),Yo.fromBufferAttribute(e,n),Zo.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(qo,a.x),l.addScaledVector(Yo,a.y),l.addScaledVector(Zo,a.z),l}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),Jn.subVectors(e,t),Pn.cross(Jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Pn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,a=this.c,l,c;Ki.subVectors(r,n),ji.subVectors(a,n),Ho.subVectors(e,n);let d=Ki.dot(Ho),h=ji.dot(Ho);if(d<=0&&h<=0)return t.copy(n);Wo.subVectors(e,r);let p=Ki.dot(Wo),g=ji.dot(Wo);if(p>=0&&g<=p)return t.copy(r);let f=d*g-p*h;if(f<=0&&d>=0&&p<=0)return l=d/(d-p),t.copy(n).addScaledVector(Ki,l);Xo.subVectors(e,a);let v=Ki.dot(Xo),S=ji.dot(Xo);if(S>=0&&v<=S)return t.copy(a);let A=v*h-d*S;if(A<=0&&h>=0&&S<=0)return c=h/(h-S),t.copy(n).addScaledVector(ji,c);let y=p*S-v*g;if(y<=0&&g-p>=0&&v-S>=0)return Gc.subVectors(a,r),c=(g-p)/(g-p+(v-S)),t.copy(r).addScaledVector(Gc,c);let _=1/(y+A+f);return l=A*_,c=f*_,t.copy(n).addScaledVector(Ki,l).addScaledVector(ji,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hn=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,In):In.fromBufferAttribute(a,l),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(e.matrixWorld),this.union(Rs)}let r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Ps.subVectors(this.max,Pr),Qi.subVectors(e.a,Pr),er.subVectors(e.b,Pr),tr.subVectors(e.c,Pr),di.subVectors(er,Qi),fi.subVectors(tr,er),Pi.subVectors(Qi,tr);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Pi.z,Pi.y,di.z,0,-di.x,fi.z,0,-fi.x,Pi.z,0,-Pi.x,-di.y,di.x,0,-fi.y,fi.x,0,-Pi.y,Pi.x,0];return!$o(t,Qi,er,tr,Ps)||(t=[1,0,0,0,1,0,0,0,1],!$o(t,Qi,er,tr,Ps))?!1:(Is.crossVectors(di,fi),t=[Is.x,Is.y,Is.z],$o(t,Qi,er,tr,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},jn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],In=new Y,Rs=new Hn,Qi=new Y,er=new Y,tr=new Y,di=new Y,fi=new Y,Pi=new Y,Pr=new Y,Ps=new Y,Is=new Y,Ii=new Y;function $o(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){Ii.fromArray(i,a);let c=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),d=e.dot(Ii),h=t.dot(Ii),p=n.dot(Ii);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}var Ft=new Y,Ds=new Ye,If=0,Nt=class extends Ln{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:If++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=sr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),r=tn(r,this.array),a=tn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Gr=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Hr=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nn=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Df=new Hn,Ir=new Y,Jo=new Y,dr=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Df.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);let t=Ir.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ir,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(Jo)),this.expandByPoint(Ir.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lf=0,Mn=new Pt,Ko=new rn,nr=new Y,dn=new Hn,Dr=new Hn,Gt=new Y,sn=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nf(e)?Hr:Gr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new Je().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,a=e.length;r<a;r++){let l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new nn(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let a=t[n];dn.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){let c=t[a];Dr.setFromBufferAttribute(c),this.morphTargetsRelative?(Gt.addVectors(dn.min,Dr.min),dn.expandByPoint(Gt),Gt.addVectors(dn.max,Dr.max),dn.expandByPoint(Gt)):(dn.expandByPoint(Dr.min),dn.expandByPoint(Dr.max))}dn.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)Gt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Gt));if(t)for(let a=0,l=t.length;a<l;a++){let c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)Gt.fromBufferAttribute(c,h),d&&(nr.fromBufferAttribute(e,h),Gt.add(nr)),r=Math.max(r,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,a=t.uv,l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new Nt(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));let c=[],d=[];for(let b=0;b<n.count;b++)c[b]=new Y,d[b]=new Y;let h=new Y,p=new Y,g=new Y,f=new Ye,v=new Ye,S=new Ye,A=new Y,y=new Y;function _(b,I,G){h.fromBufferAttribute(n,b),p.fromBufferAttribute(n,I),g.fromBufferAttribute(n,G),f.fromBufferAttribute(a,b),v.fromBufferAttribute(a,I),S.fromBufferAttribute(a,G),p.sub(h),g.sub(h),v.sub(f),S.sub(f);let F=1/(v.x*S.y-S.x*v.y);isFinite(F)&&(A.copy(p).multiplyScalar(S.y).addScaledVector(g,-v.y).multiplyScalar(F),y.copy(g).multiplyScalar(v.x).addScaledVector(p,-S.x).multiplyScalar(F),c[b].add(A),c[I].add(A),c[G].add(A),d[b].add(y),d[I].add(y),d[G].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let b=0,I=N.length;b<I;++b){let G=N[b],F=G.start,X=G.count;for(let te=F,re=F+X;te<re;te+=3)_(e.getX(te+0),e.getX(te+1),e.getX(te+2))}let O=new Y,T=new Y,D=new Y,P=new Y;function U(b){D.fromBufferAttribute(r,b),P.copy(D);let I=c[b];O.copy(I),O.sub(D.multiplyScalar(D.dot(I))).normalize(),T.crossVectors(P,I);let F=T.dot(d[b])<0?-1:1;l.setXYZW(b,O.x,O.y,O.z,F)}for(let b=0,I=N.length;b<I;++b){let G=N[b],F=G.start,X=G.count;for(let te=F,re=F+X;te<re;te+=3)U(e.getX(te+0)),U(e.getX(te+1)),U(e.getX(te+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,v=n.count;f<v;f++)n.setXYZ(f,0,0,0);let r=new Y,a=new Y,l=new Y,c=new Y,d=new Y,h=new Y,p=new Y,g=new Y;if(e)for(let f=0,v=e.count;f<v;f+=3){let S=e.getX(f+0),A=e.getX(f+1),y=e.getX(f+2);r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,A),l.fromBufferAttribute(t,y),p.subVectors(l,a),g.subVectors(r,a),p.cross(g),c.fromBufferAttribute(n,S),d.fromBufferAttribute(n,A),h.fromBufferAttribute(n,y),c.add(p),d.add(p),h.add(p),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(A,d.x,d.y,d.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let f=0,v=t.count;f<v;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),l.fromBufferAttribute(t,f+2),p.subVectors(l,a),g.subVectors(r,a),p.cross(g),n.setXYZ(f+0,p.x,p.y,p.z),n.setXYZ(f+1,p.x,p.y,p.z),n.setXYZ(f+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(c,d){let h=c.array,p=c.itemSize,g=c.normalized,f=new h.constructor(d.length*p),v=0,S=0;for(let A=0,y=d.length;A<y;A++){c.isInterleavedBufferAttribute?v=d[A]*c.data.stride+c.offset:v=d[A]*p;for(let _=0;_<p;_++)f[S++]=h[v++]}return new Nt(f,p,g)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let c in r){let d=r[c],h=e(d,n);t.setAttribute(c,h)}let a=this.morphAttributes;for(let c in a){let d=[],h=a[c];for(let p=0,g=h.length;p<g;p++){let f=h[p],v=e(f,n);d.push(v)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let c=0,d=l.length;c<d;c++){let h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let d=this.parameters;for(let h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let d in n){let h=n[d];e.data.attributes[d]=h.toJSON(e.data)}let r={},a=!1;for(let d in this.morphAttributes){let h=this.morphAttributes[d],p=[];for(let g=0,f=h.length;g<f;g++){let v=h[g];p.push(v.toJSON(e.data))}p.length>0&&(r[d]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));let c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let h in r){let p=r[h];this.setAttribute(h,p.clone(t))}let a=e.morphAttributes;for(let h in a){let p=[],g=a[h];for(let f=0,v=g.length;f<v;f++)p.push(g[f].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;let l=e.groups;for(let h=0,p=l.length;h<p;h++){let g=l[h];this.addGroup(g.start,g.count,g.materialIndex)}let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Nf=0,vi=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=Fi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ys,this.blendDst=Zs,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ys&&(n.blendSrc=this.blendSrc),this.blendDst!==Zs&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}if(t){let a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Qn=new Y,jo=new Y,Ls=new Y,pi=new Y,Qo=new Y,Ns=new Y,el=new Y,fr=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){jo.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(jo);let a=e.distanceTo(t)*.5,l=-this.direction.dot(Ls),c=pi.dot(this.direction),d=-pi.dot(Ls),h=pi.lengthSq(),p=Math.abs(1-l*l),g,f,v,S;if(p>0)if(g=l*d-c,f=l*c-d,S=a*p,g>=0)if(f>=-S)if(f<=S){let A=1/p;g*=A,f*=A,v=g*(g+l*f+2*c)+f*(l*g+f+2*d)+h}else f=a,g=Math.max(0,-(l*f+c)),v=-g*g+f*(f+2*d)+h;else f=-a,g=Math.max(0,-(l*f+c)),v=-g*g+f*(f+2*d)+h;else f<=-S?(g=Math.max(0,-(-l*a+c)),f=g>0?-a:Math.min(Math.max(-a,-d),a),v=-g*g+f*(f+2*d)+h):f<=S?(g=0,f=Math.min(Math.max(-a,-d),a),v=f*(f+2*d)+h):(g=Math.max(0,-(l*a+c)),f=g>0?a:Math.min(Math.max(-a,-d),a),v=-g*g+f*(f+2*d)+h);else f=l>0?-a:a,g=Math.max(0,-(l*f+c)),v=-g*g+f*(f+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(jo).addScaledVector(Ls,f),v}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);let n=Qn.dot(this.direction),r=Qn.dot(Qn)-n*n,a=e.radius*e.radius;if(r>a)return null;let l=Math.sqrt(a-r),c=n-l,d=n+l;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,c,d,h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,r=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,r=(e.min.x-f.x)*h),p>=0?(a=(e.min.y-f.y)*p,l=(e.max.y-f.y)*p):(a=(e.max.y-f.y)*p,l=(e.min.y-f.y)*p),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),g>=0?(c=(e.min.z-f.z)*g,d=(e.max.z-f.z)*g):(c=(e.max.z-f.z)*g,d=(e.min.z-f.z)*g),n>d||c>r)||((c>n||n!==n)&&(n=c),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,r,a){Qo.subVectors(t,e),Ns.subVectors(n,e),el.crossVectors(Qo,Ns);let l=this.direction.dot(el),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;pi.subVectors(this.origin,e);let d=c*this.direction.dot(Ns.crossVectors(pi,Ns));if(d<0)return null;let h=c*this.direction.dot(Qo.cross(pi));if(h<0||d+h>l)return null;let p=-c*pi.dot(el);return p<0?null:this.at(p/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wr=class extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hc=new Pt,Di=new fr,Us=new dr,Wc=new Y,Fs=new Y,Os=new Y,Bs=new Y,tl=new Y,ks=new Y,Xc=new Y,zs=new Y,ln=class extends rn{constructor(e=new sn,t=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){let c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let c=this.morphTargetInfluences;if(a&&c){ks.set(0,0,0);for(let d=0,h=a.length;d<h;d++){let p=c[d],g=a[d];p!==0&&(tl.fromBufferAttribute(g,e),l?ks.addScaledVector(tl,p):ks.addScaledVector(tl.sub(t),p))}t.add(ks)}return t}raycast(e,t){let n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(a),Di.copy(e.ray).recast(e.near),!(Us.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Us,Wc)===null||Di.origin.distanceToSquared(Wc)>(e.far-e.near)**2))&&(Hc.copy(a).invert(),Di.copy(e.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let r,a=this.geometry,l=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,f=a.groups,v=a.drawRange;if(c!==null)if(Array.isArray(l))for(let S=0,A=f.length;S<A;S++){let y=f[S],_=l[y.materialIndex],N=Math.max(y.start,v.start),O=Math.min(c.count,Math.min(y.start+y.count,v.start+v.count));for(let T=N,D=O;T<D;T+=3){let P=c.getX(T),U=c.getX(T+1),b=c.getX(T+2);r=Vs(this,_,e,n,h,p,g,P,U,b),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let S=Math.max(0,v.start),A=Math.min(c.count,v.start+v.count);for(let y=S,_=A;y<_;y+=3){let N=c.getX(y),O=c.getX(y+1),T=c.getX(y+2);r=Vs(this,l,e,n,h,p,g,N,O,T),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(l))for(let S=0,A=f.length;S<A;S++){let y=f[S],_=l[y.materialIndex],N=Math.max(y.start,v.start),O=Math.min(d.count,Math.min(y.start+y.count,v.start+v.count));for(let T=N,D=O;T<D;T+=3){let P=T,U=T+1,b=T+2;r=Vs(this,_,e,n,h,p,g,P,U,b),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let S=Math.max(0,v.start),A=Math.min(d.count,v.start+v.count);for(let y=S,_=A;y<_;y+=3){let N=y,O=y+1,T=y+2;r=Vs(this,l,e,n,h,p,g,N,O,T),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}};function Uf(i,e,t,n,r,a,l,c){let d;if(e.side===an?d=n.intersectTriangle(l,a,r,!0,c):d=n.intersectTriangle(r,a,l,e.side===ii,c),d===null)return null;zs.copy(c),zs.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(zs);return h<t.near||h>t.far?null:{distance:h,point:zs.clone(),object:i}}function Vs(i,e,t,n,r,a,l,c,d,h){i.getVertexPosition(c,Fs),i.getVertexPosition(d,Os),i.getVertexPosition(h,Bs);let p=Uf(i,e,t,n,Fs,Os,Bs,Xc);if(p){let g=new Y;gi.getBarycoord(Xc,Fs,Os,Bs,g),r&&(p.uv=gi.getInterpolatedAttribute(r,c,d,h,g,new Ye)),a&&(p.uv1=gi.getInterpolatedAttribute(a,c,d,h,g,new Ye)),l&&(p.normal=gi.getInterpolatedAttribute(l,c,d,h,g,new Y),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));let f={a:c,b:d,c:h,normal:new Y,materialIndex:0};gi.getNormal(Fs,Os,Bs,f.normal),p.face=f,p.barycoord=g}return p}var la=class extends on{constructor(e=null,t=1,n=1,r,a,l,c,d,h=Ht,p=Ht,g,f){super(null,l,c,d,h,p,r,a,g,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nl=new Y,Ff=new Y,Of=new Je,Sn=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=nl.subVectors(n,t).cross(Ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(nl),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let l=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Of.getNormalMatrix(e),r=this.coplanarPoint(nl).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Li=new dr,Bf=new Ye(.5,.5),Gs=new Y,pr=class{constructor(e=new Sn,t=new Sn,n=new Sn,r=new Sn,a=new Sn,l=new Sn){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){let c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(l),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn,n=!1){let r=this.planes,a=e.elements,l=a[0],c=a[1],d=a[2],h=a[3],p=a[4],g=a[5],f=a[6],v=a[7],S=a[8],A=a[9],y=a[10],_=a[11],N=a[12],O=a[13],T=a[14],D=a[15];if(r[0].setComponents(h-l,v-p,_-S,D-N).normalize(),r[1].setComponents(h+l,v+p,_+S,D+N).normalize(),r[2].setComponents(h+c,v+g,_+A,D+O).normalize(),r[3].setComponents(h-c,v-g,_-A,D-O).normalize(),n)r[4].setComponents(d,f,y,T).normalize(),r[5].setComponents(h-d,v-f,_-y,D-T).normalize();else if(r[4].setComponents(h-d,v-f,_-y,D-T).normalize(),t===Dn)r[5].setComponents(h+d,v+f,_+y,D+T).normalize();else if(t===or)r[5].setComponents(d,f,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);let t=Bf.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Gs.x=r.normal.x>0?e.max.x:e.min.x,Gs.y=r.normal.y>0?e.max.y:e.min.y,Gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xr=class extends on{constructor(e=[],t=Ei,n,r,a,l,c,d,h,p){super(e,t,n,r,a,l,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var si=class extends on{constructor(e,t,n=Un,r,a,l,c=Ht,d=Ht,h,p=Gn,g=1){if(p!==Gn&&p!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:g};super(f,r,a,l,c,d,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ca=class extends si{constructor(e,t=Un,n=Ei,r,a,l=Ht,c=Ht,d,h=Gn){let p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,n,r,a,l,c,d,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},qr=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},mr=class i extends sn{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};let c=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);let d=[],h=[],p=[],g=[],f=0,v=0;S("z","y","x",-1,-1,n,t,e,l,a,0),S("z","y","x",1,-1,n,t,-e,l,a,1),S("x","z","y",1,1,e,n,t,r,l,2),S("x","z","y",1,-1,e,n,-t,r,l,3),S("x","y","z",1,-1,e,t,n,r,a,4),S("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new nn(h,3)),this.setAttribute("normal",new nn(p,3)),this.setAttribute("uv",new nn(g,2));function S(A,y,_,N,O,T,D,P,U,b,I){let G=T/U,F=D/b,X=T/2,te=D/2,re=P/2,z=U+1,Z=b+1,ee=0,se=0,ue=new Y;for(let be=0;be<Z;be++){let Ae=be*F-te;for(let De=0;De<z;De++){let ct=De*G-X;ue[A]=ct*N,ue[y]=Ae*O,ue[_]=re,h.push(ue.x,ue.y,ue.z),ue[A]=0,ue[y]=0,ue[_]=P>0?1:-1,p.push(ue.x,ue.y,ue.z),g.push(De/U),g.push(1-be/b),ee+=1}}for(let be=0;be<b;be++)for(let Ae=0;Ae<U;Ae++){let De=f+Ae+z*be,ct=f+Ae+z*(be+1),Et=f+(Ae+1)+z*(be+1),ht=f+(Ae+1)+z*be;d.push(De,ct,ht),d.push(ct,Et,ht),se+=6}c.addGroup(v,se,I),v+=se,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Yr=class i extends sn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let a=e/2,l=t/2,c=Math.floor(n),d=Math.floor(r),h=c+1,p=d+1,g=e/c,f=t/d,v=[],S=[],A=[],y=[];for(let _=0;_<p;_++){let N=_*f-l;for(let O=0;O<h;O++){let T=O*g-a;S.push(T,-N,0),A.push(0,0,1),y.push(O/c),y.push(1-_/d)}}for(let _=0;_<d;_++)for(let N=0;N<c;N++){let O=N+h*_,T=N+h*(_+1),D=N+1+h*(_+1),P=N+1+h*_;v.push(O,T,P),v.push(T,D,P)}this.setIndex(v),this.setAttribute("position",new nn(S,3)),this.setAttribute("normal",new nn(A,3)),this.setAttribute("uv",new nn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function zi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(qc(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(qc(r[0])){let a=[];for(let l=0,c=r.length;l<c;l++)a[l]=r[l].clone();e[t][n]=a}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Qt(i){let e={};for(let t=0;t<i.length;t++){let n=zi(i[t]);for(let r in n)e[r]=n[r]}return e}function qc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function kf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Uh={clone:zi,merge:Qt},zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zf,this.fragmentShader=Vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Qe().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ye().fromArray(r.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Pt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ha=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Zr=class extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ua=class extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},da=class extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var xi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],a=t[n-1];n:{e:{let l;t:{i:if(!(e<r)){for(let c=n+2;;){if(r===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(a=r,r=t[++n],e<r)break e}l=t.length;break t}if(!(e>=a)){let c=t[1];e<c&&(n=2,a=c);for(let d=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===d)break;if(r=a,a=t[--n-1],e>=a)break e}l=n,n=0;break t}break n}for(;n<l;){let c=n+l>>>1;e<t[c]?l=c:n=c+1}if(r=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r;for(let l=0;l!==r;++l)t[l]=n[a+l];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fa=class extends xi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sl,endingEnd:sl}}intervalChanged_(e,t,n){let r=this.parameterPositions,a=e-2,l=e+1,c=r[a],d=r[l];if(c===void 0)switch(this.getSettings_().endingStart){case al:a=e,c=2*t-n;break;case ol:a=r.length-2,c=t+r[a]-r[a+1];break;default:a=e,c=n}if(d===void 0)switch(this.getSettings_().endingEnd){case al:l=e,d=2*n-t;break;case ol:l=1,d=n+r[1]-r[0];break;default:l=e-1,d=t}let h=(n-t)*.5,p=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(d-n),this._offsetPrev=a*p,this._offsetNext=l*p}interpolate_(e,t,n,r){let a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,p=this._offsetPrev,g=this._offsetNext,f=this._weightPrev,v=this._weightNext,S=(n-t)/(r-t),A=S*S,y=A*S,_=-f*y+2*f*A-f*S,N=(1+f)*y+(-1.5-2*f)*A+(-.5+f)*S+1,O=(-1-v)*y+(1.5+v)*A+.5*S,T=v*y-v*A;for(let D=0;D!==c;++D)a[D]=_*l[p+D]+N*l[h+D]+O*l[d+D]+T*l[g+D];return a}},pa=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,p=(n-t)/(r-t),g=1-p;for(let f=0;f!==c;++f)a[f]=l[h+f]*g+l[d+f]*p;return a}},ma=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ga=class extends xi{interpolate_(e,t,n,r){let a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,p=this.inTangents,g=this.outTangents;if(!p||!g){let S=(n-t)/(r-t),A=1-S;for(let y=0;y!==c;++y)a[y]=l[h+y]*A+l[d+y]*S;return a}let f=c*2,v=e-1;for(let S=0;S!==c;++S){let A=l[h+S],y=l[d+S],_=v*f+S*2,N=g[_],O=g[_+1],T=e*f+S*2,D=p[T],P=p[T+1],U=(n-t)/(r-t),b,I,G,F,X;for(let te=0;te<8;te++){b=U*U,I=b*U,G=1-U,F=G*G,X=F*G;let z=X*t+3*F*U*N+3*G*b*D+I*r-n;if(Math.abs(z)<1e-10)break;let Z=3*F*(N-t)+6*G*U*(D-N)+3*b*(r-D);if(Math.abs(Z)<1e-10)break;U=U-z/Z,U=Math.max(0,Math.min(1,U))}a[S]=X*A+3*F*U*O+3*G*b*P+I*y}return a}},gn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hs(t,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hs(e.times,Array),values:Hs(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ga(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ur:t=this.InterpolantFactoryMethodDiscrete;break;case ra:t=this.InterpolantFactoryMethodLinear;break;case qs:t=this.InterpolantFactoryMethodSmooth;break;case rl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return qs;case this.InterpolantFactoryMethodBezier:return rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,a=0,l=r-1;for(;a!==r&&n[a]<e;)++a;for(;l!==-1&&n[l]>t;)--l;if(++l,a!==0||l!==r){a>=l&&(l=Math.max(l,1),a=l-1);let c=this.getValueSize();this.times=n.slice(a,l),this.values=this.values.slice(a*c,l*c)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,a=n.length;a===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==a;c++){let d=n[c];if(typeof d=="number"&&isNaN(d)){Xe("KeyframeTrack: Time is not a valid number.",this,c,d),e=!1;break}if(l!==null&&l>d){Xe("KeyframeTrack: Out of order keys.",this,c,d,l),e=!1;break}l=d}if(r!==void 0&&rf(r))for(let c=0,d=r.length;c!==d;++c){let h=r[c];if(isNaN(h)){Xe("KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===qs,a=e.length-1,l=1;for(let c=1;c<a;++c){let d=!1,h=e[c],p=e[c+1];if(h!==p&&(c!==1||h!==e[0]))if(r)d=!0;else{let g=c*n,f=g-n,v=g+n;for(let S=0;S!==n;++S){let A=t[g+S];if(A!==t[f+S]||A!==t[v+S]){d=!0;break}}}if(d){if(c!==l){e[l]=e[c];let g=c*n,f=l*n;for(let v=0;v!==n;++v)t[f+v]=t[g+v]}++l}}if(a>0){e[l]=e[a];for(let c=a*n,d=l*n,h=0;h!==n;++h)t[d+h]=t[c+h];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=ra;var yi=class extends gn{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Ur;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends gn{constructor(e,t,n,r){super(e,t,n,r)}};_a.prototype.ValueTypeName="color";var va=class extends gn{constructor(e,t,n,r){super(e,t,n,r)}};va.prototype.ValueTypeName="number";var xa=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,l=this.sampleValues,c=this.valueSize,d=(n-t)/(r-t),h=e*c;for(let p=h+c;h!==p;h+=4)fn.slerpFlat(a,0,l,h-c,l,h,d);return a}},$r=class extends gn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new xa(this.times,this.values,this.getValueSize(),e)}};$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends gn{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=Ur;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends gn{constructor(e,t,n,r){super(e,t,n,r)}};ya.prototype.ValueTypeName="vector";var hl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Yc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Yc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Yc(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ma=class{constructor(e,t,n){let r=this,a=!1,l=0,c=0,d,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(p){c++,a===!1&&r.onStart!==void 0&&r.onStart(p,l,c),a=!0},this.itemEnd=function(p){l++,r.onProgress!==void 0&&r.onProgress(p,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,g){return h.push(p,g),this},this.removeHandler=function(p){let g=h.indexOf(p);return g!==-1&&h.splice(g,2),this},this.getHandler=function(p){for(let g=0,f=h.length;g<f;g+=2){let v=h[g],S=h[g+1];if(v.global&&(v.lastIndex=0),v.test(p))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fh=new Ma,Bi=class{constructor(e){this.manager=e!==void 0?e:Fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ei={},ul=class extends Error{constructor(e,t){super(e),this.response=t}},Jr=class extends Bi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=hl.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:n,onError:r});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:r});let l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,d=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Ve("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let p=ei[e],g=h.body.getReader(),f=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=f?parseInt(f):0,S=v!==0,A=0,y=new ReadableStream({start(_){N();function N(){g.read().then(({done:O,value:T})=>{if(O)_.close();else{A+=T.byteLength;let D=new ProgressEvent("progress",{lengthComputable:S,loaded:A,total:v});for(let P=0,U=p.length;P<U;P++){let b=p[P];b.onProgress&&b.onProgress(D)}_.enqueue(T),N()}},O=>{_.error(O)})}}});return new Response(y)}else throw new ul(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return h.json();default:if(c==="")return h.text();{let g=/charset="?([^;"\s]*)"?/i.exec(c),f=g&&g[1]?g[1].toLowerCase():void 0,v=new TextDecoder(f);return h.arrayBuffer().then(S=>v.decode(S))}}}).then(h=>{hl.add(`file:${e}`,h);let p=ei[e];delete ei[e];for(let g=0,f=p.length;g<f;g++){let v=p[g];v.onLoad&&v.onLoad(h)}}).catch(h=>{let p=ei[e];if(p===void 0)throw this.manager.itemError(e),h;delete ei[e];for(let g=0,f=p.length;g<f;g++){let v=p[g];v.onError&&v.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Kr=class extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var il=new Pt,Zc=new Y,$c=new Y,dl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zc),$c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($c),t.updateMatrixWorld(),il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===or||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ws=new Y,Xs=new fn,zn=new Y,jr=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ws,Xs,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ws,Xs,zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ws,Xs,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ws,Xs,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new Y,Jc=new Ye,Kc=new Ye,jt=class extends jr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Jc,Kc),t.subVectors(Kc,Jc)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r,l=this.view;if(this.view!==null&&this.view.enabled){let d=l.fullWidth,h=l.fullHeight;a+=l.offsetX*r/d,t-=l.offsetY*n/h,r*=l.width/d,n*=l.height/h}let c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var gr=class extends jr{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=n-e,l=n+e,c=r+t,d=r-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fl=class extends dl{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qr=class extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new fl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},es=class extends Kr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ir=-90,rr=1,Sa=class extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new jt(ir,rr,e,t);r.layers=this.layers,this.add(r);let a=new jt(ir,rr,e,t);a.layers=this.layers,this.add(a);let l=new jt(ir,rr,e,t);l.layers=this.layers,this.add(l);let c=new jt(ir,rr,e,t);c.layers=this.layers,this.add(c);let d=new jt(ir,rr,e,t);d.layers=this.layers,this.add(d);let h=new jt(ir,rr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,c,d]=t;for(let h of t)this.remove(h);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,l,c,d,h,p]=this.children,g=e.getRenderTarget(),f=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,f,v),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},ba=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Vl="\\[\\]\\.:\\/",Gf=new RegExp("["+Vl+"]","g"),Gl="[^"+Vl+"]",Hf="[^"+Vl.replace("\\.","")+"]",Wf=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Xf=/(WCOD+)?/.source.replace("WCOD",Hf),qf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),Yf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),Zf=new RegExp("^"+Wf+Xf+qf+Yf+"$"),$f=["material","materials","bones","map"],pl=class{constructor(e,t,n){let r=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=n.length;r!==a;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gf,"")}static parseTrackName(e){let t=Zf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=n.nodeName.substring(r+1);$f.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(a){for(let l=0;l<a.length;l++){let c=a[l];if(c.name===t||c.uuid===t)return c;let d=n(c.children);if(d)return d}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,a=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let l=e[r];if(l===void 0){let h=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(d=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=pl;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hv=new Float32Array(1);var _r=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Zl=class Zl{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=r,this}};Zl.prototype.isMatrix2=!0;var ml=Zl;var ts=class extends Ln{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ve("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Hl(i,e,t,n){let r=Jf(n);switch(t){case Ll:return i*e;case Ul:return i*e/r.components*r.byteLength;case Ia:return i*e/r.components*r.byteLength;case Ai:return i*e*2/r.components*r.byteLength;case Da:return i*e*2/r.components*r.byteLength;case Nl:return i*e*3/r.components*r.byteLength;case En:return i*e*4/r.components*r.byteLength;case La:return i*e*4/r.components*r.byteLength;case ss:case as:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case os:case ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ua:case Oa:return Math.max(i,16)*Math.max(e,8)/4;case Na:case Fa:return Math.max(i,8)*Math.max(e,8)/2;case Ba:case ka:case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:case cs:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ro:case so:case ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case oo:case lo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case hs:case co:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jf(i){switch(i){case cn:case Rl:return{byteLength:1,components:1};case xr:case Pl:case Xn:return{byteLength:2,components:1};case Ra:case Pa:return{byteLength:2,components:4};case Un:case Ca:case Fn:return{byteLength:4,components:1};case Il:case Dl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function su(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function jf(i){let e=new WeakMap;function t(c,d){let h=c.array,p=c.usage,g=h.byteLength,f=i.createBuffer();i.bindBuffer(d,f),i.bufferData(d,h,p),c.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=i.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,d,h){let p=d.array,g=d.updateRanges;if(i.bindBuffer(h,c),g.length===0)i.bufferSubData(h,0,p);else{g.sort((v,S)=>v.start-S.start);let f=0;for(let v=1;v<g.length;v++){let S=g[f],A=g[v];A.start<=S.start+S.count+1?S.count=Math.max(S.count,A.start+A.count-S.start):(++f,g[f]=A)}g.length=f+1;for(let v=0,S=g.length;v<S;v++){let A=g[v];i.bufferSubData(h,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let d=e.get(c);d&&(i.deleteBuffer(d.buffer),e.delete(c))}function l(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,d),h.version=c.version}}return{get:r,remove:a,update:l}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Sp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ep=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ym=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ag=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,og=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ig=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Qf,alphahash_pars_fragment:ep,alphamap_fragment:tp,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:rp,aomap_fragment:sp,aomap_pars_fragment:ap,batching_pars_vertex:op,batching_vertex:lp,begin_vertex:cp,beginnormal_vertex:hp,bsdfs:up,iridescence_fragment:dp,bumpmap_pars_fragment:fp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:_p,color_fragment:vp,color_pars_fragment:xp,color_pars_vertex:yp,color_vertex:Mp,common:Sp,cube_uv_reflection_fragment:bp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:wp,displacementmap_vertex:Tp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Cp,colorspace_fragment:Rp,colorspace_pars_fragment:Pp,envmap_fragment:Ip,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Lp,envmap_pars_vertex:Np,envmap_physical_pars_fragment:Xp,envmap_vertex:Up,fog_vertex:Fp,fog_pars_vertex:Op,fog_fragment:Bp,fog_pars_fragment:kp,gradientmap_pars_fragment:zp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:Yp,lights_phong_fragment:Zp,lights_phong_pars_fragment:$p,lights_physical_fragment:Jp,lights_physical_pars_fragment:Kp,lights_fragment_begin:jp,lights_fragment_maps:Qp,lights_fragment_end:em,lightprobes_pars_fragment:tm,logdepthbuf_fragment:nm,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:sm,map_fragment:am,map_pars_fragment:om,map_particle_fragment:lm,map_particle_pars_fragment:cm,metalnessmap_fragment:hm,metalnessmap_pars_fragment:um,morphinstance_vertex:dm,morphcolor_vertex:fm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:_m,normal_fragment_maps:vm,normal_pars_fragment:xm,normal_pars_vertex:ym,normal_vertex:Mm,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Tm,opaque_fragment:Am,packing:Cm,premultiplied_alpha_fragment:Rm,project_vertex:Pm,dithering_fragment:Im,dithering_pars_fragment:Dm,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Fm,shadowmap_vertex:Om,shadowmask_pars_fragment:Bm,skinbase_vertex:km,skinning_pars_vertex:zm,skinning_vertex:Vm,skinnormal_vertex:Gm,specularmap_fragment:Hm,specularmap_pars_fragment:Wm,tonemapping_fragment:Xm,tonemapping_pars_fragment:qm,transmission_fragment:Ym,transmission_pars_fragment:Zm,uv_pars_fragment:$m,uv_pars_vertex:Jm,uv_vertex:Km,worldpos_vertex:jm,background_vert:Qm,background_frag:eg,backgroundCube_vert:tg,backgroundCube_frag:ng,cube_vert:ig,cube_frag:rg,depth_vert:sg,depth_frag:ag,distance_vert:og,distance_frag:lg,equirect_vert:cg,equirect_frag:hg,linedashed_vert:ug,linedashed_frag:dg,meshbasic_vert:fg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:_g,meshmatcap_frag:vg,meshnormal_vert:xg,meshnormal_frag:yg,meshphong_vert:Mg,meshphong_frag:Sg,meshphysical_vert:bg,meshphysical_frag:Eg,meshtoon_vert:wg,meshtoon_frag:Tg,points_vert:Ag,points_frag:Cg,shadow_vert:Rg,shadow_frag:Pg,sprite_vert:Ig,sprite_frag:Dg},Te={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Yn={basic:{uniforms:Qt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Qt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Qt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Qt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Qt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Qt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Qt([Te.points,Te.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Qt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Qt([Te.common,Te.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Qt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Qt([Te.sprite,Te.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Qt([Te.common,Te.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Qt([Te.lights,Te.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Yn.physical={uniforms:Qt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var po={r:0,b:0,g:0},Lg=new Pt,au=new Je;au.set(-1,0,0,0,1,0,0,0,1);function Ng(i,e,t,n,r,a){let l=new Qe(0),c=r===!0?0:1,d,h,p=null,g=0,f=null;function v(N){let O=N.isScene===!0?N.background:null;if(O&&O.isTexture){let T=N.backgroundBlurriness>0;O=e.get(O,T)}return O}function S(N){let O=!1,T=v(N);T===null?y(l,c):T&&T.isColor&&(y(T,1),O=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(N,O){let T=v(O);T&&(T.isCubeTexture||T.mapping===is)?(h===void 0&&(h=new ln(new mr(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:zi(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(O.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(au),h.material.toneMapped=lt.getTransfer(T.colorSpace)!==pt,(p!==T||g!==T.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,p=T,g=T.version,f=i.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(d===void 0&&(d=new ln(new Yr(2,2),new mn({name:"BackgroundMaterial",uniforms:zi(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=T,d.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,d.material.toneMapped=lt.getTransfer(T.colorSpace)!==pt,T.matrixAutoUpdate===!0&&T.updateMatrix(),d.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||g!==T.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,p=T,g=T.version,f=i.toneMapping),d.layers.enableAll(),N.unshift(d,d.geometry,d.material,0,0,null))}function y(N,O){N.getRGB(po,zl(i)),t.buffers.color.setClear(po.r,po.g,po.b,O,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return l},setClearColor:function(N,O=1){l.set(N),c=O,y(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(N){c=N,y(l,c)},render:S,addToRenderList:A,dispose:_}}function Ug(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),a=r,l=!1;function c(F,X,te,re,z){let Z=!1,ee=g(F,re,te,X);a!==ee&&(a=ee,h(a.object)),Z=v(F,re,te,z),Z&&S(F,re,te,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(Z||l)&&(l=!1,T(F,X,te,re),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function d(){return i.createVertexArray()}function h(F){return i.bindVertexArray(F)}function p(F){return i.deleteVertexArray(F)}function g(F,X,te,re){let z=re.wireframe===!0,Z=n[X.id];Z===void 0&&(Z={},n[X.id]=Z);let ee=F.isInstancedMesh===!0?F.id:0,se=Z[ee];se===void 0&&(se={},Z[ee]=se);let ue=se[te.id];ue===void 0&&(ue={},se[te.id]=ue);let be=ue[z];return be===void 0&&(be=f(d()),ue[z]=be),be}function f(F){let X=[],te=[],re=[];for(let z=0;z<t;z++)X[z]=0,te[z]=0,re[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:te,attributeDivisors:re,object:F,attributes:{},index:null}}function v(F,X,te,re){let z=a.attributes,Z=X.attributes,ee=0,se=te.getAttributes();for(let ue in se)if(se[ue].location>=0){let Ae=z[ue],De=Z[ue];if(De===void 0&&(ue==="instanceMatrix"&&F.instanceMatrix&&(De=F.instanceMatrix),ue==="instanceColor"&&F.instanceColor&&(De=F.instanceColor)),Ae===void 0||Ae.attribute!==De||De&&Ae.data!==De.data)return!0;ee++}return a.attributesNum!==ee||a.index!==re}function S(F,X,te,re){let z={},Z=X.attributes,ee=0,se=te.getAttributes();for(let ue in se)if(se[ue].location>=0){let Ae=Z[ue];Ae===void 0&&(ue==="instanceMatrix"&&F.instanceMatrix&&(Ae=F.instanceMatrix),ue==="instanceColor"&&F.instanceColor&&(Ae=F.instanceColor));let De={};De.attribute=Ae,Ae&&Ae.data&&(De.data=Ae.data),z[ue]=De,ee++}a.attributes=z,a.attributesNum=ee,a.index=re}function A(){let F=a.newAttributes;for(let X=0,te=F.length;X<te;X++)F[X]=0}function y(F){_(F,0)}function _(F,X){let te=a.newAttributes,re=a.enabledAttributes,z=a.attributeDivisors;te[F]=1,re[F]===0&&(i.enableVertexAttribArray(F),re[F]=1),z[F]!==X&&(i.vertexAttribDivisor(F,X),z[F]=X)}function N(){let F=a.newAttributes,X=a.enabledAttributes;for(let te=0,re=X.length;te<re;te++)X[te]!==F[te]&&(i.disableVertexAttribArray(te),X[te]=0)}function O(F,X,te,re,z,Z,ee){ee===!0?i.vertexAttribIPointer(F,X,te,z,Z):i.vertexAttribPointer(F,X,te,re,z,Z)}function T(F,X,te,re){A();let z=re.attributes,Z=te.getAttributes(),ee=X.defaultAttributeValues;for(let se in Z){let ue=Z[se];if(ue.location>=0){let be=z[se];if(be===void 0&&(se==="instanceMatrix"&&F.instanceMatrix&&(be=F.instanceMatrix),se==="instanceColor"&&F.instanceColor&&(be=F.instanceColor)),be!==void 0){let Ae=be.normalized,De=be.itemSize,ct=e.get(be);if(ct===void 0)continue;let Et=ct.buffer,ht=ct.type,oe=ct.bytesPerElement,_e=ht===i.INT||ht===i.UNSIGNED_INT||be.gpuType===Ca;if(be.isInterleavedBufferAttribute){let de=be.data,qe=de.stride,He=be.offset;if(de.isInstancedInterleavedBuffer){for(let ze=0;ze<ue.locationSize;ze++)_(ue.location+ze,de.meshPerAttribute);F.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ze=0;ze<ue.locationSize;ze++)y(ue.location+ze);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let ze=0;ze<ue.locationSize;ze++)O(ue.location+ze,De/ue.locationSize,ht,Ae,qe*oe,(He+De/ue.locationSize*ze)*oe,_e)}else{if(be.isInstancedBufferAttribute){for(let de=0;de<ue.locationSize;de++)_(ue.location+de,be.meshPerAttribute);F.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let de=0;de<ue.locationSize;de++)y(ue.location+de);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let de=0;de<ue.locationSize;de++)O(ue.location+de,De/ue.locationSize,ht,Ae,De*oe,De/ue.locationSize*de*oe,_e)}}else if(ee!==void 0){let Ae=ee[se];if(Ae!==void 0)switch(Ae.length){case 2:i.vertexAttrib2fv(ue.location,Ae);break;case 3:i.vertexAttrib3fv(ue.location,Ae);break;case 4:i.vertexAttrib4fv(ue.location,Ae);break;default:i.vertexAttrib1fv(ue.location,Ae)}}}}N()}function D(){I();for(let F in n){let X=n[F];for(let te in X){let re=X[te];for(let z in re){let Z=re[z];for(let ee in Z)p(Z[ee].object),delete Z[ee];delete re[z]}}delete n[F]}}function P(F){if(n[F.id]===void 0)return;let X=n[F.id];for(let te in X){let re=X[te];for(let z in re){let Z=re[z];for(let ee in Z)p(Z[ee].object),delete Z[ee];delete re[z]}}delete n[F.id]}function U(F){for(let X in n){let te=n[X];for(let re in te){let z=te[re];if(z[F.id]===void 0)continue;let Z=z[F.id];for(let ee in Z)p(Z[ee].object),delete Z[ee];delete z[F.id]}}}function b(F){for(let X in n){let te=n[X],re=F.isInstancedMesh===!0?F.id:0,z=te[re];if(z!==void 0){for(let Z in z){let ee=z[Z];for(let se in ee)p(ee[se].object),delete ee[se];delete z[Z]}delete te[re],Object.keys(te).length===0&&delete n[X]}}}function I(){G(),l=!0,a!==r&&(a=r,h(a.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:I,resetDefaultState:G,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:y,disableUnusedAttributes:N}}function Fg(i,e,t){let n;function r(d){n=d}function a(d,h){i.drawArrays(n,d,h),t.update(h,n,1)}function l(d,h,p){p!==0&&(i.drawArraysInstanced(n,d,h,p),t.update(h,n,p))}function c(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,h,0,p);let f=0;for(let v=0;v<p;v++)f+=h[v];t.update(f,n,1)}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Og(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(U){return!(U!==En&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){let b=U===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==cn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Fn&&!b)}function d(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",p=d(h);p!==h&&(Ve("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);let g=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),O=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:f,maxTextures:v,maxVertexTextures:S,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:N,maxVaryings:O,maxFragmentUniforms:T,maxSamples:D,samples:P}}function Bg(i){let e=this,t=null,n=0,r=!1,a=!1,l=new Sn,c=new Je,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,f){let v=g.length!==0||f||n!==0||r;return r=f,n=g.length,v},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,f){t=p(g,f,0)},this.setState=function(g,f,v){let S=g.clippingPlanes,A=g.clipIntersection,y=g.clipShadows,_=i.get(g);if(!r||S===null||S.length===0||a&&!y)a?p(null):h();else{let N=a?0:n,O=N*4,T=_.clippingState||null;d.value=T,T=p(S,f,O,v);for(let D=0;D!==O;++D)T[D]=t[D];_.clippingState=T,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,f,v,S){let A=g!==null?g.length:0,y=null;if(A!==0){if(y=d.value,S!==!0||y===null){let _=v+A*4,N=f.matrixWorldInverse;c.getNormalMatrix(N),(y===null||y.length<_)&&(y=new Float32Array(_));for(let O=0,T=v;O!==A;++O,T+=4)l.copy(g[O]).applyMatrix4(N,c),l.normal.toArray(y,T),y[T+3]=l.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}var Ci=4,Oh=[.125,.215,.35,.446,.526,.582],Vi=20,kg=256,us=new gr,Bh=new Qe,$l=null,Jl=0,Kl=0,jl=!1,zg=new Y,go=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){let{size:l=256,position:c=zg}=a;$l=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);let d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,r,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($l,Jl,Kl),this._renderer.xr.enabled=jl,e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Xn,format:En,colorSpace:Fr,depthBuffer:!1},r=kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,n);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Vg(a)),this._blurMaterial=Hg(a,e,t),this._ggxMaterial=Gg(a,e,t)}return r}_compileMaterial(e){let t=new ln(new sn,e);this._renderer.compile(t,us)}_sceneToCubeUV(e,t,n,r,a){let d=new jt(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,f=g.autoClear,v=g.toneMapping;g.getClearColor(Bh),g.toneMapping=Nn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ln(new mr,new Wr({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let A=this._backgroundBox,y=A.material,_=!1,N=e.background;N?N.isColor&&(y.color.copy(N),e.background=null,_=!0):(y.color.copy(Bh),_=!0);for(let O=0;O<6;O++){let T=O%3;T===0?(d.up.set(0,h[O],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[O],a.y,a.z)):T===1?(d.up.set(0,0,h[O]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[O],a.z)):(d.up.set(0,h[O],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[O]));let D=this._cubeSize;Sr(r,T*D,O>2?D:0,D,D),g.setRenderTarget(r),_&&g.render(A,d),g.render(e,d)}g.toneMapping=v,g.autoClear=f,e.background=N}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ei||e.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());let a=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=a;let c=a.uniforms;c.envMap.value=e;let d=this._cubeSize;Sr(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(l,us)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,a=this._pingPongRenderTarget,l=this._ggxMaterial,c=this._lodMeshes[n];c.material=l;let d=l.uniforms,h=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(h*h-p*p),f=0+h*1.25,v=g*f,{_lodMax:S}=this,A=this._sizeLods[n],y=3*A*(n>S-Ci?n-S+Ci:0),_=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=v,d.mipInt.value=S-t,Sr(a,y,_,3*A,2*A),r.setRenderTarget(a),r.render(c,us),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=S-n,Sr(e,y,_,3*A,2*A),r.setRenderTarget(e),r.render(c,us)}_blur(e,t,n,r,a){let l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,c){let d=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");let p=3,g=this._lodMeshes[r];g.material=h;let f=h.uniforms,v=this._sizeLods[n]-1,S=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*Vi-1),A=a/S,y=isFinite(a)?1+Math.floor(p*A):Vi;y>Vi&&Ve(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Vi}`);let _=[],N=0;for(let U=0;U<Vi;++U){let b=U/A,I=Math.exp(-b*b/2);_.push(I),U===0?N+=I:U<y&&(N+=2*I)}for(let U=0;U<_.length;U++)_[U]=_[U]/N;f.envMap.value=e.texture,f.samples.value=y,f.weights.value=_,f.latitudinal.value=l==="latitudinal",c&&(f.poleAxis.value=c);let{_lodMax:O}=this;f.dTheta.value=S,f.mipInt.value=O-n;let T=this._sizeLods[r],D=3*T*(r>O-Ci?r-O+Ci:0),P=4*(this._cubeSize-T);Sr(t,D,P,3*T,2*T),d.setRenderTarget(t),d.render(g,us)}};function Vg(i){let e=[],t=[],n=[],r=i,a=i-Ci+1+Oh.length;for(let l=0;l<a;l++){let c=Math.pow(2,r);e.push(c);let d=1/c;l>i-Ci?d=Oh[l-i+Ci-1]:l===0&&(d=0),t.push(d);let h=1/(c-2),p=-h,g=1+h,f=[p,p,g,p,g,g,p,p,g,g,p,g],v=6,S=6,A=3,y=2,_=1,N=new Float32Array(A*S*v),O=new Float32Array(y*S*v),T=new Float32Array(_*S*v);for(let P=0;P<v;P++){let U=P%3*2/3-1,b=P>2?0:-1,I=[U,b,0,U+2/3,b,0,U+2/3,b+1,0,U,b,0,U+2/3,b+1,0,U,b+1,0];N.set(I,A*S*P),O.set(f,y*S*P);let G=[P,P,P,P,P,P];T.set(G,_*S*P)}let D=new sn;D.setAttribute("position",new Nt(N,A)),D.setAttribute("uv",new Nt(O,y)),D.setAttribute("faceIndex",new Nt(T,_)),n.push(new ln(D,null)),r>Ci&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function kh(i,e,t){let n=new pn(i,e,t);return n.texture.mapping=is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Gg(i,e,t){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Hg(i,e,t){let n=new Float32Array(Vi),r=new Y(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function zh(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Vh(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var _o=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Xr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new mr(5,5,5),a=new mn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Wn});a.uniforms.tEquirect.value=t;let l=new ln(r,a),c=t.minFilter;return t.minFilter===wi&&(t.minFilter=Zt),new Sa(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}};function Wg(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,v=!1){return f==null?null:v?l(f):a(f)}function a(f){if(f&&f.isTexture){let v=f.mapping;if(v===wa||v===Ta)if(e.has(f)){let S=e.get(f).texture;return c(S,f.mapping)}else{let S=f.image;if(S&&S.height>0){let A=new _o(S.height);return A.fromEquirectangularTexture(i,f),e.set(f,A),f.addEventListener("dispose",h),c(A.texture,f.mapping)}else return null}}return f}function l(f){if(f&&f.isTexture){let v=f.mapping,S=v===wa||v===Ta,A=v===Ei||v===ki;if(S||A){let y=t.get(f),_=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new go(i)),y=S?n.fromEquirectangular(f,y):n.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,t.set(f,y),y.texture;if(y!==void 0)return y.texture;{let N=f.image;return S&&N&&N.height>0||A&&N&&d(N)?(n===null&&(n=new go(i)),y=S?n.fromEquirectangular(f):n.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,t.set(f,y),f.addEventListener("dispose",p),y.texture):null}}}return f}function c(f,v){return v===wa?f.mapping=Ei:v===Ta&&(f.mapping=ki),f}function d(f){let v=0,S=6;for(let A=0;A<S;A++)f[A]!==void 0&&v++;return v===S}function h(f){let v=f.target;v.removeEventListener("dispose",h);let S=e.get(v);S!==void 0&&(e.delete(v),S.dispose())}function p(f){let v=f.target;v.removeEventListener("dispose",p);let S=t.get(v);S!==void 0&&(t.delete(v),S.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:g}}function Xg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Ui("WebGLRenderer: "+n+" extension not supported."),r}}}function qg(i,e,t,n){let r={},a=new WeakMap;function l(g){let f=g.target;f.index!==null&&e.remove(f.index);for(let S in f.attributes)e.remove(f.attributes[S]);f.removeEventListener("dispose",l),delete r[f.id];let v=a.get(f);v&&(e.remove(v),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(g,f){return r[f.id]===!0||(f.addEventListener("dispose",l),r[f.id]=!0,t.memory.geometries++),f}function d(g){let f=g.attributes;for(let v in f)e.update(f[v],i.ARRAY_BUFFER)}function h(g){let f=[],v=g.index,S=g.attributes.position,A=0;if(S===void 0)return;if(v!==null){let N=v.array;A=v.version;for(let O=0,T=N.length;O<T;O+=3){let D=N[O+0],P=N[O+1],U=N[O+2];f.push(D,P,P,U,U,D)}}else{let N=S.array;A=S.version;for(let O=0,T=N.length/3-1;O<T;O+=3){let D=O+0,P=O+1,U=O+2;f.push(D,P,P,U,U,D)}}let y=new(S.count>=65535?Hr:Gr)(f,1);y.version=A;let _=a.get(g);_&&e.remove(_),a.set(g,y)}function p(g){let f=a.get(g);if(f){let v=g.index;v!==null&&f.version<v.version&&h(g)}else h(g);return a.get(g)}return{get:c,update:d,getWireframeAttribute:p}}function Yg(i,e,t){let n;function r(g){n=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,f){i.drawElements(n,f,a,g*l),t.update(f,n,1)}function h(g,f,v){v!==0&&(i.drawElementsInstanced(n,f,a,g*l,v),t.update(f,n,v))}function p(g,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,g,0,v);let A=0;for(let y=0;y<v;y++)A+=f[y];t.update(A,n,1)}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function Zg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:Xe("WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function $g(i,e,t){let n=new WeakMap,r=new Tt;function a(l,c,d){let h=l.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0,f=n.get(c);if(f===void 0||f.count!==g){let I=function(){U.dispose(),n.delete(c),c.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let v=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],N=c.morphAttributes.color||[],O=0;v===!0&&(O=1),S===!0&&(O=2),A===!0&&(O=3);let T=c.attributes.position.count*O,D=1;T>e.maxTextureSize&&(D=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let P=new Float32Array(T*D*4*g),U=new kr(P,T,D,g);U.type=Fn,U.needsUpdate=!0;let b=O*4;for(let G=0;G<g;G++){let F=y[G],X=_[G],te=N[G],re=T*D*4*G;for(let z=0;z<F.count;z++){let Z=z*b;v===!0&&(r.fromBufferAttribute(F,z),P[re+Z+0]=r.x,P[re+Z+1]=r.y,P[re+Z+2]=r.z,P[re+Z+3]=0),S===!0&&(r.fromBufferAttribute(X,z),P[re+Z+4]=r.x,P[re+Z+5]=r.y,P[re+Z+6]=r.z,P[re+Z+7]=0),A===!0&&(r.fromBufferAttribute(te,z),P[re+Z+8]=r.x,P[re+Z+9]=r.y,P[re+Z+10]=r.z,P[re+Z+11]=te.itemSize===4?r.w:1)}}f={count:g,texture:U,size:new Ye(T,D)},n.set(c,f),c.addEventListener("dispose",I)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let v=0;for(let A=0;A<h.length;A++)v+=h[A];let S=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(i,"morphTargetBaseInfluence",S),d.getUniforms().setValue(i,"morphTargetInfluences",h)}d.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function Jg(i,e,t,n,r){let a=new WeakMap;function l(h){let p=r.render.frame,g=h.geometry,f=e.get(h,g);if(a.get(f)!==p&&(e.update(f),a.set(f,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){let v=h.skeleton;a.get(v)!==p&&(v.update(),a.set(v,p))}return f}function c(){a=new WeakMap}function d(h){let p=h.target;p.removeEventListener("dispose",d),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}var Kg={[Ml]:"LINEAR_TONE_MAPPING",[Sl]:"REINHARD_TONE_MAPPING",[bl]:"CINEON_TONE_MAPPING",[El]:"ACES_FILMIC_TONE_MAPPING",[Tl]:"AGX_TONE_MAPPING",[Al]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function jg(i,e,t,n,r,a){let l=new pn(e,t,{type:i,depthBuffer:r,stencilBuffer:a,samples:n?4:0,depthTexture:r?new si(e,t):void 0}),c=new pn(e,t,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),d=new sn;d.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new nn([0,2,0,0,2,0],2));let h=new ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ln(d,h),g=new gr(-1,1,1,-1,0,1),f=null,v=null,S=!1,A,y=null,_=[],N=!1;this.setSize=function(O,T){l.setSize(O,T),c.setSize(O,T);for(let D=0;D<_.length;D++){let P=_[D];P.setSize&&P.setSize(O,T)}},this.setEffects=function(O){_=O,N=_.length>0&&_[0].isRenderPass===!0;let T=l.width,D=l.height;for(let P=0;P<_.length;P++){let U=_[P];U.setSize&&U.setSize(T,D)}},this.begin=function(O,T){if(S||O.toneMapping===Nn&&_.length===0)return!1;if(y=T,T!==null){let D=T.width,P=T.height;(l.width!==D||l.height!==P)&&this.setSize(D,P)}return N===!1&&O.setRenderTarget(l),A=O.toneMapping,O.toneMapping=Nn,!0},this.hasRenderPass=function(){return N},this.end=function(O,T){O.toneMapping=A,S=!0;let D=l,P=c;for(let U=0;U<_.length;U++){let b=_[U];if(b.enabled!==!1&&(b.render(O,P,D,T),b.needsSwap!==!1)){let I=D;D=P,P=I}}if(f!==O.outputColorSpace||v!==O.toneMapping){f=O.outputColorSpace,v=O.toneMapping,h.defines={},lt.getTransfer(f)===pt&&(h.defines.SRGB_TRANSFER="");let U=Kg[v];U&&(h.defines[U]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=D.texture,O.setRenderTarget(y),O.render(p,g),y=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),d.dispose(),h.dispose()}}var ou=new on,tc=new si(1,1),lu=new kr,cu=new oa,hu=new Xr,Gh=[],Hh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),qh=new Float32Array(4);function Er(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,a=Gh[r];if(a===void 0&&(a=new Float32Array(r),Gh[r]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(a,c)}return a}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yo(i,e){let t=Hh[e];t===void 0&&(t=new Int32Array(e),Hh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function i_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;qh.set(n),i.uniformMatrix2fv(this.addr,!1,qh),kt(t,n)}}function r_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Xh.set(n),i.uniformMatrix3fv(this.addr,!1,Xh),kt(t,n)}}function s_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Wh.set(n),i.uniformMatrix4fv(this.addr,!1,Wh),kt(t,n)}}function a_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function o_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function h_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function p_(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(tc.compareFunction=t.isReversedDepthBuffer()?fo:uo,a=tc):a=ou,t.setTexture2D(e||a,r)}function m_(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||cu,r)}function g_(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||hu,r)}function __(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||lu,r)}function v_(i){switch(i){case 5126:return Qg;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return r_;case 35676:return s_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}function x_(i,e){i.uniform1fv(this.addr,e)}function y_(i,e){let t=Er(e,this.size,2);i.uniform2fv(this.addr,t)}function M_(i,e){let t=Er(e,this.size,3);i.uniform3fv(this.addr,t)}function S_(i,e){let t=Er(e,this.size,4);i.uniform4fv(this.addr,t)}function b_(i,e){let t=Er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function E_(i,e){let t=Er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function w_(i,e){let t=Er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function T_(i,e){i.uniform1iv(this.addr,e)}function A_(i,e){i.uniform2iv(this.addr,e)}function C_(i,e){i.uniform3iv(this.addr,e)}function R_(i,e){i.uniform4iv(this.addr,e)}function P_(i,e){i.uniform1uiv(this.addr,e)}function I_(i,e){i.uniform2uiv(this.addr,e)}function D_(i,e){i.uniform3uiv(this.addr,e)}function L_(i,e){i.uniform4uiv(this.addr,e)}function N_(i,e,t){let n=this.cache,r=e.length,a=yo(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));let l;this.type===i.SAMPLER_2D_SHADOW?l=tc:l=ou;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||l,a[c])}function U_(i,e,t){let n=this.cache,r=e.length,a=yo(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||cu,a[l])}function F_(i,e,t){let n=this.cache,r=e.length,a=yo(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||hu,a[l])}function O_(i,e,t){let n=this.cache,r=e.length,a=yo(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||lu,a[l])}function B_(i){switch(i){case 5126:return x_;case 35664:return y_;case 35665:return M_;case 35666:return S_;case 35674:return b_;case 35675:return E_;case 35676:return w_;case 5124:case 35670:return T_;case 35667:case 35671:return A_;case 35668:case 35672:return C_;case 35669:case 35673:return R_;case 5125:return P_;case 36294:return I_;case 36295:return D_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}var nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=v_(t.type)}},ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B_(t.type)}},rc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let a=0,l=r.length;a!==l;++a){let c=r[a];c.setValue(e,t[c.id],n)}}},Ql=/(\w+)(\])?(\[|\.)?/g;function Yh(i,e){i.seq.push(e),i.map[e.id]=e}function k_(i,e,t){let n=i.name,r=n.length;for(Ql.lastIndex=0;;){let a=Ql.exec(n),l=Ql.lastIndex,c=a[1],d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&l+2===r){Yh(t,h===void 0?new nc(c,i,e):new ic(c,i,e));break}else{let g=t.map[c];g===void 0&&(g=new rc(c),Yh(t,g)),t=g}}}var br=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){let c=e.getActiveUniform(t,l),d=e.getUniformLocation(t,c.name);k_(c,d,this)}let r=[],a=[];for(let l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(l):a.push(l);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){let a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){let c=t[a],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,a=e.length;r!==a;++r){let l=e[r];l.id in t&&n.push(l)}return n}};function Zh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var z_=37297,V_=0;function G_(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){let c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}var $h=new Je;function H_(i){lt._getMatrix($h,lt.workingColorSpace,i);let e=`mat3( ${$h.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Or:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";let l=/ERROR: 0:(\d+)/.exec(a);if(l){let c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+G_(i.getShaderSource(e),c)}else return a}function W_(i,e){let t=H_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var X_={[Ml]:"Linear",[Sl]:"Reinhard",[bl]:"Cineon",[El]:"ACESFilmic",[Tl]:"AgX",[Al]:"Neutral",[wl]:"Custom"};function q_(i,e){let t=X_[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mo=new Y;function Y_(){lt.getLuminanceCoefficients(mo);let i=mo.x.toFixed(4),e=mo.y.toFixed(4),t=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function $_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function J_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let a=i.getActiveAttrib(e,r),l=a.name,c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function fs(i){return i!==""}function Kh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var K_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(i){return i.replace(K_,Q_)}var j_=new Map;function Q_(i,e){let t=et[e];if(t===void 0){let n=j_.get(e);if(n!==void 0)t=et[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sc(t)}var e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(i){return i.replace(e0,t0)}function t0(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function eu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var n0={[ns]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function i0(i){return n0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var r0={[Ei]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE_UV"};function s0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":r0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var a0={[ki]:"ENVMAP_MODE_REFRACTION"};function o0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":a0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var l0={[yl]:"ENVMAP_BLENDING_MULTIPLY",[xh]:"ENVMAP_BLENDING_MIX",[yh]:"ENVMAP_BLENDING_ADD"};function c0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":l0[i.combine]||"ENVMAP_BLENDING_NONE"}function h0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function u0(i,e,t,n){let r=i.getContext(),a=t.defines,l=t.vertexShader,c=t.fragmentShader,d=i0(t),h=s0(t),p=o0(t),g=c0(t),f=h0(t),v=Z_(t),S=$_(a),A=r.createProgram(),y,_,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(fs).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(fs).join(`
`),_.length>0&&(_+=`
`)):(y=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),_=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?et.tonemapping_pars_fragment:"",t.toneMapping!==Nn?q_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,W_("linearToOutputTexel",t.outputColorSpace),Y_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fs).join(`
`)),l=sc(l),l=Kh(l,t),l=jh(l,t),c=sc(c),c=Kh(c,t),c=jh(c,t),l=Qh(l),c=Qh(c),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let O=N+y+l,T=N+_+c,D=Zh(r,r.VERTEX_SHADER,O),P=Zh(r,r.FRAGMENT_SHADER,T);r.attachShader(A,D),r.attachShader(A,P),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function U(F){if(i.debug.checkShaderErrors){let X=r.getProgramInfoLog(A)||"",te=r.getShaderInfoLog(D)||"",re=r.getShaderInfoLog(P)||"",z=X.trim(),Z=te.trim(),ee=re.trim(),se=!0,ue=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,D,P);else{let be=Jh(r,D,"vertex"),Ae=Jh(r,P,"fragment");Xe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+z+`
`+be+`
`+Ae)}else z!==""?Ve("WebGLProgram: Program Info Log:",z):(Z===""||ee==="")&&(ue=!1);ue&&(F.diagnostics={runnable:se,programLog:z,vertexShader:{log:Z,prefix:y},fragmentShader:{log:ee,prefix:_}})}r.deleteShader(D),r.deleteShader(P),b=new br(r,A),I=J_(r,A)}let b;this.getUniforms=function(){return b===void 0&&U(this),b};let I;this.getAttributes=function(){return I===void 0&&U(this),I};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(A,z_)),G},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V_++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=P,this}var d0=0,ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new oc(e),t.set(e,n)),n}},oc=class{constructor(e){this.id=d0++,this.code=e,this.usedTimes=0}};function f0(i){return i===Ai||i===cs||i===hs}function p0(i,e,t,n,r,a){let l=new zr,c=new ac,d=new Set,h=[],p=new Map,g=n.logarithmicDepthBuffer,f=n.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(b){return d.add(b),b===0?"uv":`uv${b}`}function A(b,I,G,F,X,te){let re=F.fog,z=X.geometry,Z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,ee=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,se=e.get(b.envMap||Z,ee),ue=se&&se.mapping===is?se.image.height:null,be=v[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&Ve("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let Ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,De=Ae!==void 0?Ae.length:0,ct=0;z.morphAttributes.position!==void 0&&(ct=1),z.morphAttributes.normal!==void 0&&(ct=2),z.morphAttributes.color!==void 0&&(ct=3);let Et,ht,oe,_e;if(be){let Ue=Yn[be];Et=Ue.vertexShader,ht=Ue.fragmentShader}else{Et=b.vertexShader,ht=b.fragmentShader;let Ue=c.getVertexShaderStage(b),wt=c.getFragmentShaderStage(b);c.update(b,Ue,wt),oe=Ue.id,_e=wt.id}let de=i.getRenderTarget(),qe=i.state.buffers.depth.getReversed(),He=X.isInstancedMesh===!0,ze=X.isBatchedMesh===!0,xt=!!b.map,it=!!b.matcap,dt=!!se,st=!!b.aoMap,tt=!!b.lightMap,It=!!b.bumpMap&&b.wireframe===!1,Dt=!!b.normalMap,At=!!b.displacementMap,Ot=!!b.emissiveMap,yt=!!b.metalnessMap,Ct=!!b.roughnessMap,H=b.anisotropy>0,Wt=b.clearcoat>0,ft=b.dispersion>0,R=b.iridescence>0,x=b.sheen>0,k=b.transmission>0,q=H&&!!b.anisotropyMap,ne=Wt&&!!b.clearcoatMap,fe=Wt&&!!b.clearcoatNormalMap,ve=Wt&&!!b.clearcoatRoughnessMap,j=R&&!!b.iridescenceMap,ae=R&&!!b.iridescenceThicknessMap,xe=x&&!!b.sheenColorMap,Ie=x&&!!b.sheenRoughnessMap,Me=!!b.specularMap,me=!!b.specularColorMap,Be=!!b.specularIntensityMap,ke=k&&!!b.transmissionMap,Ze=k&&!!b.thicknessMap,V=!!b.gradientMap,ge=!!b.alphaMap,ie=b.alphaTest>0,ye=!!b.alphaHash,Ee=!!b.extensions,le=Nn;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(le=i.toneMapping);let ce={shaderID:be,shaderType:b.type,shaderName:b.name,vertexShader:Et,fragmentShader:ht,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ze,batchingColor:ze&&X._colorsTexture!==null,instancing:He,instancingColor:He&&X.instanceColor!==null,instancingMorph:He&&X.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:xt,matcap:it,envMap:dt,envMapMode:dt&&se.mapping,envMapCubeUVHeight:ue,aoMap:st,lightMap:tt,bumpMap:It,normalMap:Dt,displacementMap:At,emissiveMap:Ot,normalMapObjectSpace:Dt&&b.normalMapType===bh,normalMapTangentSpace:Dt&&b.normalMapType===ho,packedNormalMap:Dt&&b.normalMapType===ho&&f0(b.normalMap.format),metalnessMap:yt,roughnessMap:Ct,anisotropy:H,anisotropyMap:q,clearcoat:Wt,clearcoatMap:ne,clearcoatNormalMap:fe,clearcoatRoughnessMap:ve,dispersion:ft,iridescence:R,iridescenceMap:j,iridescenceThicknessMap:ae,sheen:x,sheenColorMap:xe,sheenRoughnessMap:Ie,specularMap:Me,specularColorMap:me,specularIntensityMap:Be,transmission:k,transmissionMap:ke,thicknessMap:Ze,gradientMap:V,opaque:b.transparent===!1&&b.blending===Fi&&b.alphaToCoverage===!1,alphaMap:ge,alphaTest:ie,alphaHash:ye,combine:b.combine,mapUv:xt&&S(b.map.channel),aoMapUv:st&&S(b.aoMap.channel),lightMapUv:tt&&S(b.lightMap.channel),bumpMapUv:It&&S(b.bumpMap.channel),normalMapUv:Dt&&S(b.normalMap.channel),displacementMapUv:At&&S(b.displacementMap.channel),emissiveMapUv:Ot&&S(b.emissiveMap.channel),metalnessMapUv:yt&&S(b.metalnessMap.channel),roughnessMapUv:Ct&&S(b.roughnessMap.channel),anisotropyMapUv:q&&S(b.anisotropyMap.channel),clearcoatMapUv:ne&&S(b.clearcoatMap.channel),clearcoatNormalMapUv:fe&&S(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&S(b.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&S(b.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&S(b.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&S(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&S(b.sheenRoughnessMap.channel),specularMapUv:Me&&S(b.specularMap.channel),specularColorMapUv:me&&S(b.specularColorMap.channel),specularIntensityMapUv:Be&&S(b.specularIntensityMap.channel),transmissionMapUv:ke&&S(b.transmissionMap.channel),thicknessMapUv:Ze&&S(b.thicknessMap.channel),alphaMapUv:ge&&S(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Dt||H),vertexNormals:!!z.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!z.attributes.uv&&(xt||ge),fog:!!re,useFog:b.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||z.attributes.normal===void 0&&Dt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:qe,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:ct,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:xt&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===pt,decodeVideoTextureEmissive:Ot&&b.emissiveMap.isVideoTexture===!0&&lt.getTransfer(b.emissiveMap.colorSpace)===pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bn,flipSided:b.side===an,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ee&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&b.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ce.vertexUv1s=d.has(1),ce.vertexUv2s=d.has(2),ce.vertexUv3s=d.has(3),d.clear(),ce}function y(b){let I=[];if(b.shaderID?I.push(b.shaderID):(I.push(b.customVertexShaderID),I.push(b.customFragmentShaderID)),b.defines!==void 0)for(let G in b.defines)I.push(G),I.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(_(I,b),N(I,b),I.push(i.outputColorSpace)),I.push(b.customProgramCacheKey),I.join()}function _(b,I){b.push(I.precision),b.push(I.outputColorSpace),b.push(I.envMapMode),b.push(I.envMapCubeUVHeight),b.push(I.mapUv),b.push(I.alphaMapUv),b.push(I.lightMapUv),b.push(I.aoMapUv),b.push(I.bumpMapUv),b.push(I.normalMapUv),b.push(I.displacementMapUv),b.push(I.emissiveMapUv),b.push(I.metalnessMapUv),b.push(I.roughnessMapUv),b.push(I.anisotropyMapUv),b.push(I.clearcoatMapUv),b.push(I.clearcoatNormalMapUv),b.push(I.clearcoatRoughnessMapUv),b.push(I.iridescenceMapUv),b.push(I.iridescenceThicknessMapUv),b.push(I.sheenColorMapUv),b.push(I.sheenRoughnessMapUv),b.push(I.specularMapUv),b.push(I.specularColorMapUv),b.push(I.specularIntensityMapUv),b.push(I.transmissionMapUv),b.push(I.thicknessMapUv),b.push(I.combine),b.push(I.fogExp2),b.push(I.sizeAttenuation),b.push(I.morphTargetsCount),b.push(I.morphAttributeCount),b.push(I.numDirLights),b.push(I.numPointLights),b.push(I.numSpotLights),b.push(I.numSpotLightMaps),b.push(I.numHemiLights),b.push(I.numRectAreaLights),b.push(I.numDirLightShadows),b.push(I.numPointLightShadows),b.push(I.numSpotLightShadows),b.push(I.numSpotLightShadowsWithMaps),b.push(I.numLightProbes),b.push(I.shadowMapType),b.push(I.toneMapping),b.push(I.numClippingPlanes),b.push(I.numClipIntersection),b.push(I.depthPacking)}function N(b,I){l.disableAll(),I.instancing&&l.enable(0),I.instancingColor&&l.enable(1),I.instancingMorph&&l.enable(2),I.matcap&&l.enable(3),I.envMap&&l.enable(4),I.normalMapObjectSpace&&l.enable(5),I.normalMapTangentSpace&&l.enable(6),I.clearcoat&&l.enable(7),I.iridescence&&l.enable(8),I.alphaTest&&l.enable(9),I.vertexColors&&l.enable(10),I.vertexAlphas&&l.enable(11),I.vertexUv1s&&l.enable(12),I.vertexUv2s&&l.enable(13),I.vertexUv3s&&l.enable(14),I.vertexTangents&&l.enable(15),I.anisotropy&&l.enable(16),I.alphaHash&&l.enable(17),I.batching&&l.enable(18),I.dispersion&&l.enable(19),I.batchingColor&&l.enable(20),I.gradientMap&&l.enable(21),I.packedNormalMap&&l.enable(22),I.vertexNormals&&l.enable(23),b.push(l.mask),l.disableAll(),I.fog&&l.enable(0),I.useFog&&l.enable(1),I.flatShading&&l.enable(2),I.logarithmicDepthBuffer&&l.enable(3),I.reversedDepthBuffer&&l.enable(4),I.skinning&&l.enable(5),I.morphTargets&&l.enable(6),I.morphNormals&&l.enable(7),I.morphColors&&l.enable(8),I.premultipliedAlpha&&l.enable(9),I.shadowMapEnabled&&l.enable(10),I.doubleSided&&l.enable(11),I.flipSided&&l.enable(12),I.useDepthPacking&&l.enable(13),I.dithering&&l.enable(14),I.transmission&&l.enable(15),I.sheen&&l.enable(16),I.opaque&&l.enable(17),I.pointsUvs&&l.enable(18),I.decodeVideoTexture&&l.enable(19),I.decodeVideoTextureEmissive&&l.enable(20),I.alphaToCoverage&&l.enable(21),I.numLightProbeGrids>0&&l.enable(22),I.hasPositionAttribute&&l.enable(23),b.push(l.mask)}function O(b){let I=v[b.type],G;if(I){let F=Yn[I];G=Uh.clone(F.uniforms)}else G=b.uniforms;return G}function T(b,I){let G=p.get(I);return G!==void 0?++G.usedTimes:(G=new u0(i,I,b,r),h.push(G),p.set(I,G)),G}function D(b){if(--b.usedTimes===0){let I=h.indexOf(b);h[I]=h[h.length-1],h.pop(),p.delete(b.cacheKey),b.destroy()}}function P(b){c.remove(b)}function U(){c.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:O,acquireProgram:T,releaseProgram:D,releaseShaderCache:P,programs:h,dispose:U}}function m0(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let c=i.get(l);return c===void 0&&(c={},i.set(l,c)),c}function n(l){i.delete(l)}function r(l,c,d){i.get(l)[c]=d}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function g0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function tu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nu(){let i=[],e=0,t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(f){let v=0;return f.isInstancedMesh&&(v+=2),f.isSkinnedMesh&&(v+=1),v}function c(f,v,S,A,y,_){let N=i[e];return N===void 0?(N={id:f.id,object:f,geometry:v,material:S,materialVariant:l(f),groupOrder:A,renderOrder:f.renderOrder,z:y,group:_},i[e]=N):(N.id=f.id,N.object=f,N.geometry=v,N.material=S,N.materialVariant=l(f),N.groupOrder=A,N.renderOrder=f.renderOrder,N.z=y,N.group=_),e++,N}function d(f,v,S,A,y,_){let N=c(f,v,S,A,y,_);S.transmission>0?n.push(N):S.transparent===!0?r.push(N):t.push(N)}function h(f,v,S,A,y,_){let N=c(f,v,S,A,y,_);S.transmission>0?n.unshift(N):S.transparent===!0?r.unshift(N):t.unshift(N)}function p(f,v,S){t.length>1&&t.sort(f||g0),n.length>1&&n.sort(v||tu),r.length>1&&r.sort(v||tu),S&&(t.reverse(),n.reverse(),r.reverse())}function g(){for(let f=e,v=i.length;f<v;f++){let S=i[f];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:d,unshift:h,finish:g,sort:p}}function _0(){let i=new WeakMap;function e(n,r){let a=i.get(n),l;return a===void 0?(l=new nu,i.set(n,[l])):r>=a.length?(l=new nu,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function v0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Qe};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function x0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var y0=0;function M0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function S0(i){let e=new v0,t=x0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new Y);let r=new Y,a=new Pt,l=new Pt;function c(h){let p=0,g=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let v=0,S=0,A=0,y=0,_=0,N=0,O=0,T=0,D=0,P=0,U=0;h.sort(M0);for(let I=0,G=h.length;I<G;I++){let F=h[I],X=F.color,te=F.intensity,re=F.distance,z=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ai?z=F.shadow.map.texture:z=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)p+=X.r*te,g+=X.g*te,f+=X.b*te;else if(F.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(F.sh.coefficients[Z],te);U++}else if(F.isDirectionalLight){let Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ee=F.shadow,se=t.get(F);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,n.directionalShadow[v]=se,n.directionalShadowMap[v]=z,n.directionalShadowMatrix[v]=F.shadow.matrix,N++}n.directional[v]=Z,v++}else if(F.isSpotLight){let Z=e.get(F);Z.position.setFromMatrixPosition(F.matrixWorld),Z.color.copy(X).multiplyScalar(te),Z.distance=re,Z.coneCos=Math.cos(F.angle),Z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Z.decay=F.decay,n.spot[A]=Z;let ee=F.shadow;if(F.map&&(n.spotLightMap[D]=F.map,D++,ee.updateMatrices(F),F.castShadow&&P++),n.spotLightMatrix[A]=ee.matrix,F.castShadow){let se=t.get(F);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,n.spotShadow[A]=se,n.spotShadowMap[A]=z,T++}A++}else if(F.isRectAreaLight){let Z=e.get(F);Z.color.copy(X).multiplyScalar(te),Z.halfWidth.set(F.width*.5,0,0),Z.halfHeight.set(0,F.height*.5,0),n.rectArea[y]=Z,y++}else if(F.isPointLight){let Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),Z.distance=F.distance,Z.decay=F.decay,F.castShadow){let ee=F.shadow,se=t.get(F);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,se.shadowCameraNear=ee.camera.near,se.shadowCameraFar=ee.camera.far,n.pointShadow[S]=se,n.pointShadowMap[S]=z,n.pointShadowMatrix[S]=F.shadow.matrix,O++}n.point[S]=Z,S++}else if(F.isHemisphereLight){let Z=e.get(F);Z.skyColor.copy(F.color).multiplyScalar(te),Z.groundColor.copy(F.groundColor).multiplyScalar(te),n.hemi[_]=Z,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=f;let b=n.hash;(b.directionalLength!==v||b.pointLength!==S||b.spotLength!==A||b.rectAreaLength!==y||b.hemiLength!==_||b.numDirectionalShadows!==N||b.numPointShadows!==O||b.numSpotShadows!==T||b.numSpotMaps!==D||b.numLightProbes!==U)&&(n.directional.length=v,n.spot.length=A,n.rectArea.length=y,n.point.length=S,n.hemi.length=_,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=O,n.pointShadowMap.length=O,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=O,n.spotLightMatrix.length=T+D-P,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=U,b.directionalLength=v,b.pointLength=S,b.spotLength=A,b.rectAreaLength=y,b.hemiLength=_,b.numDirectionalShadows=N,b.numPointShadows=O,b.numSpotShadows=T,b.numSpotMaps=D,b.numLightProbes=U,n.version=y0++)}function d(h,p){let g=0,f=0,v=0,S=0,A=0,y=p.matrixWorldInverse;for(let _=0,N=h.length;_<N;_++){let O=h[_];if(O.isDirectionalLight){let T=n.directional[g];T.direction.setFromMatrixPosition(O.matrixWorld),r.setFromMatrixPosition(O.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(y),g++}else if(O.isSpotLight){let T=n.spot[v];T.position.setFromMatrixPosition(O.matrixWorld),T.position.applyMatrix4(y),T.direction.setFromMatrixPosition(O.matrixWorld),r.setFromMatrixPosition(O.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(y),v++}else if(O.isRectAreaLight){let T=n.rectArea[S];T.position.setFromMatrixPosition(O.matrixWorld),T.position.applyMatrix4(y),l.identity(),a.copy(O.matrixWorld),a.premultiply(y),l.extractRotation(a),T.halfWidth.set(O.width*.5,0,0),T.halfHeight.set(0,O.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),S++}else if(O.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(O.matrixWorld),T.position.applyMatrix4(y),f++}else if(O.isHemisphereLight){let T=n.hemi[A];T.direction.setFromMatrixPosition(O.matrixWorld),T.direction.transformDirection(y),A++}}}return{setup:c,setupView:d,state:n}}function iu(i){let e=new S0(i),t=[],n=[],r=[];function a(f){g.camera=f,t.length=0,n.length=0,r.length=0}function l(f){t.push(f)}function c(f){n.push(f)}function d(f){r.push(f)}function h(){e.setup(t)}function p(f){e.setupView(t,f)}let g={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:g,setupLights:h,setupLightsView:p,pushLight:l,pushShadow:c,pushLightProbeGrid:d}}function b0(i){let e=new WeakMap;function t(r,a=0){let l=e.get(r),c;return l===void 0?(c=new iu(i),e.set(r,[c])):a>=l.length?(c=new iu(i),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}var E0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,T0=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],A0=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],ru=new Pt,ds=new Y,ec=new Y;function C0(i,e,t){let n=new pr,r=new Ye,a=new Ye,l=new Tt,c=new ua,d=new da,h={},p=t.maxTextureSize,g={[ii]:an,[an]:ii,[bn]:bn},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:E0,fragmentShader:w0}),v=f.clone();v.defines.HORIZONTAL_PASS=1;let S=new sn;S.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new ln(S,f),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ns;let _=this.type;this.render=function(P,U,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===eh&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ns);let I=i.getRenderTarget(),G=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Wn),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let te=_!==this.type;te&&U.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(z=>z.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,z=P.length;re<z;re++){let Z=P[re],ee=Z.shadow;if(ee===void 0){Ve("WebGLShadowMap:",Z,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;r.copy(ee.mapSize);let se=ee.getFrameExtents();r.multiply(se),a.copy(ee.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/se.x),r.x=a.x*se.x,ee.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/se.y),r.y=a.y*se.y,ee.mapSize.y=a.y));let ue=i.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=ue,ee.map===null||te===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===vr){if(Z.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new pn(r.x,r.y,{format:Ai,type:Xn,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),ee.map.texture.name=Z.name+".shadowMap",ee.map.depthTexture=new si(r.x,r.y,Fn),ee.map.depthTexture.name=Z.name+".shadowMapDepth",ee.map.depthTexture.format=Gn,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Ht,ee.map.depthTexture.magFilter=Ht}else Z.isPointLight?(ee.map=new _o(r.x),ee.map.depthTexture=new ca(r.x,Un)):(ee.map=new pn(r.x,r.y),ee.map.depthTexture=new si(r.x,r.y,Un)),ee.map.depthTexture.name=Z.name+".shadowMap",ee.map.depthTexture.format=Gn,this.type===ns?(ee.map.depthTexture.compareFunction=ue?fo:uo,ee.map.depthTexture.minFilter=Zt,ee.map.depthTexture.magFilter=Zt):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Ht,ee.map.depthTexture.magFilter=Ht);ee.camera.updateProjectionMatrix()}let be=ee.map.isWebGLCubeRenderTarget?6:1;for(let Ae=0;Ae<be;Ae++){if(ee.map.isWebGLCubeRenderTarget)i.setRenderTarget(ee.map,Ae),i.clear();else{Ae===0&&(i.setRenderTarget(ee.map),i.clear());let De=ee.getViewport(Ae);l.set(a.x*De.x,a.y*De.y,a.x*De.z,a.y*De.w),X.viewport(l)}if(Z.isPointLight){let De=ee.camera,ct=ee.matrix,Et=Z.distance||De.far;Et!==De.far&&(De.far=Et,De.updateProjectionMatrix()),ds.setFromMatrixPosition(Z.matrixWorld),De.position.copy(ds),ec.copy(De.position),ec.add(T0[Ae]),De.up.copy(A0[Ae]),De.lookAt(ec),De.updateMatrixWorld(),ct.makeTranslation(-ds.x,-ds.y,-ds.z),ru.multiplyMatrices(De.projectionMatrix,De.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(ru,De.coordinateSystem,De.reversedDepth)}else ee.updateMatrices(Z);n=ee.getFrustum(),T(U,b,ee.camera,Z,this.type)}ee.isPointLightShadow!==!0&&this.type===vr&&N(ee,b),ee.needsUpdate=!1}_=this.type,y.needsUpdate=!1,i.setRenderTarget(I,G,F)};function N(P,U){let b=e.update(A);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,v.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new pn(r.x,r.y,{format:Ai,type:Xn})),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(U,null,b,f,A,null),v.uniforms.shadow_pass.value=P.mapPass.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(U,null,b,v,A,null)}function O(P,U,b,I){let G=null,F=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)G=F;else if(G=b.isPointLight===!0?d:c,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let X=G.uuid,te=U.uuid,re=h[X];re===void 0&&(re={},h[X]=re);let z=re[te];z===void 0&&(z=G.clone(),re[te]=z,U.addEventListener("dispose",D)),G=z}if(G.visible=U.visible,G.wireframe=U.wireframe,I===vr?G.side=U.shadowSide!==null?U.shadowSide:U.side:G.side=U.shadowSide!==null?U.shadowSide:g[U.side],G.alphaMap=U.alphaMap,G.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,G.map=U.map,G.clipShadows=U.clipShadows,G.clippingPlanes=U.clippingPlanes,G.clipIntersection=U.clipIntersection,G.displacementMap=U.displacementMap,G.displacementScale=U.displacementScale,G.displacementBias=U.displacementBias,G.wireframeLinewidth=U.wireframeLinewidth,G.linewidth=U.linewidth,b.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let X=i.properties.get(G);X.light=b}return G}function T(P,U,b,I,G){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&G===vr)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);let te=e.update(P),re=P.material;if(Array.isArray(re)){let z=te.groups;for(let Z=0,ee=z.length;Z<ee;Z++){let se=z[Z],ue=re[se.materialIndex];if(ue&&ue.visible){let be=O(P,ue,I,G);P.onBeforeShadow(i,P,U,b,te,be,se),i.renderBufferDirect(b,null,te,be,P,se),P.onAfterShadow(i,P,U,b,te,be,se)}}}else if(re.visible){let z=O(P,re,I,G);P.onBeforeShadow(i,P,U,b,te,z,null),i.renderBufferDirect(b,null,te,z,P,null),P.onAfterShadow(i,P,U,b,te,z,null)}}let X=P.children;for(let te=0,re=X.length;te<re;te++)T(X[te],U,b,I,G)}function D(P){P.target.removeEventListener("dispose",D);for(let b in h){let I=h[b],G=P.target.uuid;G in I&&(I[G].dispose(),delete I[G])}}}function R0(i,e){function t(){let V=!1,ge=new Tt,ie=null,ye=new Tt(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!V&&(i.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){V=Ee},setClear:function(Ee,le,ce,Ue,wt){wt===!0&&(Ee*=Ue,le*=Ue,ce*=Ue),ge.set(Ee,le,ce,Ue),ye.equals(ge)===!1&&(i.clearColor(Ee,le,ce,Ue),ye.copy(ge))},reset:function(){V=!1,ie=null,ye.set(-1,0,0,0)}}}function n(){let V=!1,ge=!1,ie=null,ye=null,Ee=null;return{setReversed:function(le){if(ge!==le){let ce=e.get("EXT_clip_control");le?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),ge=le;let Ue=Ee;Ee=null,this.setClear(Ue)}},getReversed:function(){return ge},setTest:function(le){le?de(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function(le){ie!==le&&!V&&(i.depthMask(le),ie=le)},setFunc:function(le){if(ge&&(le=Lh[le]),ye!==le){switch(le){case $s:i.depthFunc(i.NEVER);break;case Js:i.depthFunc(i.ALWAYS);break;case Ks:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case js:i.depthFunc(i.EQUAL);break;case Qs:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=le}},setLocked:function(le){V=le},setClear:function(le){Ee!==le&&(Ee=le,ge&&(le=1-le),i.clearDepth(le))},reset:function(){V=!1,ie=null,ye=null,Ee=null,ge=!1}}}function r(){let V=!1,ge=null,ie=null,ye=null,Ee=null,le=null,ce=null,Ue=null,wt=null;return{setTest:function(_t){V||(_t?de(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(_t){ge!==_t&&!V&&(i.stencilMask(_t),ge=_t)},setFunc:function(_t,_n,vn){(ie!==_t||ye!==_n||Ee!==vn)&&(i.stencilFunc(_t,_n,vn),ie=_t,ye=_n,Ee=vn)},setOp:function(_t,_n,vn){(le!==_t||ce!==_n||Ue!==vn)&&(i.stencilOp(_t,_n,vn),le=_t,ce=_n,Ue=vn)},setLocked:function(_t){V=_t},setClear:function(_t){wt!==_t&&(i.clearStencil(_t),wt=_t)},reset:function(){V=!1,ge=null,ie=null,ye=null,Ee=null,le=null,ce=null,Ue=null,wt=null}}}let a=new t,l=new n,c=new r,d=new WeakMap,h=new WeakMap,p={},g={},f={},v=new WeakMap,S=[],A=null,y=!1,_=null,N=null,O=null,T=null,D=null,P=null,U=null,b=new Qe(0,0,0),I=0,G=!1,F=null,X=null,te=null,re=null,z=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,se=0,ue=i.getParameter(i.VERSION);ue.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ue)[1]),ee=se>=1):ue.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),ee=se>=2);let be=null,Ae={},De=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),Et=new Tt().fromArray(De),ht=new Tt().fromArray(ct);function oe(V,ge,ie,ye){let Ee=new Uint8Array(4),le=i.createTexture();i.bindTexture(V,le),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ce=0;ce<ie;ce++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(ge+ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return le}let _e={};_e[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(i.DEPTH_TEST),l.setFunc(Oi),It(!1),Dt(gl),de(i.CULL_FACE),st(Wn);function de(V){p[V]!==!0&&(i.enable(V),p[V]=!0)}function qe(V){p[V]!==!1&&(i.disable(V),p[V]=!1)}function He(V,ge){return f[V]!==ge?(i.bindFramebuffer(V,ge),f[V]=ge,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ge),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function ze(V,ge){let ie=S,ye=!1;if(V){ie=v.get(ge),ie===void 0&&(ie=[],v.set(ge,ie));let Ee=V.textures;if(ie.length!==Ee.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let le=0,ce=Ee.length;le<ce;le++)ie[le]=i.COLOR_ATTACHMENT0+le;ie.length=Ee.length,ye=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,ye=!0);ye&&i.drawBuffers(ie)}function xt(V){return A!==V?(i.useProgram(V),A=V,!0):!1}let it={[_i]:i.FUNC_ADD,[nh]:i.FUNC_SUBTRACT,[ih]:i.FUNC_REVERSE_SUBTRACT};it[rh]=i.MIN,it[sh]=i.MAX;let dt={[ah]:i.ZERO,[oh]:i.ONE,[lh]:i.SRC_COLOR,[Ys]:i.SRC_ALPHA,[ph]:i.SRC_ALPHA_SATURATE,[dh]:i.DST_COLOR,[hh]:i.DST_ALPHA,[ch]:i.ONE_MINUS_SRC_COLOR,[Zs]:i.ONE_MINUS_SRC_ALPHA,[fh]:i.ONE_MINUS_DST_COLOR,[uh]:i.ONE_MINUS_DST_ALPHA,[mh]:i.CONSTANT_COLOR,[gh]:i.ONE_MINUS_CONSTANT_COLOR,[_h]:i.CONSTANT_ALPHA,[vh]:i.ONE_MINUS_CONSTANT_ALPHA};function st(V,ge,ie,ye,Ee,le,ce,Ue,wt,_t){if(V===Wn){y===!0&&(qe(i.BLEND),y=!1);return}if(y===!1&&(de(i.BLEND),y=!0),V!==th){if(V!==_||_t!==G){if((N!==_i||D!==_i)&&(i.blendEquation(i.FUNC_ADD),N=_i,D=_i),_t)switch(V){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFunc(i.ONE,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",V);break}else switch(V){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vl:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",V);break}O=null,T=null,P=null,U=null,b.set(0,0,0),I=0,_=V,G=_t}return}Ee=Ee||ge,le=le||ie,ce=ce||ye,(ge!==N||Ee!==D)&&(i.blendEquationSeparate(it[ge],it[Ee]),N=ge,D=Ee),(ie!==O||ye!==T||le!==P||ce!==U)&&(i.blendFuncSeparate(dt[ie],dt[ye],dt[le],dt[ce]),O=ie,T=ye,P=le,U=ce),(Ue.equals(b)===!1||wt!==I)&&(i.blendColor(Ue.r,Ue.g,Ue.b,wt),b.copy(Ue),I=wt),_=V,G=!1}function tt(V,ge){V.side===bn?qe(i.CULL_FACE):de(i.CULL_FACE);let ie=V.side===an;ge&&(ie=!ie),It(ie),V.blending===Fi&&V.transparent===!1?st(Wn):st(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);let ye=V.stencilWrite;c.setTest(ye),ye&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ot(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(V){F!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),F=V)}function Dt(V){V!==jc?(de(i.CULL_FACE),V!==X&&(V===gl?i.cullFace(i.BACK):V===Qc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),X=V}function At(V){V!==te&&(ee&&i.lineWidth(V),te=V)}function Ot(V,ge,ie){V?(de(i.POLYGON_OFFSET_FILL),(re!==ge||z!==ie)&&(re=ge,z=ie,l.getReversed()&&(ge=-ge),i.polygonOffset(ge,ie))):qe(i.POLYGON_OFFSET_FILL)}function yt(V){V?de(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function Ct(V){V===void 0&&(V=i.TEXTURE0+Z-1),be!==V&&(i.activeTexture(V),be=V)}function H(V,ge,ie){ie===void 0&&(be===null?ie=i.TEXTURE0+Z-1:ie=be);let ye=Ae[ie];ye===void 0&&(ye={type:void 0,texture:void 0},Ae[ie]=ye),(ye.type!==V||ye.texture!==ge)&&(be!==ie&&(i.activeTexture(ie),be=ie),i.bindTexture(V,ge||_e[V]),ye.type=V,ye.texture=ge)}function Wt(){let V=Ae[be];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ft(){try{i.compressedTexImage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function x(){try{i.texSubImage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function k(){try{i.texSubImage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function fe(){try{i.texStorage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function ve(){try{i.texStorage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function j(){try{i.texImage2D(...arguments)}catch(V){Xe("WebGLState:",V)}}function ae(){try{i.texImage3D(...arguments)}catch(V){Xe("WebGLState:",V)}}function xe(V){return g[V]!==void 0?g[V]:i.getParameter(V)}function Ie(V,ge){g[V]!==ge&&(i.pixelStorei(V,ge),g[V]=ge)}function Me(V){Et.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Et.copy(V))}function me(V){ht.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),ht.copy(V))}function Be(V,ge){let ie=h.get(ge);ie===void 0&&(ie=new WeakMap,h.set(ge,ie));let ye=ie.get(V);ye===void 0&&(ye=i.getUniformBlockIndex(ge,V.name),ie.set(V,ye))}function ke(V,ge){let ye=h.get(ge).get(V);d.get(ge)!==ye&&(i.uniformBlockBinding(ge,ye,V.__bindingPointIndex),d.set(ge,ye))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},g={},be=null,Ae={},f={},v=new WeakMap,S=[],A=null,y=!1,_=null,N=null,O=null,T=null,D=null,P=null,U=null,b=new Qe(0,0,0),I=0,G=!1,F=null,X=null,te=null,re=null,z=null,Et.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:de,disable:qe,bindFramebuffer:He,drawBuffers:ze,useProgram:xt,setBlending:st,setMaterial:tt,setFlipSided:It,setCullFace:Dt,setLineWidth:At,setPolygonOffset:Ot,setScissorTest:yt,activeTexture:Ct,bindTexture:H,unbindTexture:Wt,compressedTexImage2D:ft,compressedTexImage3D:R,texImage2D:j,texImage3D:ae,pixelStorei:Ie,getParameter:xe,updateUBOMapping:Be,uniformBlockBinding:ke,texStorage2D:fe,texStorage3D:ve,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:q,compressedTexSubImage3D:ne,scissor:Me,viewport:me,reset:Ze}}function P0(i,e,t,n,r,a,l){let c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ye,p=new WeakMap,g=new Set,f,v=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(R,x){return S?new OffscreenCanvas(R,x):Br("canvas")}function y(R,x,k){let q=1,ne=ft(R);if((ne.width>k||ne.height>k)&&(q=k/Math.max(ne.width,ne.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let fe=Math.floor(q*ne.width),ve=Math.floor(q*ne.height);f===void 0&&(f=A(fe,ve));let j=x?A(fe,ve):f;return j.width=fe,j.height=ve,j.getContext("2d").drawImage(R,0,0,fe,ve),Ve("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+fe+"x"+ve+")."),j}else return"data"in R&&Ve("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function _(R){return R.generateMipmaps}function N(R){i.generateMipmap(R)}function O(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,x,k,q,ne,fe=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ve;q&&(ve=e.get("EXT_texture_norm16"),ve||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===i.RED&&(k===i.FLOAT&&(j=i.R32F),k===i.HALF_FLOAT&&(j=i.R16F),k===i.UNSIGNED_BYTE&&(j=i.R8),k===i.UNSIGNED_SHORT&&ve&&(j=ve.R16_EXT),k===i.SHORT&&ve&&(j=ve.R16_SNORM_EXT)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.R8UI),k===i.UNSIGNED_SHORT&&(j=i.R16UI),k===i.UNSIGNED_INT&&(j=i.R32UI),k===i.BYTE&&(j=i.R8I),k===i.SHORT&&(j=i.R16I),k===i.INT&&(j=i.R32I)),x===i.RG&&(k===i.FLOAT&&(j=i.RG32F),k===i.HALF_FLOAT&&(j=i.RG16F),k===i.UNSIGNED_BYTE&&(j=i.RG8),k===i.UNSIGNED_SHORT&&ve&&(j=ve.RG16_EXT),k===i.SHORT&&ve&&(j=ve.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RG8UI),k===i.UNSIGNED_SHORT&&(j=i.RG16UI),k===i.UNSIGNED_INT&&(j=i.RG32UI),k===i.BYTE&&(j=i.RG8I),k===i.SHORT&&(j=i.RG16I),k===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGB8UI),k===i.UNSIGNED_SHORT&&(j=i.RGB16UI),k===i.UNSIGNED_INT&&(j=i.RGB32UI),k===i.BYTE&&(j=i.RGB8I),k===i.SHORT&&(j=i.RGB16I),k===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),k===i.UNSIGNED_INT&&(j=i.RGBA32UI),k===i.BYTE&&(j=i.RGBA8I),k===i.SHORT&&(j=i.RGBA16I),k===i.INT&&(j=i.RGBA32I)),x===i.RGB&&(k===i.UNSIGNED_SHORT&&ve&&(j=ve.RGB16_EXT),k===i.SHORT&&ve&&(j=ve.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),x===i.RGBA){let ae=fe?Or:lt.getTransfer(ne);k===i.FLOAT&&(j=i.RGBA32F),k===i.HALF_FLOAT&&(j=i.RGBA16F),k===i.UNSIGNED_BYTE&&(j=ae===pt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ve&&(j=ve.RGBA16_EXT),k===i.SHORT&&ve&&(j=ve.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function D(R,x){let k;return R?x===null||x===Un||x===yr?k=i.DEPTH24_STENCIL8:x===Fn?k=i.DEPTH32F_STENCIL8:x===xr&&(k=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Un||x===yr?k=i.DEPTH_COMPONENT24:x===Fn?k=i.DEPTH_COMPONENT32F:x===xr&&(k=i.DEPTH_COMPONENT16),k}function P(R,x){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ht&&R.minFilter!==Zt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function U(R){let x=R.target;x.removeEventListener("dispose",U),I(x),x.isVideoTexture&&p.delete(x),x.isHTMLTexture&&g.delete(x)}function b(R){let x=R.target;x.removeEventListener("dispose",b),F(x)}function I(R){let x=n.get(R);if(x.__webglInit===void 0)return;let k=R.source,q=v.get(k);if(q){let ne=q[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&G(R),Object.keys(q).length===0&&v.delete(k)}n.remove(R)}function G(R){let x=n.get(R);i.deleteTexture(x.__webglTexture);let k=R.source,q=v.get(k);delete q[x.__cacheKey],l.memory.textures--}function F(R){let x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let ne=0;ne<x.__webglFramebuffer[q].length;ne++)i.deleteFramebuffer(x.__webglFramebuffer[q][ne]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let k=R.textures;for(let q=0,ne=k.length;q<ne;q++){let fe=n.get(k[q]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),l.memory.textures--),n.remove(k[q])}n.remove(R)}let X=0;function te(){X=0}function re(){return X}function z(R){X=R}function Z(){let R=X;return R>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),X+=1,R}function ee(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function se(R,x){let k=n.get(R);if(R.isVideoTexture&&H(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let q=R.image;if(q===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{qe(k,R,x);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function ue(R,x){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){qe(k,R,x);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function be(R,x){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){qe(k,R,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function Ae(R,x){let k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){He(k,R,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}let De={[na]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},ct={[Ht]:i.NEAREST,[Mh]:i.NEAREST_MIPMAP_NEAREST,[rs]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},Et={[Eh]:i.NEVER,[Rh]:i.ALWAYS,[wh]:i.LESS,[uo]:i.LEQUAL,[Th]:i.EQUAL,[fo]:i.GEQUAL,[Ah]:i.GREATER,[Ch]:i.NOTEQUAL};function ht(R,x){if(x.type===Fn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Zt||x.magFilter===Aa||x.magFilter===rs||x.magFilter===wi||x.minFilter===Zt||x.minFilter===Aa||x.minFilter===rs||x.minFilter===wi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,De[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,De[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,De[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ct[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ct[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Et[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ht||x.minFilter!==rs&&x.minFilter!==wi||x.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function oe(R,x){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",U));let q=x.source,ne=v.get(q);ne===void 0&&(ne={},v.set(q,ne));let fe=ee(x);if(fe!==R.__cacheKey){ne[fe]===void 0&&(ne[fe]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,k=!0),ne[fe].usedTimes++;let ve=ne[R.__cacheKey];ve!==void 0&&(ne[R.__cacheKey].usedTimes--,ve.usedTimes===0&&G(x)),R.__cacheKey=fe,R.__webglTexture=ne[fe].texture}return k}function _e(R,x,k){return Math.floor(Math.floor(R/k)/x)}function de(R,x,k,q){let fe=R.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,k,q,x.data);else{fe.sort((Ie,Me)=>Ie.start-Me.start);let ve=0;for(let Ie=1;Ie<fe.length;Ie++){let Me=fe[ve],me=fe[Ie],Be=Me.start+Me.count,ke=_e(me.start,x.width,4),Ze=_e(Me.start,x.width,4);me.start<=Be+1&&ke===Ze&&_e(me.start+me.count-1,x.width,4)===ke?Me.count=Math.max(Me.count,me.start+me.count-Me.start):(++ve,fe[ve]=me)}fe.length=ve+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),ae=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ie=0,Me=fe.length;Ie<Me;Ie++){let me=fe[Ie],Be=Math.floor(me.start/4),ke=Math.ceil(me.count/4),Ze=Be%x.width,V=Math.floor(Be/x.width),ge=ke,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,Ze,V,ge,ie,k,q,x.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function qe(R,x,k){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);let ne=oe(R,x),fe=x.source;t.bindTexture(q,R.__webglTexture,i.TEXTURE0+k);let ve=n.get(fe);if(fe.version!==ve.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ie=lt.getPrimaries(lt.workingColorSpace),ye=x.colorSpace===ai?null:lt.getPrimaries(x.colorSpace),Ee=x.colorSpace===ai||ie===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ae=y(x.image,!1,r.maxTextureSize);ae=Wt(x,ae);let xe=a.convert(x.format,x.colorSpace),Ie=a.convert(x.type),Me=T(x.internalFormat,xe,Ie,x.normalized,x.colorSpace,x.isVideoTexture);ht(q,x);let me,Be=x.mipmaps,ke=x.isVideoTexture!==!0,Ze=ve.__version===void 0||ne===!0,V=fe.dataReady,ge=P(x,ae);if(x.isDepthTexture)Me=D(x.format===Ti,x.type),Ze&&(ke?t.texStorage2D(i.TEXTURE_2D,1,Me,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Me,ae.width,ae.height,0,xe,Ie,null));else if(x.isDataTexture)if(Be.length>0){ke&&Ze&&t.texStorage2D(i.TEXTURE_2D,ge,Me,Be[0].width,Be[0].height);for(let ie=0,ye=Be.length;ie<ye;ie++)me=Be[ie],ke?V&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,me.width,me.height,xe,Ie,me.data):t.texImage2D(i.TEXTURE_2D,ie,Me,me.width,me.height,0,xe,Ie,me.data);x.generateMipmaps=!1}else ke?(Ze&&t.texStorage2D(i.TEXTURE_2D,ge,Me,ae.width,ae.height),V&&de(x,ae,xe,Ie)):t.texImage2D(i.TEXTURE_2D,0,Me,ae.width,ae.height,0,xe,Ie,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ke&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Me,Be[0].width,Be[0].height,ae.depth);for(let ie=0,ye=Be.length;ie<ye;ie++)if(me=Be[ie],x.format!==En)if(xe!==null)if(ke){if(V)if(x.layerUpdates.size>0){let Ee=Hl(me.width,me.height,x.format,x.type);for(let le of x.layerUpdates){let ce=me.data.subarray(le*Ee/me.data.BYTES_PER_ELEMENT,(le+1)*Ee/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,le,me.width,me.height,1,xe,ce)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,me.width,me.height,ae.depth,xe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Me,me.width,me.height,ae.depth,0,me.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,me.width,me.height,ae.depth,xe,Ie,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Me,me.width,me.height,ae.depth,0,xe,Ie,me.data)}else{ke&&Ze&&t.texStorage2D(i.TEXTURE_2D,ge,Me,Be[0].width,Be[0].height);for(let ie=0,ye=Be.length;ie<ye;ie++)me=Be[ie],x.format!==En?xe!==null?ke?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,me.width,me.height,xe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Me,me.width,me.height,0,me.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?V&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,me.width,me.height,xe,Ie,me.data):t.texImage2D(i.TEXTURE_2D,ie,Me,me.width,me.height,0,xe,Ie,me.data)}else if(x.isDataArrayTexture)if(ke){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Me,ae.width,ae.height,ae.depth),V)if(x.layerUpdates.size>0){let ie=Hl(ae.width,ae.height,x.format,x.type);for(let ye of x.layerUpdates){let Ee=ae.data.subarray(ye*ie/ae.data.BYTES_PER_ELEMENT,(ye+1)*ie/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,ae.width,ae.height,1,xe,Ie,Ee)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,xe,Ie,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ae.width,ae.height,ae.depth,0,xe,Ie,ae.data);else if(x.isData3DTexture)ke?(Ze&&t.texStorage3D(i.TEXTURE_3D,ge,Me,ae.width,ae.height,ae.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,xe,Ie,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ae.width,ae.height,ae.depth,0,xe,Ie,ae.data);else if(x.isFramebufferTexture){if(Ze)if(ke)t.texStorage2D(i.TEXTURE_2D,ge,Me,ae.width,ae.height);else{let ie=ae.width,ye=ae.height;for(let Ee=0;Ee<ge;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Me,ie,ye,0,xe,Ie,null),ie>>=1,ye>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),ae.parentNode!==ie){ie.appendChild(ae),g.add(x),ie.onpaint=ye=>{let Ee=ye.changedElements;for(let le of g)Ee.includes(le.image)&&(le.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ae);else{let Ee=i.RGBA,le=i.RGBA,ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ee,le,ce,ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Be.length>0){if(ke&&Ze){let ie=ft(Be[0]);t.texStorage2D(i.TEXTURE_2D,ge,Me,ie.width,ie.height)}for(let ie=0,ye=Be.length;ie<ye;ie++)me=Be[ie],ke?V&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,xe,Ie,me):t.texImage2D(i.TEXTURE_2D,ie,Me,xe,Ie,me);x.generateMipmaps=!1}else if(ke){if(Ze){let ie=ft(ae);t.texStorage2D(i.TEXTURE_2D,ge,Me,ie.width,ie.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ie,ae)}else t.texImage2D(i.TEXTURE_2D,0,Me,xe,Ie,ae);_(x)&&N(q),ve.__version=fe.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function He(R,x,k){if(x.image.length!==6)return;let q=oe(R,x),ne=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let fe=n.get(ne);if(ne.version!==fe.__version||q===!0){t.activeTexture(i.TEXTURE0+k);let ve=lt.getPrimaries(lt.workingColorSpace),j=x.colorSpace===ai?null:lt.getPrimaries(x.colorSpace),ae=x.colorSpace===ai||ve===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let xe=x.isCompressedTexture||x.image[0].isCompressedTexture,Ie=x.image[0]&&x.image[0].isDataTexture,Me=[];for(let le=0;le<6;le++)!xe&&!Ie?Me[le]=y(x.image[le],!0,r.maxCubemapSize):Me[le]=Ie?x.image[le].image:x.image[le],Me[le]=Wt(x,Me[le]);let me=Me[0],Be=a.convert(x.format,x.colorSpace),ke=a.convert(x.type),Ze=T(x.internalFormat,Be,ke,x.normalized,x.colorSpace),V=x.isVideoTexture!==!0,ge=fe.__version===void 0||q===!0,ie=ne.dataReady,ye=P(x,me);ht(i.TEXTURE_CUBE_MAP,x);let Ee;if(xe){V&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ze,me.width,me.height);for(let le=0;le<6;le++){Ee=Me[le].mipmaps;for(let ce=0;ce<Ee.length;ce++){let Ue=Ee[ce];x.format!==En?Be!==null?V?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ce,0,0,Ue.width,Ue.height,Be,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ce,Ze,Ue.width,Ue.height,0,Ue.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ce,0,0,Ue.width,Ue.height,Be,ke,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ce,Ze,Ue.width,Ue.height,0,Be,ke,Ue.data)}}}else{if(Ee=x.mipmaps,V&&ge){Ee.length>0&&ye++;let le=ft(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ze,le.width,le.height)}for(let le=0;le<6;le++)if(Ie){V?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Me[le].width,Me[le].height,Be,ke,Me[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ze,Me[le].width,Me[le].height,0,Be,ke,Me[le].data);for(let ce=0;ce<Ee.length;ce++){let wt=Ee[ce].image[le].image;V?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ce+1,0,0,wt.width,wt.height,Be,ke,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ce+1,Ze,wt.width,wt.height,0,Be,ke,wt.data)}}else{V?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Be,ke,Me[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ze,Be,ke,Me[le]);for(let ce=0;ce<Ee.length;ce++){let Ue=Ee[ce];V?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ce+1,0,0,Be,ke,Ue.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ce+1,Ze,Be,ke,Ue.image[le])}}}_(x)&&N(i.TEXTURE_CUBE_MAP),fe.__version=ne.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ze(R,x,k,q,ne,fe){let ve=a.convert(k.format,k.colorSpace),j=a.convert(k.type),ae=T(k.internalFormat,ve,j,k.normalized,k.colorSpace),xe=n.get(x),Ie=n.get(k);if(Ie.__renderTarget=x,!xe.__hasExternalTextures){let Me=Math.max(1,x.width>>fe),me=Math.max(1,x.height>>fe);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,fe,ae,Me,me,x.depth,0,ve,j,null):t.texImage2D(ne,fe,ae,Me,me,0,ve,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ct(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,ne,Ie.__webglTexture,0,yt(x)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,ne,Ie.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(R,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){let q=x.depthTexture,ne=q&&q.isDepthTexture?q.type:null,fe=D(x.stencilBuffer,ne),ve=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ct(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(x),fe,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(x),fe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,fe,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,R)}else{let q=x.textures;for(let ne=0;ne<q.length;ne++){let fe=q[ne],ve=a.convert(fe.format,fe.colorSpace),j=a.convert(fe.type),ae=T(fe.internalFormat,ve,j,fe.normalized,fe.colorSpace);Ct(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(x),ae,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(x),ae,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ae,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(R,x,k){let q=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(x.depthTexture);if(ne.__renderTarget=x,(!ne.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,x.depthTexture.addEventListener("dispose",U)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),ht(i.TEXTURE_CUBE_MAP,x.depthTexture);let xe=a.convert(x.depthTexture.format),Ie=a.convert(x.depthTexture.type),Me;x.depthTexture.format===Gn?Me=i.DEPTH_COMPONENT24:x.depthTexture.format===Ti&&(Me=i.DEPTH24_STENCIL8);for(let me=0;me<6;me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Me,x.width,x.height,0,xe,Ie,null)}}else se(x.depthTexture,0);let fe=ne.__webglTexture,ve=yt(x),j=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ae=x.depthTexture.format===Ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Gn)Ct(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,j,fe,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,ae,j,fe,0);else if(x.depthTexture.format===Ti)Ct(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,j,fe,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,ae,j,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(R){let x=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let q=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){let ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",ne)};q.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=q}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let q=0;q<6;q++)it(x.__webglFramebuffer[q],R,q);else{let q=R.texture.mipmaps;q&&q.length>0?it(x.__webglFramebuffer[0],R,0):it(x.__webglFramebuffer,R,0)}else if(k){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),xt(x.__webglDepthbuffer[q],R,!1);else{let ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,fe)}}else{let q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),xt(x.__webglDepthbuffer,R,!1);else{let ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(R,x,k){let q=n.get(R);x!==void 0&&ze(q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&dt(R)}function tt(R){let x=R.texture,k=n.get(R),q=n.get(x);R.addEventListener("dispose",b);let ne=R.textures,fe=R.isWebGLCubeRenderTarget===!0,ve=ne.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,l.memory.textures++),fe){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let ae=0;ae<x.mipmaps.length;ae++)k.__webglFramebuffer[j][ae]=i.createFramebuffer()}else k.__webglFramebuffer[j]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)k.__webglFramebuffer[j]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ve)for(let j=0,ae=ne.length;j<ae;j++){let xe=n.get(ne[j]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),l.memory.textures++)}if(R.samples>0&&Ct(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<ne.length;j++){let ae=ne[j];k.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[j]);let xe=a.convert(ae.format,ae.colorSpace),Ie=a.convert(ae.type),Me=T(ae.internalFormat,xe,Ie,ae.normalized,ae.colorSpace,R.isXRRenderTarget===!0),me=yt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,Me,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,k.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ht(i.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)ze(k.__webglFramebuffer[j][ae],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae);else ze(k.__webglFramebuffer[j],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);_(x)&&N(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let j=0,ae=ne.length;j<ae;j++){let xe=ne[j],Ie=n.get(xe),Me=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Me=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,Ie.__webglTexture),ht(Me,xe),ze(k.__webglFramebuffer,R,xe,i.COLOR_ATTACHMENT0+j,Me,0),_(xe)&&N(Me)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,q.__webglTexture),ht(j,x),x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)ze(k.__webglFramebuffer[ae],R,x,i.COLOR_ATTACHMENT0,j,ae);else ze(k.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,j,0);_(x)&&N(j),t.unbindTexture()}R.depthBuffer&&dt(R)}function It(R){let x=R.textures;for(let k=0,q=x.length;k<q;k++){let ne=x[k];if(_(ne)){let fe=O(R),ve=n.get(ne).__webglTexture;t.bindTexture(fe,ve),N(fe),t.unbindTexture()}}}let Dt=[],At=[];function Ot(R){if(R.samples>0){if(Ct(R)===!1){let x=R.textures,k=R.width,q=R.height,ne=i.COLOR_BUFFER_BIT,fe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(R),j=x.length>1;if(j)for(let xe=0;xe<x.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let ae=R.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let xe=0;xe<x.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);let Ie=n.get(x[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,k,q,0,0,k,q,ne,i.NEAREST),d===!0&&(Dt.length=0,At.length=0,Dt.push(i.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Dt.push(fe),At.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,At)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let xe=0;xe<x.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);let Ie=n.get(x[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&d){let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function yt(R){return Math.min(r.maxSamples,R.samples)}function Ct(R){let x=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function H(R){let x=l.render.frame;p.get(R)!==x&&(p.set(R,x),R.update())}function Wt(R,x){let k=R.colorSpace,q=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Fr&&k!==ai&&(lt.getTransfer(k)===pt?(q!==En||ne!==cn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",k)),x}function ft(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=te,this.getTextureUnits=re,this.setTextureUnits=z,this.setTexture2D=se,this.setTexture2DArray=ue,this.setTexture3D=be,this.setTextureCube=Ae,this.rebindTextures=st,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function I0(i,e){function t(n,r=ai){let a,l=lt.getTransfer(r);if(n===cn)return i.UNSIGNED_BYTE;if(n===Ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Il)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rl)return i.BYTE;if(n===Pl)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Xn)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Nl)return i.RGB;if(n===En)return i.RGBA;if(n===Gn)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===Ul)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===Ai)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===ss||n===as||n===os||n===ls)if(l===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ss)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===as)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ss)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===as)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===os)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ls)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Ua||n===Fa||n===Oa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Na)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ba||n===ka||n===za||n===Va||n===Ga||n===cs||n===Ha)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ba||n===ka)return l===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===za)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Va)return a.COMPRESSED_R11_EAC;if(n===Ga)return a.COMPRESSED_SIGNED_R11_EAC;if(n===cs)return a.COMPRESSED_RG11_EAC;if(n===Ha)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===ja||n===Qa||n===eo||n===to||n===no||n===io)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Wa)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eo)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===to)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===no)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===io)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===so||n===ao)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ro)return l===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===so)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ao)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oo||n===lo||n===hs||n===co)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===oo)return a.COMPRESSED_RED_RGTC1_EXT;if(n===lo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===co)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var D0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new qr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mn({vertexShader:D0,fragmentShader:L0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new Yr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends Ln{constructor(e,t){super();let n=this,r=null,a=1,l=null,c="local-floor",d=1,h=null,p=null,g=null,f=null,v=null,S=null,A=typeof XRWebGLBinding<"u",y=new lc,_={},N=t.getContextAttributes(),O=null,T=null,D=[],P=[],U=new Ye,b=null,I=new jt;I.viewport=new Tt;let G=new jt;G.viewport=new Tt;let F=[I,G],X=new ba,te=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let _e=D[oe];return _e===void 0&&(_e=new ur,D[oe]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(oe){let _e=D[oe];return _e===void 0&&(_e=new ur,D[oe]=_e),_e.getGripSpace()},this.getHand=function(oe){let _e=D[oe];return _e===void 0&&(_e=new ur,D[oe]=_e),_e.getHandSpace()};function z(oe){let _e=P.indexOf(oe.inputSource);if(_e===-1)return;let de=D[_e];de!==void 0&&(de.update(oe.inputSource,oe.frame,h||l),de.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Z(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",ee);for(let oe=0;oe<D.length;oe++){let _e=P[oe];_e!==null&&(P[oe]=null,D[oe].disconnect(_e))}te=null,re=null,y.reset();for(let oe in _)delete _[oe];e.setRenderTarget(O),v=null,f=null,g=null,r=null,T=null,ht.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){a=oe,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){c=oe,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(r,t)),g},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(O=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",ee),N.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(U),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,qe=null,He=null;N.depth&&(He=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=N.stencil?Ti:Gn,qe=N.stencil?yr:Un);let ze={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:a};g=this.getBinding(),f=g.createProjectionLayer(ze),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new pn(f.textureWidth,f.textureHeight,{format:En,type:cn,depthTexture:new si(f.textureWidth,f.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let de={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),T=new pn(v.framebufferWidth,v.framebufferHeight,{format:En,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(d),h=null,l=await r.requestReferenceSpace(c),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ee(oe){for(let _e=0;_e<oe.removed.length;_e++){let de=oe.removed[_e],qe=P.indexOf(de);qe>=0&&(P[qe]=null,D[qe].disconnect(de))}for(let _e=0;_e<oe.added.length;_e++){let de=oe.added[_e],qe=P.indexOf(de);if(qe===-1){for(let ze=0;ze<D.length;ze++)if(ze>=P.length){P.push(de),qe=ze;break}else if(P[ze]===null){P[ze]=de,qe=ze;break}if(qe===-1)break}let He=D[qe];He&&He.connect(de)}}let se=new Y,ue=new Y;function be(oe,_e,de){se.setFromMatrixPosition(_e.matrixWorld),ue.setFromMatrixPosition(de.matrixWorld);let qe=se.distanceTo(ue),He=_e.projectionMatrix.elements,ze=de.projectionMatrix.elements,xt=He[14]/(He[10]-1),it=He[14]/(He[10]+1),dt=(He[9]+1)/He[5],st=(He[9]-1)/He[5],tt=(He[8]-1)/He[0],It=(ze[8]+1)/ze[0],Dt=xt*tt,At=xt*It,Ot=qe/(-tt+It),yt=Ot*-tt;if(_e.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(yt),oe.translateZ(Ot),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),He[10]===-1)oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{let Ct=xt+Ot,H=it+Ot,Wt=Dt-yt,ft=At+(qe-yt),R=dt*it/H*Ct,x=st*it/H*Ct;oe.projectionMatrix.makePerspective(Wt,ft,R,x,Ct,H),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Ae(oe,_e){_e===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(_e.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let _e=oe.near,de=oe.far;y.texture!==null&&(y.depthNear>0&&(_e=y.depthNear),y.depthFar>0&&(de=y.depthFar)),X.near=G.near=I.near=_e,X.far=G.far=I.far=de,(te!==X.near||re!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),te=X.near,re=X.far),X.layers.mask=oe.layers.mask|6,I.layers.mask=X.layers.mask&-5,G.layers.mask=X.layers.mask&-3;let qe=oe.parent,He=X.cameras;Ae(X,qe);for(let ze=0;ze<He.length;ze++)Ae(He[ze],qe);He.length===2?be(X,I,G):X.projectionMatrix.copy(I.projectionMatrix),De(oe,X,qe)};function De(oe,_e,de){de===null?oe.matrix.copy(_e.matrixWorld):(oe.matrix.copy(de.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(_e.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=cr*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&v===null))return d},this.setFoveation=function(oe){d=oe,f!==null&&(f.fixedFoveation=oe),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(X)},this.getCameraTexture=function(oe){return _[oe]};let ct=null;function Et(oe,_e){if(p=_e.getViewerPose(h||l),S=_e,p!==null){let de=p.views;v!==null&&(e.setRenderTargetFramebuffer(T,v.framebuffer),e.setRenderTarget(T));let qe=!1;de.length!==X.cameras.length&&(X.cameras.length=0,qe=!0);for(let it=0;it<de.length;it++){let dt=de[it],st=null;if(v!==null)st=v.getViewport(dt);else{let It=g.getViewSubImage(f,dt);st=It.viewport,it===0&&(e.setRenderTargetTextures(T,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(T))}let tt=F[it];tt===void 0&&(tt=new jt,tt.layers.enable(it),tt.viewport=new Tt,F[it]=tt),tt.matrix.fromArray(dt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(dt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(st.x,st.y,st.width,st.height),it===0&&(X.matrix.copy(tt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),qe===!0&&X.cameras.push(tt)}let He=r.enabledFeatures;if(He&&He.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){g=n.getBinding();let it=g.getDepthInformation(de[0]);it&&it.isValid&&it.texture&&y.init(it,r.renderState)}if(He&&He.includes("camera-access")&&A){e.state.unbindTexture(),g=n.getBinding();for(let it=0;it<de.length;it++){let dt=de[it].camera;if(dt){let st=_[dt];st||(st=new qr,_[dt]=st);let tt=g.getCameraImage(dt);st.sourceTexture=tt}}}}for(let de=0;de<D.length;de++){let qe=P[de],He=D[de];qe!==null&&He!==void 0&&He.update(qe,_e,h||l)}ct&&ct(oe,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),S=null}let ht=new su;ht.setAnimationLoop(Et),this.setAnimationLoop=function(oe){ct=oe},this.dispose=function(){}}},N0=new Pt,uu=new Je;uu.set(-1,0,0,0,1,0,0,0,1);function U0(i,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function n(y,_){_.color.getRGB(y.fogColor.value,zl(i)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function r(y,_,N,O,T){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?a(y,_):_.isMeshLambertMaterial?(a(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(a(y,_),g(y,_)):_.isMeshPhongMaterial?(a(y,_),p(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(a(y,_),f(y,_),_.isMeshPhysicalMaterial&&v(y,_,T)):_.isMeshMatcapMaterial?(a(y,_),S(y,_)):_.isMeshDepthMaterial?a(y,_):_.isMeshDistanceMaterial?(a(y,_),A(y,_)):_.isMeshNormalMaterial?a(y,_):_.isLineBasicMaterial?(l(y,_),_.isLineDashedMaterial&&c(y,_)):_.isPointsMaterial?d(y,_,N,O):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===an&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===an&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let N=e.get(_),O=N.envMap,T=N.envMapRotation;O&&(y.envMap.value=O,y.envMapRotation.value.setFromMatrix4(N0.makeRotationFromEuler(T)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(uu),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function l(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function c(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function d(y,_,N,O){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*N,y.scale.value=O*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function f(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function v(y,_,N){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===an&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){let N=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function F0(i,e,t,n){let r={},a={},l=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,D){let P=D.program;n.uniformBlockBinding(T,P)}function h(T,D){let P=r[T.id];P===void 0&&(y(T),P=p(T),r[T.id]=P,T.addEventListener("dispose",N));let U=D.program;n.updateUBOMapping(T,U);let b=e.render.frame;a[T.id]!==b&&(f(T),a[T.id]=b)}function p(T){let D=g();T.__bindingPointIndex=D;let P=i.createBuffer(),U=T.__size,b=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,U,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,P),P}function g(){for(let T=0;T<c;T++)if(l.indexOf(T)===-1)return l.push(T),T;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let D=r[T.id],P=T.uniforms,U=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let b=0,I=P.length;b<I;b++){let G=P[b];if(Array.isArray(G))for(let F=0,X=G.length;F<X;F++)v(G[F],b,F,U);else v(G,b,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(T,D,P,U){if(A(T,D,P,U)===!0){let b=T.__offset,I=T.value;if(Array.isArray(I)){let G=0;for(let F=0;F<I.length;F++){let X=I[F],te=_(X);S(X,T.__data,G),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(G+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(I,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,T.__data)}}function S(T,D,P){typeof T=="number"||typeof T=="boolean"?D[0]=T:T.isMatrix3?(D[0]=T.elements[0],D[1]=T.elements[1],D[2]=T.elements[2],D[3]=0,D[4]=T.elements[3],D[5]=T.elements[4],D[6]=T.elements[5],D[7]=0,D[8]=T.elements[6],D[9]=T.elements[7],D[10]=T.elements[8],D[11]=0):ArrayBuffer.isView(T)?D.set(new T.constructor(T.buffer,T.byteOffset,D.length)):T.toArray(D,P)}function A(T,D,P,U){let b=T.value,I=D+"_"+P;if(U[I]===void 0)return typeof b=="number"||typeof b=="boolean"?U[I]=b:ArrayBuffer.isView(b)?U[I]=b.slice():U[I]=b.clone(),!0;{let G=U[I];if(typeof b=="number"||typeof b=="boolean"){if(G!==b)return U[I]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(G.equals(b)===!1)return G.copy(b),!0}}return!1}function y(T){let D=T.uniforms,P=0,U=16;for(let I=0,G=D.length;I<G;I++){let F=Array.isArray(D[I])?D[I]:[D[I]];for(let X=0,te=F.length;X<te;X++){let re=F[X],z=Array.isArray(re.value)?re.value:[re.value];for(let Z=0,ee=z.length;Z<ee;Z++){let se=z[Z],ue=_(se),be=P%U,Ae=be%ue.boundary,De=be+Ae;P+=Ae,De!==0&&U-De<ue.storage&&(P+=U-De),re.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=P,P+=ue.storage}}}let b=P%U;return b>0&&(P+=U-b),T.__size=P,T.__cache={},this}function _(T){let D={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(D.boundary=4,D.storage=4):T.isVector2?(D.boundary=8,D.storage=8):T.isVector3||T.isColor?(D.boundary=16,D.storage=12):T.isVector4?(D.boundary=16,D.storage=16):T.isMatrix3?(D.boundary=48,D.storage=48):T.isMatrix4?(D.boundary=64,D.storage=64):T.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(D.boundary=16,D.storage=T.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",T),D}function N(T){let D=T.target;D.removeEventListener("dispose",N);let P=l.indexOf(D.__bindingPointIndex);l.splice(P,1),i.deleteBuffer(r[D.id]),delete r[D.id],delete a[D.id]}function O(){for(let T in r)i.deleteBuffer(r[T]);l=[],r={},a={}}return{bind:d,update:h,dispose:O}}var O0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qn=null;function B0(){return qn===null&&(qn=new la(O0,16,16,Ai,Xn),qn.name="DFG_LUT",qn.minFilter=Zt,qn.magFilter=Zt,qn.wrapS=Vn,qn.wrapT=Vn,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}var vo=class{constructor(e={}){let{canvas:t=Ph(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:f=!1,outputBufferType:v=cn}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=l;let A=v,y=new Set([La,Da,Ia]),_=new Set([cn,Un,xr,yr,Ra,Pa]),N=new Uint32Array(4),O=new Int32Array(4),T=new Y,D=null,P=null,U=[],b=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let G=this,F=!1,X=null,te=null,re=null,z=null;this._outputColorSpace=Yt;let Z=0,ee=0,se=null,ue=-1,be=null,Ae=new Tt,De=new Tt,ct=null,Et=new Qe(0),ht=0,oe=t.width,_e=t.height,de=1,qe=null,He=null,ze=new Tt(0,0,oe,_e),xt=new Tt(0,0,oe,_e),it=!1,dt=new pr,st=!1,tt=!1,It=new Pt,Dt=new Y,At=new Tt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function Ct(){return se===null?de:1}let H=n;function Wt(w,W){return t.getContext(w,W)}try{let w={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",_n,!1),H===null){let W="webgl2";if(H=Wt(W,w),H===null)throw Wt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Xe("WebGLRenderer: "+w.message),w}let ft,R,x,k,q,ne,fe,ve,j,ae,xe,Ie,Me,me,Be,ke,Ze,V,ge,ie,ye,Ee,le;function ce(){ft=new Xg(H),ft.init(),ye=new I0(H,ft),R=new Og(H,ft,e,ye),x=new R0(H,ft),R.reversedDepthBuffer&&f&&x.buffers.depth.setReversed(!0),te=H.createFramebuffer(),re=H.createFramebuffer(),z=H.createFramebuffer(),k=new Zg(H),q=new m0,ne=new P0(H,ft,x,q,R,ye,k),fe=new Wg(G),ve=new jf(H),Ee=new Ug(H,ve),j=new qg(H,ve,k,Ee),ae=new Jg(H,j,ve,Ee,k),V=new $g(H,R,ne),Be=new Bg(q),xe=new p0(G,fe,ft,R,Ee,Be),Ie=new U0(G,q),Me=new _0,me=new b0(ft),Ze=new Ng(G,fe,x,ae,S,d),ke=new C0(G,ae,R),le=new F0(H,k,R,x),ge=new Fg(H,ft,k),ie=new Yg(H,ft,k),k.programs=xe.programs,G.capabilities=R,G.extensions=ft,G.properties=q,G.renderLists=Me,G.shadowMap=ke,G.state=x,G.info=k}ce(),A!==cn&&(I=new jg(A,t.width,t.height,c,r,a));let Ue=new cc(G,H);this.xr=Ue,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(w){w!==void 0&&(de=w,this.setSize(oe,_e,!1))},this.getSize=function(w){return w.set(oe,_e)},this.setSize=function(w,W,K=!0){if(Ue.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=w,_e=W,t.width=Math.floor(w*de),t.height=Math.floor(W*de),K===!0&&(t.style.width=w+"px",t.style.height=W+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(oe*de,_e*de).floor()},this.setDrawingBufferSize=function(w,W,K){oe=w,_e=W,de=K,t.width=Math.floor(w*K),t.height=Math.floor(W*K),this.setViewport(0,0,w,W)},this.setEffects=function(w){if(A===cn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let W=0;W<w.length;W++)if(w[W].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Ae)},this.getViewport=function(w){return w.copy(ze)},this.setViewport=function(w,W,K,$){w.isVector4?ze.set(w.x,w.y,w.z,w.w):ze.set(w,W,K,$),x.viewport(Ae.copy(ze).multiplyScalar(de).round())},this.getScissor=function(w){return w.copy(xt)},this.setScissor=function(w,W,K,$){w.isVector4?xt.set(w.x,w.y,w.z,w.w):xt.set(w,W,K,$),x.scissor(De.copy(xt).multiplyScalar(de).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(w){x.setScissorTest(it=w)},this.setOpaqueSort=function(w){qe=w},this.setTransparentSort=function(w){He=w},this.getClearColor=function(w){return w.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,K=!0){let $=0;if(w){let J=!1;if(se!==null){let Se=se.texture.format;J=y.has(Se)}if(J){let Se=se.texture.type,Ce=_.has(Se),pe=Ze.getClearColor(),Fe=Ze.getClearAlpha(),Oe=pe.r,Ke=pe.g,je=pe.b;Ce?(N[0]=Oe,N[1]=Ke,N[2]=je,N[3]=Fe,H.clearBufferuiv(H.COLOR,0,N)):(O[0]=Oe,O[1]=Ke,O[2]=je,O[3]=Fe,H.clearBufferiv(H.COLOR,0,O))}else $|=H.COLOR_BUFFER_BIT}W&&($|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),X=w},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),Ze.dispose(),Me.dispose(),me.dispose(),q.dispose(),fe.dispose(),ae.dispose(),Ee.dispose(),le.dispose(),xe.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",ms),Ue.removeEventListener("sessionend",gs),xn.stop()};function wt(w){w.preventDefault(),Ol("WebGLRenderer: Context Lost."),F=!0}function _t(){Ol("WebGLRenderer: Context Restored."),F=!1;let w=k.autoReset,W=ke.enabled,K=ke.autoUpdate,$=ke.needsUpdate,J=ke.type;ce(),k.autoReset=w,ke.enabled=W,ke.autoUpdate=K,ke.needsUpdate=$,ke.type=J}function _n(w){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function vn(w){let W=w.target;W.removeEventListener("dispose",vn),wo(W)}function wo(w){Tr(w),q.remove(w)}function Tr(w){let W=q.get(w).programs;W!==void 0&&(W.forEach(function(K){xe.releaseProgram(K)}),w.isShaderMaterial&&xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,K,$,J,Se){W===null&&(W=Ot);let Ce=J.isMesh&&J.matrixWorld.determinantAffine()<0,pe=Ao(w,W,K,$,J);x.setMaterial($,Ce);let Fe=K.index,Oe=1;if($.wireframe===!0){if(Fe=j.getWireframeAttribute(K),Fe===void 0)return;Oe=2}let Ke=K.drawRange,je=K.attributes.position,Le=Ke.start*Oe,at=(Ke.start+Ke.count)*Oe;Se!==null&&(Le=Math.max(Le,Se.start*Oe),at=Math.min(at,(Se.start+Se.count)*Oe)),Fe!==null?(Le=Math.max(Le,0),at=Math.min(at,Fe.count)):je!=null&&(Le=Math.max(Le,0),at=Math.min(at,je.count));let Rt=at-Le;if(Rt<0||Rt===1/0)return;Ee.setup(J,$,pe,K,Fe);let Mt,rt=ge;if(Fe!==null&&(Mt=ve.get(Fe),rt=ie,rt.setIndex(Mt)),J.isMesh)$.wireframe===!0?(x.setLineWidth($.wireframeLinewidth*Ct()),rt.setMode(H.LINES)):rt.setMode(H.TRIANGLES);else if(J.isLine){let Ut=$.linewidth;Ut===void 0&&(Ut=1),x.setLineWidth(Ut*Ct()),J.isLineSegments?rt.setMode(H.LINES):J.isLineLoop?rt.setMode(H.LINE_LOOP):rt.setMode(H.LINE_STRIP)}else J.isPoints?rt.setMode(H.POINTS):J.isSprite&&rt.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))rt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Ut=J._multiDrawStarts,Re=J._multiDrawCounts,en=J._multiDrawCount,Ge=Fe?ve.get(Fe).bytesPerElement:1,$t=q.get($).currentProgram.getUniforms();for(let yn=0;yn<en;yn++)$t.setValue(H,"_gl_DrawID",yn),rt.render(Ut[yn]/Ge,Re[yn])}else if(J.isInstancedMesh)rt.renderInstances(Le,Rt,J.count);else if(K.isInstancedBufferGeometry){let Ut=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Re=Math.min(K.instanceCount,Ut);rt.renderInstances(Le,Rt,Re)}else rt.render(Le,Rt)};function M(w,W,K){w.transparent===!0&&w.side===bn&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,Hi(w,W,K),w.side=ii,w.needsUpdate=!0,Hi(w,W,K),w.side=bn):Hi(w,W,K)}this.compile=function(w,W,K=null){K===null&&(K=w),P=me.get(K),P.init(W),b.push(P),K.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),w!==K&&w.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),P.setupLights();let $=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Se=J.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){let pe=Se[Ce];M(pe,K,J),$.add(pe)}else M(Se,K,J),$.add(Se)}),P=b.pop(),$},this.compileAsync=function(w,W,K=null){let $=this.compile(w,W,K);return new Promise(J=>{function Se(){if($.forEach(function(Ce){q.get(Ce).currentProgram.isReady()&&$.delete(Ce)}),$.size===0){J(w);return}setTimeout(Se,10)}ft.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ri=null;function ut(w){Ri&&Ri(w)}function ms(){xn.stop()}function gs(){xn.start()}let xn=new su;xn.setAnimationLoop(ut),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(w){Ri=w,Ue.setAnimationLoop(w),w===null?xn.stop():xn.start()},Ue.addEventListener("sessionstart",ms),Ue.addEventListener("sessionend",gs),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;X!==null&&X.renderStart(w,W);let K=Ue.enabled===!0&&Ue.isPresenting===!0,$=I!==null&&(se===null||K)&&I.begin(G,se);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(W),W=Ue.getCamera()),w.isScene===!0&&w.onBeforeRender(G,w,W,se),P=me.get(w,b.length),P.init(W),P.state.textureUnits=ne.getTextureUnits(),b.push(P),It.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),dt.setFromProjectionMatrix(It,Dn,W.reversedDepth),tt=this.localClippingEnabled,st=Be.init(this.clippingPlanes,tt),D=Me.get(w,U.length),D.init(),U.push(D),Ue.enabled===!0&&Ue.isPresenting===!0){let Ce=G.xr.getDepthSensingMesh();Ce!==null&&On(Ce,W,-1/0,G.sortObjects)}On(w,W,0,G.sortObjects),D.finish(),G.sortObjects===!0&&D.sort(qe,He,W.reversedDepth),yt=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,yt&&Ze.addToRenderList(D,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Be.beginShadows();let J=P.state.shadowsArray;if(ke.render(J,w,W),st===!0&&Be.endShadows(),($&&I.hasRenderPass())===!1){let Ce=D.opaque,pe=D.transmissive;if(P.setupLights(),W.isArrayCamera){let Fe=W.cameras;if(pe.length>0)for(let Oe=0,Ke=Fe.length;Oe<Ke;Oe++){let je=Fe[Oe];vs(Ce,pe,w,je)}yt&&Ze.render(w);for(let Oe=0,Ke=Fe.length;Oe<Ke;Oe++){let je=Fe[Oe];_s(D,w,je,je.viewport)}}else pe.length>0&&vs(Ce,pe,w,W),yt&&Ze.render(w),_s(D,w,W)}se!==null&&ee===0&&(ne.updateMultisampleRenderTarget(se),ne.updateRenderTargetMipmap(se)),$&&I.end(G),w.isScene===!0&&w.onAfterRender(G,w,W),Ee.resetDefaultState(),ue=-1,be=null,b.pop(),b.length>0?(P=b[b.length-1],ne.setTextureUnits(P.state.textureUnits),st===!0&&Be.setGlobalState(G.clippingPlanes,P.state.camera)):P=null,U.pop(),U.length>0?D=U[U.length-1]:D=null,X!==null&&X.renderEnd()};function On(w,W,K,$){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLightProbeGrid)P.pushLightProbeGrid(w);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||dt.intersectsSprite(w)){$&&At.setFromMatrixPosition(w.matrixWorld).applyMatrix4(It);let Ce=ae.update(w),pe=w.material;pe.visible&&D.push(w,Ce,pe,K,At.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||dt.intersectsObject(w))){let Ce=ae.update(w),pe=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),At.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),At.copy(Ce.boundingSphere.center)),At.applyMatrix4(w.matrixWorld).applyMatrix4(It)),Array.isArray(pe)){let Fe=Ce.groups;for(let Oe=0,Ke=Fe.length;Oe<Ke;Oe++){let je=Fe[Oe],Le=pe[je.materialIndex];Le&&Le.visible&&D.push(w,Ce,Le,K,At.z,je)}}else pe.visible&&D.push(w,Ce,pe,K,At.z,null)}}let Se=w.children;for(let Ce=0,pe=Se.length;Ce<pe;Ce++)On(Se[Ce],W,K,$)}function _s(w,W,K,$){let{opaque:J,transmissive:Se,transparent:Ce}=w;P.setupLightsView(K),st===!0&&Be.setGlobalState(G.clippingPlanes,K),$&&x.viewport(Ae.copy($)),J.length>0&&Gi(J,W,K),Se.length>0&&Gi(Se,W,K),Ce.length>0&&Gi(Ce,W,K),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function vs(w,W,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[$.id]===void 0){let Le=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[$.id]=new pn(1,1,{generateMipmaps:!0,type:Le?Xn:cn,minFilter:wi,samples:Math.max(4,R.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Se=P.state.transmissionRenderTarget[$.id],Ce=$.viewport||Ae;Se.setSize(Ce.z*G.transmissionResolutionScale,Ce.w*G.transmissionResolutionScale);let pe=G.getRenderTarget(),Fe=G.getActiveCubeFace(),Oe=G.getActiveMipmapLevel();G.setRenderTarget(Se),G.getClearColor(Et),ht=G.getClearAlpha(),ht<1&&G.setClearColor(16777215,.5),G.clear(),yt&&Ze.render(K);let Ke=G.toneMapping;G.toneMapping=Nn;let je=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),P.setupLightsView($),st===!0&&Be.setGlobalState(G.clippingPlanes,$),Gi(w,K,$),ne.updateMultisampleRenderTarget(Se),ne.updateRenderTargetMipmap(Se),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let at=0,Rt=W.length;at<Rt;at++){let Mt=W[at],{object:rt,geometry:Ut,material:Re,group:en}=Mt;if(Re.side===bn&&rt.layers.test($.layers)){let Ge=Re.side;Re.side=an,Re.needsUpdate=!0,xs(rt,K,$,Ut,Re,en),Re.side=Ge,Re.needsUpdate=!0,Le=!0}}Le===!0&&(ne.updateMultisampleRenderTarget(Se),ne.updateRenderTargetMipmap(Se))}G.setRenderTarget(pe,Fe,Oe),G.setClearColor(Et,ht),je!==void 0&&($.viewport=je),G.toneMapping=Ke}function Gi(w,W,K){let $=W.isScene===!0?W.overrideMaterial:null;for(let J=0,Se=w.length;J<Se;J++){let Ce=w[J],{object:pe,geometry:Fe,group:Oe}=Ce,Ke=Ce.material;Ke.allowOverride===!0&&$!==null&&(Ke=$),pe.layers.test(K.layers)&&xs(pe,W,K,Fe,Ke,Oe)}}function xs(w,W,K,$,J,Se){w.onBeforeRender(G,W,K,$,J,Se),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(G,W,K,$,w,Se),J.transparent===!0&&J.side===bn&&J.forceSinglePass===!1?(J.side=an,J.needsUpdate=!0,G.renderBufferDirect(K,W,$,J,w,Se),J.side=ii,J.needsUpdate=!0,G.renderBufferDirect(K,W,$,J,w,Se),J.side=bn):G.renderBufferDirect(K,W,$,J,w,Se),w.onAfterRender(G,W,K,$,J,Se)}function Hi(w,W,K){W.isScene!==!0&&(W=Ot);let $=q.get(w),J=P.state.lights,Se=P.state.shadowsArray,Ce=J.state.version,pe=xe.getParameters(w,J.state,Se,W,K,P.state.lightProbeGridArray),Fe=xe.getProgramCacheKey(pe),Oe=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?W.environment:null,$.fog=W.fog;let Ke=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=fe.get(w.envMap||$.environment,Ke),$.envMapRotation=$.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",vn),Oe=new Map,$.programs=Oe);let je=Oe.get(Fe);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===Ce)return Ms(w,pe),je}else pe.uniforms=xe.getUniforms(w),X!==null&&w.isNodeMaterial&&X.build(w,K,pe),w.onBeforeCompile(pe,G),je=xe.acquireProgram(pe,Fe),Oe.set(Fe,je),$.uniforms=pe.uniforms;let Le=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=Be.uniform),Ms(w,pe),$.needsLights=Ro(w),$.lightsStateVersion=Ce,$.needsLights&&(Le.ambientLightColor.value=J.state.ambient,Le.lightProbe.value=J.state.probe,Le.directionalLights.value=J.state.directional,Le.directionalLightShadows.value=J.state.directionalShadow,Le.spotLights.value=J.state.spot,Le.spotLightShadows.value=J.state.spotShadow,Le.rectAreaLights.value=J.state.rectArea,Le.ltc_1.value=J.state.rectAreaLTC1,Le.ltc_2.value=J.state.rectAreaLTC2,Le.pointLights.value=J.state.point,Le.pointLightShadows.value=J.state.pointShadow,Le.hemisphereLights.value=J.state.hemi,Le.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Le.spotLightMatrix.value=J.state.spotLightMatrix,Le.spotLightMap.value=J.state.spotLightMap,Le.pointShadowMatrix.value=J.state.pointShadowMatrix),$.lightProbeGrid=P.state.lightProbeGridArray.length>0,$.currentProgram=je,$.uniformsList=null,je}function ys(w){if(w.uniformsList===null){let W=w.currentProgram.getUniforms();w.uniformsList=br.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Ms(w,W){let K=q.get(w);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function To(w,W){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;T.setFromMatrixPosition(W.matrixWorld);for(let K=0,$=w.length;K<$;K++){let J=w[K];if(J.texture!==null&&J.boundingBox.containsPoint(T))return J}return null}function Ao(w,W,K,$,J){W.isScene!==!0&&(W=Ot),ne.resetTextureUnits();let Se=W.fog,Ce=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?W.environment:null,pe=se===null?G.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:lt.workingColorSpace,Fe=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Oe=fe.get($.envMap||Ce,Fe),Ke=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,je=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!K.morphAttributes.position,at=!!K.morphAttributes.normal,Rt=!!K.morphAttributes.color,Mt=Nn;$.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Mt=G.toneMapping);let rt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ut=rt!==void 0?rt.length:0,Re=q.get($),en=P.state.lights;if(st===!0&&(tt===!0||w!==be)){let gt=w===be&&$.id===ue;Be.setState($,w,gt)}let Ge=!1;$.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==en.state.version||Re.outputColorSpace!==pe||J.isBatchedMesh&&Re.batching===!1||!J.isBatchedMesh&&Re.batching===!0||J.isBatchedMesh&&Re.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Re.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Re.instancing===!1||!J.isInstancedMesh&&Re.instancing===!0||J.isSkinnedMesh&&Re.skinning===!1||!J.isSkinnedMesh&&Re.skinning===!0||J.isInstancedMesh&&Re.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Re.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Re.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Re.instancingMorph===!1&&J.morphTexture!==null||Re.envMap!==Oe||$.fog===!0&&Re.fog!==Se||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Be.numPlanes||Re.numIntersection!==Be.numIntersection)||Re.vertexAlphas!==Ke||Re.vertexTangents!==je||Re.morphTargets!==Le||Re.morphNormals!==at||Re.morphColors!==Rt||Re.toneMapping!==Mt||Re.morphTargetsCount!==Ut||!!Re.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Ge=!0):(Ge=!0,Re.__version=$.version);let $t=Re.currentProgram;Ge===!0&&($t=Hi($,W,J),X&&$.isNodeMaterial&&X.onUpdateProgram($,$t,Re));let yn=!1,Bn=!1,oi=!1,mt=$t.getUniforms(),St=Re.uniforms;if(x.useProgram($t.program)&&(yn=!0,Bn=!0,oi=!0),$.id!==ue&&(ue=$.id,Bn=!0),Re.needsLights){let gt=To(P.state.lightProbeGridArray,J);Re.lightProbeGrid!==gt&&(Re.lightProbeGrid=gt,Bn=!0)}if(yn||be!==w){x.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),mt.setValue(H,"projectionMatrix",w.projectionMatrix),mt.setValue(H,"viewMatrix",w.matrixWorldInverse);let Tn=mt.map.cameraPosition;Tn!==void 0&&Tn.setValue(H,Dt.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&mt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&mt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),be!==w&&(be=w,Bn=!0,oi=!0)}if(Re.needsLights&&(en.state.directionalShadowMap.length>0&&mt.setValue(H,"directionalShadowMap",en.state.directionalShadowMap,ne),en.state.spotShadowMap.length>0&&mt.setValue(H,"spotShadowMap",en.state.spotShadowMap,ne),en.state.pointShadowMap.length>0&&mt.setValue(H,"pointShadowMap",en.state.pointShadowMap,ne)),J.isSkinnedMesh){mt.setOptional(H,J,"bindMatrix"),mt.setOptional(H,J,"bindMatrixInverse");let gt=J.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),mt.setValue(H,"boneTexture",gt.boneTexture,ne))}J.isBatchedMesh&&(mt.setOptional(H,J,"batchingTexture"),mt.setValue(H,"batchingTexture",J._matricesTexture,ne),mt.setOptional(H,J,"batchingIdTexture"),mt.setValue(H,"batchingIdTexture",J._indirectTexture,ne),mt.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&mt.setValue(H,"batchingColorTexture",J._colorsTexture,ne));let wn=K.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&V.update(J,K,$t),(Bn||Re.receiveShadow!==J.receiveShadow)&&(Re.receiveShadow=J.receiveShadow,mt.setValue(H,"receiveShadow",J.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&W.environment!==null&&(St.envMapIntensity.value=W.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=B0()),Bn){if(mt.setValue(H,"toneMappingExposure",G.toneMappingExposure),Re.needsLights&&Co(St,oi),Se&&$.fog===!0&&Ie.refreshFogUniforms(St,Se),Ie.refreshMaterialUniforms(St,$,de,_e,P.state.transmissionRenderTarget[w.id]),Re.needsLights&&Re.lightProbeGrid){let gt=Re.lightProbeGrid;St.probesSH.value=gt.texture,St.probesMin.value.copy(gt.boundingBox.min),St.probesMax.value.copy(gt.boundingBox.max),St.probesResolution.value.copy(gt.resolution)}br.upload(H,ys(Re),St,ne)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(br.upload(H,ys(Re),St,ne),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&mt.setValue(H,"center",J.center),mt.setValue(H,"modelViewMatrix",J.modelViewMatrix),mt.setValue(H,"normalMatrix",J.normalMatrix),mt.setValue(H,"modelMatrix",J.matrixWorld),$.uniformsGroups!==void 0){let gt=$.uniformsGroups;for(let Tn=0,li=gt.length;Tn<li;Tn++){let Ss=gt[Tn];le.update(Ss,$t),le.bind(Ss,$t)}}return $t}function Co(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Ro(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(w,W,K){let $=q.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=W,q.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){let K=q.get(w);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,K=0){se=w,Z=W,ee=K;let $=null,J=!1,Se=!1;if(w){let pe=q.get(w);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(H.FRAMEBUFFER,pe.__webglFramebuffer),Ae.copy(w.viewport),De.copy(w.scissor),ct=w.scissorTest,x.viewport(Ae),x.scissor(De),x.setScissorTest(ct),ue=-1;return}else if(pe.__webglFramebuffer===void 0)ne.setupRenderTarget(w);else if(pe.__hasExternalTextures)ne.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ke=w.depthTexture;if(pe.__boundDepthTexture!==Ke){if(Ke!==null&&q.has(Ke)&&(w.width!==Ke.image.width||w.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(w)}}let Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Se=!0);let Oe=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[W])?$=Oe[W][K]:$=Oe[W],J=!0):w.samples>0&&ne.useMultisampledRTT(w)===!1?$=q.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?$=Oe[K]:$=Oe,Ae.copy(w.viewport),De.copy(w.scissor),ct=w.scissorTest}else Ae.copy(ze).multiplyScalar(de).floor(),De.copy(xt).multiplyScalar(de).floor(),ct=it;if(K!==0&&($=te),x.bindFramebuffer(H.FRAMEBUFFER,$)&&x.drawBuffers(w,$),x.viewport(Ae),x.scissor(De),x.setScissorTest(ct),J){let pe=q.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,pe.__webglTexture,K)}else if(Se){let pe=W;for(let Fe=0;Fe<w.textures.length;Fe++){let Oe=q.get(w.textures[Fe]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Fe,Oe.__webglTexture,K,pe)}}else if(w!==null&&K!==0){let pe=q.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pe.__webglTexture,K)}ue=-1},this.readRenderTargetPixels=function(w,W,K,$,J,Se,Ce,pe=0){if(!(w&&w.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){x.bindFramebuffer(H.FRAMEBUFFER,Fe);try{let Oe=w.textures[pe],Ke=Oe.format,je=Oe.type;if(w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+pe),!R.textureFormatReadable(Ke)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(je)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-$&&K>=0&&K<=w.height-J&&H.readPixels(W,K,$,J,ye.convert(Ke),ye.convert(je),Se)}finally{let Oe=se!==null?q.get(se).__webglFramebuffer:null;x.bindFramebuffer(H.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,W,K,$,J,Se,Ce,pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe)if(W>=0&&W<=w.width-$&&K>=0&&K<=w.height-J){x.bindFramebuffer(H.FRAMEBUFFER,Fe);let Oe=w.textures[pe],Ke=Oe.format,je=Oe.type;if(w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+pe),!R.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Le=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Le),H.bufferData(H.PIXEL_PACK_BUFFER,Se.byteLength,H.STREAM_READ),H.readPixels(W,K,$,J,ye.convert(Ke),ye.convert(je),0);let at=se!==null?q.get(se).__webglFramebuffer:null;x.bindFramebuffer(H.FRAMEBUFFER,at);let Rt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Dh(H,Rt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Le),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Se),H.deleteBuffer(Le),H.deleteSync(Rt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,K=0){let $=Math.pow(2,-K),J=Math.floor(w.image.width*$),Se=Math.floor(w.image.height*$),Ce=W!==null?W.x:0,pe=W!==null?W.y:0;ne.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,K,0,0,Ce,pe,J,Se),x.unbindTexture()},this.copyTextureToTexture=function(w,W,K=null,$=null,J=0,Se=0){let Ce,pe,Fe,Oe,Ke,je,Le,at,Rt,Mt=w.isCompressedTexture?w.mipmaps[Se]:w.image;if(K!==null)Ce=K.max.x-K.min.x,pe=K.max.y-K.min.y,Fe=K.isBox3?K.max.z-K.min.z:1,Oe=K.min.x,Ke=K.min.y,je=K.isBox3?K.min.z:0;else{let St=Math.pow(2,-J);Ce=Math.floor(Mt.width*St),pe=Math.floor(Mt.height*St),w.isDataArrayTexture?Fe=Mt.depth:w.isData3DTexture?Fe=Math.floor(Mt.depth*St):Fe=1,Oe=0,Ke=0,je=0}$!==null?(Le=$.x,at=$.y,Rt=$.z):(Le=0,at=0,Rt=0);let rt=ye.convert(W.format),Ut=ye.convert(W.type),Re;W.isData3DTexture?(ne.setTexture3D(W,0),Re=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ne.setTexture2DArray(W,0),Re=H.TEXTURE_2D_ARRAY):(ne.setTexture2D(W,0),Re=H.TEXTURE_2D),x.activeTexture(H.TEXTURE0),x.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),x.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),x.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);let en=x.getParameter(H.UNPACK_ROW_LENGTH),Ge=x.getParameter(H.UNPACK_IMAGE_HEIGHT),$t=x.getParameter(H.UNPACK_SKIP_PIXELS),yn=x.getParameter(H.UNPACK_SKIP_ROWS),Bn=x.getParameter(H.UNPACK_SKIP_IMAGES);x.pixelStorei(H.UNPACK_ROW_LENGTH,Mt.width),x.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt.height),x.pixelStorei(H.UNPACK_SKIP_PIXELS,Oe),x.pixelStorei(H.UNPACK_SKIP_ROWS,Ke),x.pixelStorei(H.UNPACK_SKIP_IMAGES,je);let oi=w.isDataArrayTexture||w.isData3DTexture,mt=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){let St=q.get(w),wn=q.get(W),gt=q.get(St.__renderTarget),Tn=q.get(wn.__renderTarget);x.bindFramebuffer(H.READ_FRAMEBUFFER,gt.__webglFramebuffer),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let li=0;li<Fe;li++)oi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,q.get(w).__webglTexture,J,je+li),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,q.get(W).__webglTexture,Se,Rt+li)),H.blitFramebuffer(Oe,Ke,Ce,pe,Le,at,Ce,pe,H.DEPTH_BUFFER_BIT,H.NEAREST);x.bindFramebuffer(H.READ_FRAMEBUFFER,null),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||q.has(w)){let St=q.get(w),wn=q.get(W);x.bindFramebuffer(H.READ_FRAMEBUFFER,re),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,z);for(let gt=0;gt<Fe;gt++)oi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,St.__webglTexture,J,je+gt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,St.__webglTexture,J),mt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,wn.__webglTexture,Se,Rt+gt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,wn.__webglTexture,Se),J!==0?H.blitFramebuffer(Oe,Ke,Ce,pe,Le,at,Ce,pe,H.COLOR_BUFFER_BIT,H.NEAREST):mt?H.copyTexSubImage3D(Re,Se,Le,at,Rt+gt,Oe,Ke,Ce,pe):H.copyTexSubImage2D(Re,Se,Le,at,Oe,Ke,Ce,pe);x.bindFramebuffer(H.READ_FRAMEBUFFER,null),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else mt?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Re,Se,Le,at,Rt,Ce,pe,Fe,rt,Ut,Mt.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Re,Se,Le,at,Rt,Ce,pe,Fe,rt,Mt.data):H.texSubImage3D(Re,Se,Le,at,Rt,Ce,pe,Fe,rt,Ut,Mt):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Se,Le,at,Ce,pe,rt,Ut,Mt.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Se,Le,at,Mt.width,Mt.height,rt,Mt.data):H.texSubImage2D(H.TEXTURE_2D,Se,Le,at,Ce,pe,rt,Ut,Mt);x.pixelStorei(H.UNPACK_ROW_LENGTH,en),x.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ge),x.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),x.pixelStorei(H.UNPACK_SKIP_ROWS,yn),x.pixelStorei(H.UNPACK_SKIP_IMAGES,Bn),Se===0&&W.generateMipmaps&&H.generateMipmap(Re),x.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&ne.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ne.setTextureCube(w,0):w.isData3DTexture?ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ne.setTexture2DArray(w,0):ne.setTexture2D(w,0),x.unbindTexture()},this.resetState=function(){Z=0,ee=0,se=null,x.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var du={type:"change"},uc={type:"start"},pu={type:"end"},Mo=new fr,fu=new Sn,z0=Math.cos(70*kl.DEG2RAD),zt=new Y,hn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hc=1e-6,So=class extends ts{constructor(e,t=null){super(e,t),this.state=vt.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new fn,this._lastTargetPosition=new Y,this._quat=new fn().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _r,this._sphericalDelta=new _r,this._scale=1,this._panOffset=new Y,this._rotateStart=new Ye,this._rotateEnd=new Ye,this._rotateDelta=new Ye,this._panStart=new Ye,this._panEnd=new Ye,this._panDelta=new Ye,this._dollyStart=new Ye,this._dollyEnd=new Ye,this._dollyDelta=new Ye,this._dollyDirection=new Y,this._mouse=new Ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=G0.bind(this),this._onPointerDown=V0.bind(this),this._onPointerUp=H0.bind(this),this._onContextMenu=J0.bind(this),this._onMouseWheel=q0.bind(this),this._onKeyDown=Y0.bind(this),this._onTouchStart=Z0.bind(this),this._onTouchMove=$0.bind(this),this._onMouseDown=W0.bind(this),this._onMouseMove=X0.bind(this),this._interceptControlDown=K0.bind(this),this._interceptControlUp=j0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(du),this.update(),this.state=vt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=hn:n>Math.PI&&(n-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=l!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let c=zt.length();l=this._clampDistance(c*this._scale);let d=c-l;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){let c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object);let d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;let h=new Y(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(c),this.object.updateMatrixWorld(),l=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Mo.origin.copy(this.object.position),Mo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mo.direction))<z0?this.object.lookAt(this.target):(fu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mo.intersectPlane(fu,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>hc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hc||this._lastTargetPosition.distanceToSquared(this.target)>hc?(this.dispatchEvent(du),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;zt.copy(r).sub(this.target);let a=zt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,l=n.width,c=n.height;this._mouse.x=r/l*2-1,this._mouse.y=-(a/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function V0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function G0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function H0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pu),this.state=vt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function W0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=vt.DOLLY;break;case Si.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=vt.ROTATE}break;case Si.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(uc)}function X0(i){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function q0(i){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(i.preventDefault(),this.dispatchEvent(uc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(pu))}function Y0(i){this.enabled!==!1&&this._handleKeyDown(i)}function Z0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case bi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=vt.TOUCH_ROTATE;break;case bi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case bi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=vt.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(uc)}function $0(i){switch(this._trackPointer(i),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=vt.NONE}}function J0(i){this.enabled!==!1&&i.preventDefault()}function K0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function j0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ps=class extends Bi{constructor(e){super(e)}load(e,t,n,r){let a=this,l=new Jr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{t(a.parse(c))}catch(d){r?r(d):console.error(d),a.manager.itemError(e)}},n,r)}parse(e){function t(h){let p=new DataView(h),g=32/8*3+32/8*3*3+16/8,f=p.getUint32(80,!0);if(80+32/8+f*g===p.byteLength)return!0;let S=[115,111,108,105,100];for(let A=0;A<5;A++)if(n(S,p,A))return!1;return!0}function n(h,p,g){for(let f=0,v=h.length;f<v;f++)if(h[f]!==p.getUint8(g+f))return!1;return!0}function r(h){let p=new DataView(h),g=p.getUint32(80,!0),f,v,S,A=!1,y,_,N,O,T;for(let F=0;F<70;F++)p.getUint32(F,!1)==1129270351&&p.getUint8(F+4)==82&&p.getUint8(F+5)==61&&(A=!0,y=new Float32Array(g*3*3),_=p.getUint8(F+6)/255,N=p.getUint8(F+7)/255,O=p.getUint8(F+8)/255,T=p.getUint8(F+9)/255);let D=84,P=50,U=new sn,b=new Float32Array(g*3*3),I=new Float32Array(g*3*3),G=new Qe;for(let F=0;F<g;F++){let X=D+F*P,te=p.getFloat32(X,!0),re=p.getFloat32(X+4,!0),z=p.getFloat32(X+8,!0);if(A){let Z=p.getUint16(X+48,!0);(Z&32768)===0?(f=(Z&31)/31,v=(Z>>5&31)/31,S=(Z>>10&31)/31):(f=_,v=N,S=O)}for(let Z=1;Z<=3;Z++){let ee=X+Z*12,se=F*3*3+(Z-1)*3;b[se]=p.getFloat32(ee,!0),b[se+1]=p.getFloat32(ee+4,!0),b[se+2]=p.getFloat32(ee+8,!0),I[se]=te,I[se+1]=re,I[se+2]=z,A&&(G.setRGB(f,v,S,Yt),y[se]=G.r,y[se+1]=G.g,y[se+2]=G.b)}}return U.setAttribute("position",new Nt(b,3)),U.setAttribute("normal",new Nt(I,3)),A&&(U.setAttribute("color",new Nt(y,3)),U.hasColors=!0,U.alpha=T),U}function a(h){let p=new sn,g=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,v=/solid\s(.+)/,S=0,A=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+A+A+A,"g"),_=new RegExp("normal"+A+A+A,"g"),N=[],O=[],T=[],D=new Y,P,U=0,b=0,I=0;for(;(P=g.exec(h))!==null;){b=I;let G=P[0],F=(P=v.exec(G))!==null?P[1]:"";for(T.push(F);(P=f.exec(G))!==null;){let re=0,z=0,Z=P[0];for(;(P=_.exec(Z))!==null;)D.x=parseFloat(P[1]),D.y=parseFloat(P[2]),D.z=parseFloat(P[3]),z++;for(;(P=y.exec(Z))!==null;)N.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),O.push(D.x,D.y,D.z),re++,I++;z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+S),re!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+S),S++}let X=b,te=I-b;p.userData.groupNames=T,p.addGroup(X,te,U),U++}return p.setAttribute("position",new nn(N,3)),p.setAttribute("normal",new nn(O,3)),p}function l(h){return typeof h!="string"?new TextDecoder().decode(h):h}function c(h){if(typeof h=="string"){let p=new Uint8Array(h.length);for(let g=0;g<h.length;g++)p[g]=h.charCodeAt(g)&255;return p.buffer||p}else return h}let d=c(e);return t(d)?r(d):a(l(e))}};var yu=tf(vu(),1),wr=null,Eo=null,Q0={stl:1,stp:1,step:1},ev=200*1024*1024,tv=10205140;function nv(){return wr||(wr=new vo({antialias:!0,alpha:!0}),wr.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),wr.outputColorSpace=Yt,wr)}function iv(i){return Eo||(Eo=(0,yu.default)({locateFile:e=>i+"/occt-import-js.wasm"}).catch(e=>{throw Eo=null,e})),Eo}function Mu(i,e){let t=new Zr({color:tv,roughness:.45,metalness:.1,side:bn}),n=new ln(i,t);return e&&(n.name=e),n}function rv(i){let e=new Uint8Array(i);return(e.length>=6?String.fromCharCode(e[0],e[1],e[2],e[3],e[4],e[5]):"")==="solid"?new ps().parse(new TextDecoder().decode(i)):new ps().parse(i)}function sv(i){let e=new ti;for(let t of i.meshes||[]){let n=new Float32Array(t.attributes.position.array),r=new sn;if(r.setAttribute("position",new Nt(n,3)),t.attributes.normal&&t.attributes.normal.array){let a=new Float32Array(t.attributes.normal.array);r.setAttribute("normal",new Nt(a,3))}if(t.index&&t.index.array){let a=new Uint32Array(t.index.array);r.setIndex(new Nt(a,1))}r.computeVertexNormals(),e.add(Mu(r,t.name))}return e}function av(i,e,t){let n=new Hn().setFromObject(t);if(n.isEmpty())return;let r=n.getCenter(new Y),a=n.getSize(new Y),l=Math.max(a.x,a.y,a.z)/2||1,c=l/Math.tan(i.fov*Math.PI/360);i.position.set(r.x+c,r.y+c*.7,r.z+c),i.near=Math.max(l/1e3,1e-4),i.far=l*200,i.updateProjectionMatrix(),e.target.copy(r),e.update()}function xu(i){i.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())})}function ov(i,e){let t=document.createElement("div");return t.style.cssText="position:absolute;left:8px;bottom:8px;z-index:10;padding:2px 8px;border-radius:4px;background:rgba(0,0,0,0.55);color:#fff;font-size:12px;pointer-events:none;",t.textContent=e,i.appendChild(t),t}window.__s3viewer.register({id:"3d-viewer",name:"3D Viewer",version:"0.1.0",canPreview:function(i){return Q0[i.ext]===1&&(i.size==null||i.size<ev)},render:function(i,e){i.style.position="relative";let t=document.createElement("div");t.style.cssText="position:absolute;inset:0;",i.appendChild(t);let n=ov(i,"3D..."),r=nv();t.appendChild(r.domElement);let a=new Vr;a.background=new Qe(e.dark?1120295:16317180);let l=new jt(50,1,.01,1e4),c=new So(l,r.domElement);c.enableDamping=!0,a.add(new es(16777215,.7));let d=new Qr(16777215,.8);d.position.set(1,2,1),a.add(d);let h=!1,p=new ResizeObserver(()=>{if(h)return;let f=t.clientWidth||1,v=t.clientHeight||1;r.setSize(f,v),l.aspect=f/v,l.updateProjectionMatrix()});p.observe(t),e.fetchObject().then(async function(f){if(h)return;let v;if(e.ext==="stl")v=Mu(rv(f),e.name);else{let S=await iv(e.baseUrl);if(h)return;let A=S.ReadStepFile(new Uint8Array(f),null);if(!A||!A.success)throw new Error(A&&A.exception?A.exception:"STEP parse failed");v=sv(A)}if(h){xu(v);return}a.add(v),av(l,c,v),n.textContent=e.ext.toUpperCase()}).catch(function(f){h||(n.textContent="load failed: "+(f&&f.message?f.message:f),n.style.background="rgba(153,27,27,0.75)")});function g(){h||(c.update(),r.render(a,l),requestAnimationFrame(g))}return g(),{dispose:function(){h=!0,p.disconnect(),a.traverse(f=>{f!==a&&f.parent&&f.parent.remove(f)}),xu(a),r.domElement.parentNode&&r.domElement.parentNode.removeChild(r.domElement),t.parentNode&&t.parentNode.removeChild(t),n.parentNode&&n.parentNode.removeChild(n)}}}});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
