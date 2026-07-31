import { LinearLayout } from "./LinearLayout";
import { ImageLoader } from "./ImageLoader";
import { Icon } from "./Icon";
import { Badge, List, ListItem, Title } from "@mantine/core";

type ProjectElementProps = {
  projectTitle: string;
  projectDescription: string;
  coverSrc: string;
  moreInfoLink?: string;
  openInNewTab?: boolean;
  pixelatedCover?: boolean;
  projectYear?: number;
  catalogNumber?: number;
  technicalHighlights?: string[];
};


export function ProjectElement({
  projectTitle,
  projectDescription,
  coverSrc,
  moreInfoLink,
  openInNewTab = true,
  pixelatedCover = false,
  projectYear,
  catalogNumber,
  technicalHighlights
}: ProjectElementProps) {
  return (
    <LinearLayout className="project-container" spacing="12px" alignItems="stretch">
      
      <span className="project-cover-layout"></span>

      <ImageLoader
        src={coverSrc || "https://placehold.co/3000x3000"}
        alt={projectTitle}
        className={`project-cover ${pixelatedCover ? "pixelated" : ""}`}
      />

      <section className="sm:w-0 relative" style={{ flexGrow: "1" }}>
        <LinearLayout  direction="vertical" className="p-4 pb-6 relative" spacing="12px">
          {catalogNumber !== undefined && (
            <span className="project-catalog-number">
              # {String(catalogNumber).padStart(3, "0")}
            </span>
          )}

          <Title order={3} className="project-title">
            {projectTitle + (projectYear ? ` — ${projectYear}` : "")}
          </Title>

          <Title order={4}>
            Description
          </Title>

          <p className="max-w-[600px] project-description">{projectDescription}</p>

          {technicalHighlights &&
          <>
            <Title order={4}>
              Technical Highlights
            </Title>

            <List icon={<span>&bull;</span>}>
              {technicalHighlights.map((text, index) => (
                <ListItem key={index}>{text}</ListItem>
              ))}
            </List>

          </>}

          {moreInfoLink && (
            <a
              className="ml-auto! mt-4 project-link text-right block"
              target={openInNewTab ? "_blank" : undefined}
              rel={openInNewTab ? "noopener noreferrer" : undefined}
              href={moreInfoLink}
            >
              More <Icon name="open_in_new" />
            </a>
          )}
        </LinearLayout>
      </section>
    </LinearLayout>
  );
}
