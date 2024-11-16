import { c as create_ssr_component, d as createEventDispatcher, e as escape, a as add_attribute } from "./ssr.js";
const Typewriter_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-1371njd-cursorFade{0%{opacity:1}50%{opacity:0}100%{opacity:1}}.cursor.svelte-1371njd .typing::after{content:'▌';color:var(--cursor-color);animation:svelte-1371njd-cursorFade 1.25s infinite}",
  map: null
};
const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { interval = 30 } = $$props;
  let { cascade = false } = $$props;
  let { loop = false } = $$props;
  let { cursor = true } = $$props;
  createEventDispatcher();
  if (cascade && loop)
    throw new Error("`cascade` mode should not be used with `loop`!");
  let node;
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0)
    $$bindings.interval(interval);
  if ($$props.cascade === void 0 && $$bindings.cascade && cascade !== void 0)
    $$bindings.cascade(cascade);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  $$result.css.add(css);
  return `<div style="${"--cursor-color: " + escape(typeof cursor === "string" ? cursor : "black", true)}" class="${["svelte-1371njd", cursor ? "cursor" : ""].join(" ").trim()}"${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Typewriter as T
};
