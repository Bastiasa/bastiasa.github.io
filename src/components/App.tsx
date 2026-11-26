import type { ReactNode } from "react";
import { CertificatesSection } from "./Certificates";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Skills } from "./Skills";
import { certificates } from "../data/certificates";
import { FOOTER_DATA } from "../data/footer";
import { professionalSummary } from "../data/hero";
import type { PortfolioImage } from "../types";

export default function App({ portrait, children }: { portrait: PortfolioImage; children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header id="top" className="site-header">
        <div className="container nav-layout">
          <a className="wordmark" href="#top">
            <span className="wordmark-initials" aria-hidden="true">LB</span>
            <span>Luis Bastidas</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
          </nav>
          <a className="button button-secondary nav-contact" href="#contact">Contact <span aria-hidden="true">→</span></a>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <Hero portrait={portrait} />
        <div className="container">
          <section id="about" className="page-section summary" aria-labelledby="about-title">
            <h2 id="about-title" className="section-title">Professional Summary</h2>
            <div className="summary-copy">
              {professionalSummary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
          <Skills />
          {children}
          <CertificatesSection certificates={certificates} />
        </div>
      </main>

      <Footer {...FOOTER_DATA} />
    </>
  );
}
