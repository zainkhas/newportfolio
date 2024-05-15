import { Content } from "@/components/Content";
import ProjectItem from "./ProjectItem";

import React from "react";

const Projects = ({ projects, onImageCick }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="flex flex-col gap-4">
          <div className="text-xl">
            These are the apps that I have worked on during my career
          </div>
          <Content>
            {projects.map((project, index) => (
              <ProjectItem
                key={project.name}
                project={project}
                onImageCick={() => onImageCick(index)}
              />
            ))}
          </Content>
        </div>
      </div>
    </>
  );
};

export default Projects;
