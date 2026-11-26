import { languageRoutes, translate, type Locale } from "../i18n";
import type { ReactNode } from "react";
import { CertificatesSection } from "./Certificates";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Skills } from "./Skills";
import { certificates } from "../data/certificates";
import { FOOTER_DATA } from "../data/footer";
import { professionalSummary, professionalSummaryEs } from "../data/hero";
import type { PortfolioImage } from "../types";

export default function App({ portrait, children, locale }: { portrait: PortfolioImage; children: ReactNode; locale: Locale }) {
  const t = (text: string) => translate(locale, text);
  return (
    <>
      <a className="skip-link" href="#main">{t("Skip to content")}</a>
      <header id="top" className="site-header">
        <div className="container nav-layout">
          <a className="wordmark" href="#top">
            <span className="wordmark-initials" aria-hidden="true">LB</span>
            <span>Luis Bastidas</span>
          </a>
          <nav aria-label={t("Main navigation")}>
            <a href="#about">{t("About")}</a>
            <a href="#skills">{t("Skills")}</a>
            <a href="#projects">{t("Projects")}</a>
            <a href="#certifications">{t("Certifications")}</a>
          </nav>
          <div className="nav-contact nav-actions">
            <a className="button button-secondary" href="#contact">{t("Contact")} <span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href={locale === "en" ? languageRoutes.es : `${languageRoutes.en}?lang=en`}
              data-language-choice={locale === "en" ? "es" : "en"}
              lang={locale === "en" ? "es" : "en"}
              hrefLang={locale === "en" ? "es" : "en"}>
              {locale === "en" ? "Español" : "English"}
            </a>
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <Hero portrait={portrait} locale={locale} />
        <div className="container">
          <section id="about" className="page-section summary" aria-labelledby="about-title">
            <h2 id="about-title" className="section-title">{t("Professional Summary")}</h2>
            <div className="summary-copy">
              {(locale === "es" ? professionalSummaryEs : professionalSummary).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
          <Skills locale={locale} />
          {children}
          <CertificatesSection certificates={certificates} locale={locale} />
        </div>
      </main>

      <Footer {...FOOTER_DATA} locale={locale} />
    </>
  );
}
