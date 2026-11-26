import aptisLogo from "../assets/certifications_logos/aptis_logo.avif";
import javaLogo from "../assets/certifications_logos/java_logo.webp";
import phpLogo from "../assets/certifications_logos/php_logo.webp";
import type { CertificateData } from "../types";

export const certificates: CertificateData[] = [
  {
    image: aptisLogo.src,
    url: "https://credentials.britishcouncil.org/37a53c25-e2bf-41f0-85e6-88133caad087?key=c8d0195bacb345d8d6b4930107b5b5072840e8a9750994123f6eb76115bb70de",
    title: "Aptis General",
    issuer: "British Council",
    level: "English B2",
  },
  {
    image: "/c/national-english-cert.webp",
    url: "/c/national-english-cert.pdf",
    title: "English B2",
    issuer: "Teaching Languages Service (TLS)",
  },
  {
    image: javaLogo.src,
    url: "/c/9502002716242TI1107854150C.pdf",
    title: "Object-Oriented Programming with Java",
    issuer: "SENA",
  },
  {
    image: phpLogo.src,
    url: "/c/9123002706555TI1107854150C.pdf",
    title: "Web Development with PHP",
    issuer: "SENA",
  },
  {
    image: "/c/diploma-godot-videojuegos2d.webp",
    url: "/c/diploma-godot-videojuegos2d.pdf",
    title: "Create a 2D Shoot ’Em Up",
    issuer: "Platzi",
  },
  {
    image: "/c/diploma-introduccion-godot.webp",
    url: "/c/diploma-introduccion-godot.pdf",
    title: "Introduction to Godot",
    issuer: "Platzi",
  },
];
