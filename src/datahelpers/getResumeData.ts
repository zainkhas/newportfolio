import { getFileContents } from "@/helpers/getFileContents";
import { ResumeData } from "@/types";

export const getResumeData = (): ResumeData => {
  const fileContents = getFileContents("resume.json");
  return JSON.parse(fileContents);
};
