import { Project } from "../../types";

export type ProjectItemProps = {
  project: Project;
  onImageClick: () => void;
};

export type ProjectLinksProps = {
  project: Project;
};

export type ProjectsProps = {
  projects: Project[];
  onImageCick: (index: number) => void;
};

export type WorkWrapperProps = {
  projects: Project[];
};
