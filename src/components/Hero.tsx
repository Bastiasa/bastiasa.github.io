import { translate, type Locale } from "../i18n";
import { GITHUB_URL } from "../data/footer";
import { HERO_DATA } from "../data/hero";
import type { PortfolioImage } from "../types";

export function Hero({ portrait, locale }: { portrait: PortfolioImage; locale: Locale }) {
  const t = (text: string) => translate(locale, text);
  const { name, role, stack, tagline, location, availability, experience, language } = HERO_DATA;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-name">{name}</p>
          <h1 id="hero-title">{t(role)}</h1>
          <p className="hero-stack">{t(stack)}</p>
          <p className="hero-tagline">{t(tagline)}</p>

          <div className="actions">
            <a className="button button-primary" href="#projects">{t("Explore my projects")} <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href={GITHUB_URL}>{t("View GitHub")} <span className="arrow-external" aria-hidden="true" /></a>
            <a className="text-link" href="#contact">{t("Get in touch")} <span aria-hidden="true">→</span></a>
          </div>

          <ul className="hero-facts" aria-label={t("Professional details")}>
            <li>{t(experience)}</li>
            <li><a href="#certifications">{t(language)}</a></li>
            <li className="availability">{t(availability)}</li>
          </ul>
        </div>

        <figure className="portrait">
          <img {...portrait} alt={name} fetchPriority="high" />
          <figcaption>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M20 10c0 5-8 10-8 10S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {location}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
