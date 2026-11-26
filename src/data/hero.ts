import photo from "../assets/hero-photo.png";
import { LOCATION, NAME, ROLE, STACK, TAGLINE } from "./globals";

export const HERO_DATA = {
  name: NAME,
  role: ROLE,
  stack: STACK,
  tagline: TAGLINE,
  photo,
  location: LOCATION,
  availability: "Open to remote roles",
  experience: "About 5 years of hands-on development",
  language: "English B2 (Aptis General)",
};

export const professionalSummary = [
  "I’m a self-taught software developer from Antioquia, Colombia, with about five years of hands-on practice building projects. My focus is backend development: designing REST APIs, connecting services and devices, and automating workflows with Node.js, TypeScript, and Python.",
  "Working with desktop, mobile, and embedded systems has taught me to think about what happens on both ends of a connection, from discovering devices on a local network to keeping their state in sync. I’m open to backend roles in Colombia and internationally, with a preference for remote work.",
];

export const professionalSummaryEs = [
  "Soy un desarrollador de software autodidacta de Antioquia, Colombia, con unos cinco años de práctica construyendo proyectos. Me enfoco en el desarrollo backend: diseño APIs REST, conecto servicios y dispositivos y automatizo flujos de trabajo con Node.js, TypeScript y Python.",
  "Trabajar con sistemas de escritorio, móviles y embebidos me ha enseñado a pensar en ambos extremos de una conexión, desde descubrir dispositivos en una red local hasta mantener sincronizado su estado. Me interesan los puestos de desarrollo backend en Colombia y en el exterior, con preferencia por el trabajo remoto.",
];
