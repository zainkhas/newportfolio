import { Image } from "@nextui-org/react";
import React, { FC } from "react";
import { ProjectItemProps } from "./types";
import ProjectLinks from "./ProjectLinks";

const ProjectItem: FC<ProjectItemProps> = ({ project, onImageClick }) => {
  return (
    <div className="my-5 flex gap-5">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-1 flex-col gap-3">
          <h4 className="font-semibold text-xl">{project.name}</h4>
          <div className="flex md:flex-row flex-col-reverse gap-4">
            <p className="flex flex-1">{project.description}</p>

            <Image
              src={`/images/${project.image}`}
              height={300}
              width={350}
              className="rounded-lg cursor-pointer object-cover"
              alt={project.name}
              onClick={onImageClick}
            />
          </div>
        </div>
        <ProjectLinks project={project} />
      </div>
    </div>
  );
};

export default ProjectItem;
