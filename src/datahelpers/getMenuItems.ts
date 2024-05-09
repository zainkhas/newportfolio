import { Menu } from "@/types";
import { getFileContents } from "@/helpers/getFileContents";

export const getMenuItems = (): Menu => {
  const fileContents = getFileContents("menu.json");
  return JSON.parse(fileContents);
};
