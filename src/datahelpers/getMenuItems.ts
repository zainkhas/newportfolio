import fs from "fs";
import path from "path";
import { Menu } from "@/types/types";
import { getDataDirectory } from "@/helpers/getDataDirectory";

export const getMenuItems = (): Menu => {
  const dataDirectory = getDataDirectory();
  const fullPath = path.join(dataDirectory, "menu.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
};
