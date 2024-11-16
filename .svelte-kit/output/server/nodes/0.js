import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.53f0f3ae.js","_app/immutable/chunks/scheduler.98946c50.js","_app/immutable/chunks/index.bf7cacb7.js","_app/immutable/chunks/index.9bc0ff5d.js","_app/immutable/chunks/paths.917c18bf.js","_app/immutable/chunks/stores.ab11c48b.js","_app/immutable/chunks/singletons.d325f9c4.js","_app/immutable/chunks/home.8660b917.js","_app/immutable/chunks/types.e252fbbc.js","_app/immutable/chunks/skills.98a5d9e6.js","_app/immutable/chunks/UIcon.72b28b9f.js","_app/immutable/chunks/Typewriter.022da390.js"];
export const stylesheets = ["_app/immutable/assets/0.ca2be344.css","_app/immutable/assets/Typewriter.8279ba2b.css"];
export const fonts = [];
