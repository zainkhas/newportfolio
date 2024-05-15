import React from "react";
import { getProjects } from "@/datahelpers/getProjects";
import WorkWrapper from "./WorkWrapper";

const Work = async () => {
  const projects = await getProjects();
  return <WorkWrapper projects={projects} />;
};

export default Work;
