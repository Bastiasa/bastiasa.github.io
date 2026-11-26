import { translate, type Locale } from "../i18n";
import { coreBackend, familiarSkills } from "../data/skills";

export function Skills({ locale }: { locale: Locale }) {
  const t = (text: string) => translate(locale, text);
  return (
    <section id="skills" className="page-section" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">{t("Technical Skills")}</h2>

      <div className="skill-group skill-primary">
        <h3>{t("Daily use")}</h3>
        <ul className="tags">
          {coreBackend.map((technology) => <li key={technology}>{t(technology)}</li>)}
        </ul>
      </div>

      <details className="secondary-details">
        <summary>{t("Familiar with")}</summary>
        <div className="skills-grid">
          {familiarSkills.map(([topic, technologies]) => (
            <div className="skill-group" key={topic}>
              <h3>{t(topic)}</h3>
              <p className="skill-familiarity">{technologies.map(t).join(" · ")}</p>
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}
