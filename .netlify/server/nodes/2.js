import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.498964f2.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.8ecc7ac8.js"];
export const stylesheets = [];
export const fonts = [];
