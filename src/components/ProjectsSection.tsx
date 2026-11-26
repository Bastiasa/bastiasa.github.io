import { useState } from "react";
import { MantineProvider, TextInput } from "@mantine/core";
import "@mantine/core/styles/Input.css";
import { ProjectElement } from "./ProjectElement";
import type { ProjectCategory, ProjectInfo } from "../types";

const categories: ProjectCategory[] = ["Backend & networking", "Web & integrations", "Apps & tools", "Games & 3D"];

function normalizeSearch(text: string) {
  return text.normalize("NFKD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

export function ProjectsSection({ projects }: { projects: ProjectInfo[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "All projects">("All projects");

  const terms = normalizeSearch(query).trim().split(/\s+/).filter(Boolean);
  const filtered = projects.filter((project) => {
    if (category !== "All projects" && project.category !== category) return false;

    const text = normalizeSearch([
      project.title,
      project.description,
      project.category,
      project.status,
      project.year,
      project.solution,
      ...project.technologies,
      ...(project.technicalHighlights ?? []),
    ].join(" "));
    return terms.every((term) => text.includes(term));
  });

  const featured = filtered.filter((project) => project.featured);
  const additional = filtered.filter((project) => !project.featured);
  const hasFilter = terms.length > 0 || category !== "All projects";

  function resetFilters() {
    setQuery("");
    setCategory("All projects");
  }

  return (
    <MantineProvider forceColorScheme="dark" withGlobalClasses={false} cssVariablesSelector=".project-explorer">
      <div className="project-explorer">
        <section id="projects" className="page-section" aria-labelledby="projects-title">
          <h2 id="projects-title" className="section-title">Featured Backend Projects</h2>

          <div className="project-controls">
            <TextInput
              type="search"
              label="Search projects"
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
              placeholder="Try WebRTC, Flask, or UDP"
              classNames={{ root: "project-search", input: "project-search-input", label: "project-search-label" }}
            />
            <fieldset className="project-filters">
              <legend>Filter by category</legend>
              {(["All projects", ...categories] as const).map((label) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={category === label}
                  onClick={() => setCategory(label)}
                >
                  {label}
                </button>
              ))}
            </fieldset>
          </div>

          <div className="project-search-status">
            <p aria-live="polite" aria-atomic="true">
              {hasFilter && (filtered.length ? `${filtered.length} matching ${filtered.length === 1 ? "project" : "projects"}` : "No projects match your search.")}
            </p>
            {hasFilter && <button type="button" onClick={resetFilters}>Clear filters</button>}
          </div>

          {featured.length > 0 && (
            <div className="featured-grid">
              {featured.map((project) => <ProjectElement key={project.id} project={project} />)}
            </div>
          )}

          {hasFilter && featured.length === 0 && additional.length > 0 && (
            <p className="featured-empty">Matches appear in <a href="#additional-projects">Additional Projects</a>.</p>
          )}
        </section>

        {additional.length > 0 && (
          <section id="additional-projects" className="page-section" aria-labelledby="additional-projects-title">
            <h2 id="additional-projects-title" className="section-title">Additional Projects</h2>
            <div className="additional-grid">
              {additional.map((project) => <ProjectElement key={project.id} project={project} />)}
            </div>
          </section>
        )}
      </div>
    </MantineProvider>
  );
}
