import { MetaData } from "@/types";
import { getFileContents } from "@/helpers/getFileContents";

export const getMetaData = async (): Promise<MetaData> => {
  const fileContents = getFileContents("meta_data.json");
  return JSON.parse(fileContents);
};
