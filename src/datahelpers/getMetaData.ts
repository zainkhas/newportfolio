import { MetaData } from "@/types";
import { getFileContents } from "@/helpers/getFileContents";

export const getMetaData = (): MetaData => {
  const fileContents = getFileContents("meta_data.json");
  return JSON.parse(fileContents);
};
