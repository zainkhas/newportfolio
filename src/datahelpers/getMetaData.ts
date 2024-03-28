import fs from "fs";
import path from "path";
import { MetaData } from "@/types/types";
import { getDataDirectory } from "@/helpers/getDataDirectory";

export const getMetaData = async (): Promise<MetaData> => {
  const dataDirectory = getDataDirectory();
  const fullPath = path.join(dataDirectory, "meta_data.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
};
