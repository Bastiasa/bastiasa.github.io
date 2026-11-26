import { translate, type Locale } from "../i18n";
import { backendSkills, complementarySkills, coreBackend } from "../data/skills";

function SkillGroup({
  title,
  technologies,
  familiar,
  primary = false,
  locale,
}: (typeof backendSkills)[number] & { primary?: boolean; locale: Locale }) {
  return (
    <div className={primary ? "skill-group skill-primary" : "skill-group"}>
      <h3>{translate(locale, title)}</h3>
      <ul className="tags" aria-label={translate(locale, title)}>
        {technologies.map((technology) => <li key={technology}>{translate(locale, technology)}</li>)}
      </ul>
      {familiar && <p className="skill-familiarity">{translate(locale, "Familiar with")} {familiar.join(", ")}</p>}
    </div>
  );
}

export function Skills({ locale }: { locale: Locale }) {
  const t = (text: string) => translate(locale, text);
  return (
    <section id="skills" className="page-section" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">{t("Technical Skills")}</h2>

      <div className="skills-grid">
        <SkillGroup locale={locale} title="Core backend stack" technologies={coreBackend} primary />
        {backendSkills.map((group) => <SkillGroup key={group.title} locale={locale} {...group} />)}
      </div>

      <details className="complementary-skills">
        <summary>{t("Complementary skills")}</summary>
        <div className="skills-grid complementary-grid">
          {complementarySkills.map((group) => <SkillGroup key={group.title} locale={locale} {...group} />)}
        </div>
      </details>
    </section>
  );
}
