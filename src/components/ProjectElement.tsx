import type { ProjectInfo } from "../types";

function VotingArchitecture() {
  return (
    <figure className="architecture">
      <figcaption>How votes travel on the LAN</figcaption>
      <div className="architecture-flow">
        <div className="architecture-node">
          <strong>Voter apps</strong>
          <span>Collect votes on Windows</span>
        </div>
        <div className="architecture-transport">
          <span aria-hidden="true">↓</span> AES-encrypted UDP broadcast
        </div>
        <div className="architecture-node">
          <strong>VotesViewer</strong>
          <span>Validate packets and aggregate totals</span>
        </div>
        <div className="architecture-transport" aria-hidden="true">↓</div>
        <ul className="architecture-outputs" aria-label="Viewer outputs">
          <li>Live results</li>
          <li>CSV export</li>
        </ul>
      </div>
    </figure>
  );
}

export function ProjectElement({ project }: { project: ProjectInfo }) {
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

        <ul className="tags project-tags" aria-label="Technologies">
          {technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>

        {(technicalHighlights || cover) && (
          <details className="project-details">
            <summary>{technicalHighlights ? "Implementation details" : "Project preview"}<span className="sr-only"> for {title}</span></summary>
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
                  {label}<span className="sr-only"> for {title}</span> <span className="arrow-external" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}

        {!featured && <p className="project-category">{category}</p>}
      </div>
      {isVoting && <VotingArchitecture />}
    </article>
  );
}
