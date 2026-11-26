import { translate, type Locale } from "../i18n";
import type { ProjectInfo } from "../types";

function VotingArchitecture({ locale }: { locale: Locale }) {
  const t = (text: string) => translate(locale, text);
  return (
    <figure className="architecture">
      <figcaption>{t("How votes travel on the LAN")}</figcaption>
      <div className="architecture-flow">
        <div className="architecture-node">
          <strong>{t("Voter apps")}</strong>
          <span>{t("Collect votes on Windows")}</span>
        </div>
        <div className="architecture-transport">
          <span aria-hidden="true">↓</span> {t("AES-encrypted UDP broadcast")}
        </div>
        <div className="architecture-node">
          <strong>VotesViewer</strong>
          <span>{t("Validate packets and aggregate totals")}</span>
        </div>
        <div className="architecture-transport" aria-hidden="true">↓</div>
        <ul className="architecture-outputs" aria-label={t("Viewer outputs")}>
          <li>{t("Live results")}</li>
          <li>{t("CSV export")}</li>
        </ul>
      </div>
    </figure>
  );
}

export function ProjectElement({ project, locale }: { project: ProjectInfo; locale: Locale }) {
  const t = (text: string) => translate(locale, text);
  const { id, title, category, status, year, description, solution, technologies, technicalHighlights, links, cover, featured } = project;
  const isVoting = id === "lan-voting";

  return (
    <article id={id} className={isVoting ? "project-card project-spotlight" : "project-card"} aria-labelledby={`${id}-title`}>
      <div className="project-body">
        <p className="project-meta">
          <span>{status}</span>
          {year && <time dateTime={String(year)}>{year}</time>}
        </p>
        <h3 id={`${id}-title`}>{title}</h3>
        <p className="project-description">{description}</p>
        {solution && <p className="project-solution">{solution}</p>}

        <ul className="tags project-tags" aria-label={t("Technologies")}>
          {technologies.map((technology) => <li key={technology}>{t(technology)}</li>)}
        </ul>

        {(technicalHighlights || cover) && (
          <details className="project-details">
            <summary>{t(technicalHighlights ? "Implementation details" : "Project preview")}<span className="sr-only">{t(" for ")}{title}</span></summary>
            {technicalHighlights && (
              <ul className="project-highlights">
                {technicalHighlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
            {cover && (
              <img
                {...cover.image}
                alt={cover.alt}
                className={cover.fit === "contain" ? "project-image contain" : "project-image"}
                loading="lazy"
                decoding="async"
              />
            )}
          </details>
        )}

        {links && (
          <ul className="project-links">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a className="text-link" href={href}>
                  {t(label)}<span className="sr-only">{t(" for ")}{title}</span> <span className="arrow-external" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}

        {!featured && <p className="project-category">{t(category)}</p>}
      </div>
      {isVoting && <VotingArchitecture locale={locale} />}
    </article>
  );
}
