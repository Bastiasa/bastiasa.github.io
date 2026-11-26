export type PortfolioImage = {
  src: string;
  width: number;
  height: number;
};

export type ProjectCategory = "Backend & networking" | "Web & integrations" | "Apps & tools" | "Games & 3D";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectInfo<Cover = PortfolioImage> = {
  id: string;
  title: string;
  category: ProjectCategory;
  status: string;
  description: string;
  technologies: string[];
  solution?: string;
  technicalHighlights?: string[];
  links?: ProjectLink[];
  cover?: { image: Cover; alt: string; fit?: "contain" };
  year?: number;
  featured?: boolean;
};

export type CertificateData = {
  image: string;
  url: string;
  title: string;
  issuer: string;
  level?: string;
};
