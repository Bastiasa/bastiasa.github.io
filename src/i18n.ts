import { spanish } from "./data/es";

export type Locale = "en" | "es";

export const languageRoutes: Record<Locale, string> = { en: "/", es: "/es/" };
export const languageStorageKey = "portfolio-language";

export function translate(locale: Locale, text: string) {
  return locale === "es" ? spanish[text] ?? text : text;
}
