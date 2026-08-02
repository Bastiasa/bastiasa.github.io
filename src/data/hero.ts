import { type HeroProps } from "../components/Hero";

import HERO_PHOTO from "../assets/hero-photo.png";
import { LOCATION } from "./globals";

export const HERO_DATA: HeroProps = {
    name: "Luis Bastidas",
    role: "Game Developer",
    tagline: "I build engaging games, from prototype to polished experience.",
    photoSrc: HERO_PHOTO.src,
    location: LOCATION,
    availability: "Available for new projects"
};