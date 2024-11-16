import * as universal from '../entries/pages/experience/_slug_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experience/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/experience/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/5.ba80396c.js","_app/immutable/chunks/experience.4745d99e.js","_app/immutable/chunks/index.9bc0ff5d.js","_app/immutable/chunks/index.bf7cacb7.js","_app/immutable/chunks/scheduler.98946c50.js","_app/immutable/chunks/paths.917c18bf.js","_app/immutable/chunks/skills.98a5d9e6.js","_app/immutable/chunks/types.e252fbbc.js","_app/immutable/chunks/app.247d5b4e.js","_app/immutable/chunks/CardLogo.c15db58d.js","_app/immutable/chunks/Banner.59010923.js","_app/immutable/chunks/TabTitle.35e3da03.js","_app/immutable/chunks/Chip.a238928b.js","_app/immutable/chunks/spread.84d39b6c.js","_app/immutable/chunks/UIcon.72b28b9f.js","_app/immutable/chunks/CardDivider.13f53dc1.js"];
export const stylesheets = ["_app/immutable/assets/Banner.79dec521.css"];
export const fonts = [];
