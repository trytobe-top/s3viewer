type Handler = () => void;

const backHandlers = new Set<Handler>();
const forwardHandlers = new Set<Handler>();

export function onBack(h: Handler): () => void {
  backHandlers.add(h);
  return () => backHandlers.delete(h);
}

export function onForward(h: Handler): () => void {
  forwardHandlers.add(h);
  return () => forwardHandlers.delete(h);
}

export function emitBack() {
  backHandlers.forEach((h) => h());
}

export function emitForward() {
  forwardHandlers.forEach((h) => h());
}
