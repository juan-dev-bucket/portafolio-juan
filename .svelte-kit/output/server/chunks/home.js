import { P as Platform } from "./types.js";
import { g as getSkills } from "./skills.js";
const title = "Inicio";
const name = "Juan Fernando";
const lastName = "Moreno";
const description = "El código es una solución que transforma un reto en oportunidad.";
const links = [
  { platform: Platform.GitHub, link: "https://github.com/jumo04" },
  {
    platform: Platform.Linkedin,
    link: "https://www.linkedin.com/in/juan-fernando-moreno/"
  },
  {
    platform: Platform.Email,
    link: "juanfernandomoreno777@gmail.com"
  },
  {
    platform: Platform.Youtube,
    link: "https://www.youtube.com"
  },
  {
    platform: Platform.Facebook,
    link: "https://www.facebook.com/profile.php?id=61567854842701"
  }
];
const skills = getSkills("shopify", "kubernetes", "docker", "rabbitmq", "js", "css", "html", "reactjs", "nodejs", "svelte", "ts", "kafka", "java", "angular", "express");
export {
  links as a,
  description as d,
  lastName as l,
  name as n,
  skills as s,
  title as t
};
