import React from "react";
import { getProjects } from "@/datahelpers/getProjects";
import WorkWrapper from "./WorkWrapper";
import type { Metadata } from "next";
import { PAGE_DESCRIPTIONS, PAGE_TITLES } from "@/constants";

export const metadata: Metadata = {
  title: PAGE_TITLES.WORK,
  description: PAGE_DESCRIPTIONS.MAIN
};

const Work = async () => {
  const projects = await getProjects();
  return <WorkWrapper projects={projects} />;
};

export default Work;
