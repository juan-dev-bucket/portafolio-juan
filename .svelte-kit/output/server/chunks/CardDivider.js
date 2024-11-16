import { c as create_ssr_component, e as escape } from "./ssr.js";
const CardDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classes = "" } = $$props;
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `<div class="${"bg-[var(--border)] h-1px m-y-10px " + escape(classes, true)}"></div>`;
});
export {
  CardDivider as C
};
