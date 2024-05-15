import { Image } from "@nextui-org/react";
import React, { FC } from "react";
import { ProjectItemProps } from "./types";
import ProjectLinks from "./ProjectLinks";

const Project: FC<ProjectItemProps> = ({ project, onImageCick }) => {
  return (
    <div className="my-5 flex gap-5">
      <div className="flex-1 flex-col gap-3">
        <h4 className="font-semibold">{project.name}</h4>
        <p>{project.description}</p>
        <ProjectLinks project={project} />
      </div>

      <Image
        src={`/images/${project.image}`}
        height={300}
        width={350}
        className="rounded-lg cursor-pointer object-cover"
        alt={project.name}
        onClick={onImageCick}
      />
    </div>
  );
};

export default Project;