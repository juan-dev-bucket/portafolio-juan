import { c as create_ssr_component, v as validate_component, b as each, a as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as Chip } from "../../../chunks/Chip.js";
import { U as UIcon } from "../../../chunks/UIcon.js";
import { C as CommonPage } from "../../../chunks/CommonPage.js";
/* empty css                                                   */import { A as Assets, g as getAssetURL } from "../../../chunks/assets.js";
import { c as computeExactDuration } from "../../../chunks/app.js";
import { C as CardDivider } from "../../../chunks/CardDivider.js";
import { G as GeneralFooter } from "../../../chunks/GeneralFooter.js";
const items = [
  {
    degree: "Learn Node — Master Package",
    description: "",
    location: "Online",
    logo: Assets.Unknown,
    name: "",
    organization: "Wes Bos",
    period: { from: new Date(2018, 0, 1), to: new Date(2018, 5, 1) },
    shortDescription: "",
    slug: "education-item",
    subjects: ["Nodejs", "Algorithm", "Clean Code", "Javascript", "English"]
  },
  {
    degree: "Ingeniero de Sistemas",
    description: "",
    location: "Colombia",
    logo: Assets.Unknown,
    name: "",
    organization: "Universidad de Antioquia",
    period: { to: new Date(2019, 11, 1) },
    shortDescription: "",
    slug: "education-item-2",
    subjects: ["C", "Java", "C++", "Angular", "Computer Architecture", "Aplicaciones empresariales", "Matematicas", "Seguridad de la informacion", "Algorithms and Data structures"]
  },
  {
    degree: "Máster en JavaScript, ECMAScript, Angular 9+, React, NodeJS",
    description: "",
    location: "Colombia",
    logo: Assets.Unknown,
    name: "",
    organization: "Udemy",
    period: { from: new Date(2023, 10, 1), to: new Date(2024, 1, 1) },
    shortDescription: "",
    slug: "education-item-3",
    subjects: ["C", "Java", "C++", "Angular", "Computer Architecture", "Aplicaciones empresariales", "Matematicas", "Seguridad de la informacion", "Algorithms and Data structures"]
  }
];
const title = "Educación";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let result = items;
  return `${validate_component(CommonPage, "CommonPage").$$render($$result, { title }, {}, {
    default: () => {
      return `<div class="col items-center relative mt-10 flex-1"><div class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"></div> ${each(result, (education, index) => {
        return `<div${add_attribute("class", `flex ${index % 2 !== 0 ? "flex-row" : "flex-row-reverse"} relative items-center w-full my-[10px]`, 0)}><div class="flex-1 hidden lg:flex"></div> <div class="hidden lg:inline p-15px bg-[var(--main)] rounded">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-condition-point" }, {}, {})}</div> <div class="col flex-1 items-stretch">${validate_component(Card, "Card").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="flex-1 col gap-2 items-stretch"><img${add_attribute("src", getAssetURL(education.logo), 0)}${add_attribute("alt", education.organization, 0)} height="50" width="50" class="mb-5"> <div class="text-[1.3em]">${escape(education.degree)}</div> <div>${escape(education.organization)}</div> <div class="col text-[0.9em]">${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})} <div class="row items-center gap-2">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-location" }, {}, {})} ${escape(education.location)}</div> ${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})} <div class="row items-center gap-2">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-time" }, {}, {})} ${escape(computeExactDuration(education.period.from, education.period.to))}</div> ${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})}</div> <div class="row flex-wrap gap-1">${each(education.subjects, (subject) => {
              return `${validate_component(Chip, "Chip").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(subject)}`;
                }
              })}`;
            })} </div></div> `;
          }
        })}</div> </div>`;
      })}</div>`;
    }
  })} ${validate_component(GeneralFooter, "GeneralFooter").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
