import React, { FC } from "react";
import { ContentProps } from "./types";
const Content: FC<ContentProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col text-base leading-8 md:text-xl md:leading-10 gap-2">
      {!!title && <span className="text-2xl font-semibold">{title}</span>}
      {children}
    </div>
  );
};

export default Content;
