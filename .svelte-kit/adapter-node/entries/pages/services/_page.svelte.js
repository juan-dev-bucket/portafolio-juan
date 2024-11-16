import { c as create_ssr_component, v as validate_component, a as add_attribute, b as each, e as escape } from "../../../chunks/ssr.js";
import { C as CommonPage } from "../../../chunks/CommonPage.js";
import "../../../chunks/app.js";
import "@riadh-adrani/utils";
/* empty css                                                  *//* empty css                                                      */import { C as CardTitle, a as ChipIcon } from "../../../chunks/ChipIcon.js";
import { A as Assets, g as getAssetURL } from "../../../chunks/assets.js";
import "../../../chunks/home.js";
import { g as getSkills } from "../../../chunks/skills.js";
import { U as UIcon } from "../../../chunks/UIcon.js";
import { C as CardDivider } from "../../../chunks/CardDivider.js";
import { b as base } from "../../../chunks/paths.js";
import { F as Footer } from "../../../chunks/Footer.js";
const items = [
  {
    name: "Webdesign",
    description: "Ya sea que necesites un sitio web corporativo, una tienda online o una página personal, este servicio se encarga de construir una plataforma atractiva, funcional y optimizada para tus necesidades específicas..",
    logo: Assets.WebDevelopment,
    links: [{ to: "", label: "GitHub" }],
    title: "Web design",
    skills: getSkills("angular", "ts", "tailwind"),
    type: "Website Template"
  },
  {
    name: "Web Development",
    description: "Creamos sitios web personalizados que se adaptan a las necesidades específicas de tu negocio, asegurando una experiencia única tanto para ti como para tus usuarios.",
    links: [{ to: "", label: "GitHub" }],
    logo: Assets.WebDevelopment,
    title: "Web development",
    skills: getSkills("svelte", "ts", "tailwind", "sass"),
    type: "Website Template"
  },
  {
    name: "Backend - Frontend Development",
    description: "Integramos APIs y herramientas de terceros para enriquecer la funcionalidad de tu sitio web, como sistemas de pago, CRM, marketing automatizado, entre otros.",
    links: [{ to: "", label: "GitHub" }],
    logo: Assets.Unknown,
    title: "Slick Portfolio",
    skills: getSkills("svelte", "ts", "tailwind", "sass"),
    type: "Website Template"
  },
  {
    name: "Ecommerce Store",
    description: "Desarrollamos soluciones completas para el comercio electrónico, con integración de pasarelas de pago, gestión de inventarios, seguridad y optimización para aumentar tus ventas.",
    links: [{ to: "", label: "GitHub" }],
    logo: Assets.Ecommerce,
    title: "Ecommerce Store",
    skills: getSkills("nodejs", "rabbitmq", "css", "js"),
    type: "Website Template"
  },
  {
    name: "Automatizacion de procesos",
    description: "Optimizamos los procesos empresariales mediante la automatización, mejorando la productividad y reduciendo errores.",
    links: [{ to: "", label: "GitHub" }],
    logo: Assets.Unknown,
    title: "Automatizacion de procesos",
    skills: getSkills("java", "javascript", "python", "kafka"),
    type: "Website Template"
  }
];
const title = "Servicios";
const ServiceCarrousel_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".w-500px.svelte-g6hcza{width:520px}.p-5.svelte-g6hcza{padding:5px 12px}",
  map: null
};
const ServiceCarrousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let element;
  let display = [];
  $$result.css.add(css$1);
  {
    {
      display = items;
    }
  }
  return `<div class="carrousel flex-[0.5] row-center" style="margin: 0 auto; margin-top: 50px"><button class="row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-chevron-left" }, {}, {})}</button> <div class="row overflow-hidden box-content w-500px svelte-g6hcza"${add_attribute("this", element, 0)}>${each(display, (service) => {
    return `<div class="box-content w-500px p-5 col-center svelte-g6hcza"><img class="w-120px h-120px aspect-square"${add_attribute("src", getAssetURL(service.logo), 0)}${add_attribute("alt", service.name, 0)}> <span class="text-center m-t-20px">${validate_component(CardTitle, "CardTitle").$$render($$result, { title: service.name }, {}, {})}</span> <br> ${validate_component(CardDivider, "CardDivider").$$render($$result, { classes: "w-495px" }, {}, {})} <div class="col sm:h-100px md:h-160px"><p class="text-[1em] text-[var(--secondary-text)] m-t-20px m-b-40px text-center flex-1 line-clamp-3">${escape(service.description)} </p></div> ${validate_component(CardDivider, "CardDivider").$$render($$result, { classes: "w-495px" }, {}, {})} <div class="row flex-wrap">${each(service.skills, (tech) => {
      return `${validate_component(ChipIcon, "ChipIcon").$$render(
        $$result,
        {
          logo: getAssetURL(tech.logo),
          name: tech.name,
          href: `${base}/skills/${tech.slug}`
        },
        {},
        {}
      )}`;
    })}</div> </div>`;
  })}</div> <button class="row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-chevron-right" }, {}, {})}</button> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 1350px){}@media(max-width: 850px){}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(CommonPage, "CommonPage").$$render($$result, { title }, {}, {
    default: () => {
      return `${validate_component(ServiceCarrousel, "ServiceCarrousel").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
