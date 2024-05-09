import { remark } from "remark";
import html from "remark-html";
import breaks from "remark-breaks";
import { getFileContents } from "@/helpers/getFileContents";

export const getAbout = async (): Promise<string> => {
  const fileContents = getFileContents("about.md");
  const processedContent = await remark()
    .use(html)
    .use(breaks)
    .process(fileContents);
  const contentHtml = processedContent.toString();
  return contentHtml;
};
