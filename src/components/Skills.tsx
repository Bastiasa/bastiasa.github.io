import { backendSkills, complementarySkills, coreBackend } from "../data/skills";

function SkillGroup({
  title,
  technologies,
  familiar,
  primary = false,
}: (typeof backendSkills)[number] & { primary?: boolean }) {
  return (
    <div className={primary ? "skill-group skill-primary" : "skill-group"}>
      <h3>{title}</h3>
      <ul className="tags" aria-label={title}>
        {technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
      {familiar && <p className="skill-familiarity">Familiar with {familiar.join(", ")}</p>}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="page-section" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">Technical Skills</h2>

      <div className="skills-grid">
        <SkillGroup title="Core backend stack" technologies={coreBackend} primary />
        {backendSkills.map((group) => <SkillGroup key={group.title} {...group} />)}
      </div>

      <details className="complementary-skills">
        <summary>Complementary skills</summary>
        <div className="skills-grid complementary-grid">
          {complementarySkills.map((group) => <SkillGroup key={group.title} {...group} />)}
        </div>
      </details>
    </section>
  );
}
