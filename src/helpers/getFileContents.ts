import fs from "fs";
import path from "path";
import { getDataDirectory } from "./getDataDirectory";

export const getFileContents = (fileName: string): string => {
  const dataDirectory = getDataDirectory();
  const fullPath = path.join(dataDirectory, fileName);
  return fs.readFileSync(fullPath, "utf8");
};
