import { FC } from "react";
import { ResumePaperProps } from "./types";

const ResumePaper: FC<ResumePaperProps> = ({ children }) => (
  <div className="bg-zinc-100 dark:bg-zinc-800 md:py-20 py-10 md:px-14 px-5 rounded flex flex-col md:my-11 gap-14">
    {children}
  </div>
);

export default ResumePaper;
