import { getFileContents } from "@/helpers/getFileContents";
import { Projects } from "@/types";

export const getProjects = (): Projects => {
  const fileContents = getFileContents("projects.json");
  return JSON.parse(fileContents);
};
