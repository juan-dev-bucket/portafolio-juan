

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ca256887.js","_app/immutable/chunks/scheduler.98946c50.js","_app/immutable/chunks/index.bf7cacb7.js","_app/immutable/chunks/stores.c7d282e4.js","_app/immutable/chunks/singletons.08fbafe3.js","_app/immutable/chunks/paths.64485a91.js"];
export const stylesheets = [];
export const fonts = [];