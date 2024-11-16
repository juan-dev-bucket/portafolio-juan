import { c as create_ssr_component } from "./ssr.js";
/* empty css                                             */const css = {
  code: "footer.svelte-12fwqae{text-align:center}.copyright.svelte-12fwqae{color:#aaa;font-size:11px;display:inline-block;padding:10px 15px;text-align:center}",
  map: null
};
const GeneralFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-12fwqae" data-svelte-h="svelte-unaiea"><div class="copyright svelte-12fwqae">© 2024 Juan Fernando Moreno, Lotan Inc, All Rights Reserved.</div> </footer>`;
});
export {
  GeneralFooter as G
};
