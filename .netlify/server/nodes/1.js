

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.981cd1ec.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.8ecc7ac8.js","_app/immutable/chunks/singletons.d3d84cd3.js"];
export const stylesheets = [];
export const fonts = [];
