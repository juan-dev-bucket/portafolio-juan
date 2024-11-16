

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.46f2bd91.js","_app/immutable/chunks/scheduler.98946c50.js","_app/immutable/chunks/index.bf7cacb7.js","_app/immutable/chunks/CommonPage.1b3ed08e.js","_app/immutable/chunks/app.247d5b4e.js","_app/immutable/chunks/TabTitle.35e3da03.js","_app/immutable/chunks/index.9bc0ff5d.js","_app/immutable/chunks/paths.917c18bf.js","_app/immutable/chunks/ChipIcon.c71847f7.js","_app/immutable/chunks/spread.84d39b6c.js","_app/immutable/chunks/home.8660b917.js","_app/immutable/chunks/types.e252fbbc.js","_app/immutable/chunks/skills.98a5d9e6.js","_app/immutable/chunks/UIcon.72b28b9f.js","_app/immutable/chunks/CardDivider.13f53dc1.js","_app/immutable/chunks/Footer.7de18754.js"];
export const stylesheets = ["_app/immutable/assets/10.72a312f2.css","_app/immutable/assets/Card.7a6abfc5.css","_app/immutable/assets/CardLink.e1b0f5e1.css","_app/immutable/assets/ChipIcon.b03ae438.css","_app/immutable/assets/Footer.cef1bc48.css"];
export const fonts = [];
