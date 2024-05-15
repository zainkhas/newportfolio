import IconLink from "@/components/IconLink/IconLink";
import React, { FC } from "react";
import { ProjectLinksProps } from "./types";

const ProjectLinks: FC<ProjectLinksProps> = ({ project }) => {
  return (
    <div className="flex items-center gap-4">
      {!!project.website && project.website.length && (
        <IconLink url={project.website} name="Website" icon="link.svg" />
      )}
      {!!project.google_play && project.google_play.length && (
        <IconLink url={project.google_play} name="Play Store" icon="play.svg" />
      )}
      {!!project.app_store && project.app_store.length && (
        <IconLink url={project.app_store} name="App Store" icon="apple.svg" />
      )}
    </div>
  );
};

export default ProjectLinks;
