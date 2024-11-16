import { c as create_ssr_component, a as add_attribute, d as createEventDispatcher, v as validate_component } from "../../../chunks/ssr.js";
import { f as filterItemsByQuery } from "../../../chunks/app.js";
import { i as items$2 } from "../../../chunks/experience.js";
import { i as items } from "../../../chunks/projects.js";
import { i as items$1 } from "../../../chunks/skills.js";
import { a as subscribe } from "../../../chunks/utils.js";
import { C as CommonPage } from "../../../chunks/CommonPage.js";
/* empty css                                                   */import { p as page } from "../../../chunks/stores.js";
import { U as UIcon } from "../../../chunks/UIcon.js";
const css = {
  code: "input.svelte-c0g44u:focus{outline:1px solid var(--border-hover);background-color:var(--main-hover)}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let inputElement;
  function focus() {
    inputElement.focus();
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  $$result.css.add(css);
  return `<input${add_attribute("placeholder", placeholder, 0)} class="text-[inherit] bg-transparent border-[1px] border-solid border-[var(--border)] px-[20px] py-[10px] rounded-[15px] flex-1 text-[1.15em]  svelte-c0g44u"${add_attribute("this", inputElement, 0)}${add_attribute("value", value, 0)}>`;
});
const SearchPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { title: title2 = "Title" } = $$props;
  let { search = "" } = $$props;
  let searchInput;
  const dispatch = createEventDispatcher();
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        dispatch("search", { search: search.trim().toLowerCase() });
      }
    }
    $$rendered = `${validate_component(CommonPage, "CommonPage").$$render($$result, { title: title2 }, {}, {
      default: () => {
        return `<div class="w-100% row">${validate_component(Input, "Input").$$render(
          $$result,
          {
            placeholder: "Buscar...",
            this: searchInput,
            value: search
          },
          {
            this: ($$value) => {
              searchInput = $$value;
              $$settled = false;
            },
            value: ($$value) => {
              search = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <div class="w-100% col flex-1">${slots.default ? slots.default({}) : ``}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const title = "Buscar";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let query = "";
  let result = [];
  {
    {
      result = [];
      result.push(...filterItemsByQuery(items, query).map((data) => ({
        data,
        icon: "i-carbon-cube",
        name: data.name,
        to: `projects/${data.slug}`
      })));
      result.push(...filterItemsByQuery(items$1, query).map((data) => ({
        data,
        icon: "i-carbon-software-resource-cluster",
        name: data.name,
        to: `skills/${data.slug}`
      })));
      result.push(...filterItemsByQuery(items$2, query).map((data) => ({
        data,
        icon: "i-carbon-development",
        name: `${data.name} @ ${data.company}`,
        to: `experience/${data.slug}`
      })));
    }
  }
  return `${validate_component(SearchPage, "SearchPage").$$render($$result, { title }, {}, {
    default: () => {
      return `<div class="flex flex-col items-stretch gap-10 p-2"></div> ${`<div class="flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]">${validate_component(UIcon, "UIcon").$$render(
        $$result,
        {
          icon: "i-carbon-search-locate-mirror",
          classes: "text-2em"
        },
        {},
        {}
      )} <span data-svelte-h="svelte-ca3n14">Trata de copiar algo...</span></div>`}`;
    }
  })}`;
});
export {
  Page as default
};
