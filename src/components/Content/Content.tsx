import React, { FC } from "react";
import { ContentProps } from "./types";
const Content: FC<ContentProps> = ({ children }) => {
  return <div className="text-xl leading-10">{children}</div>;
};

export default Content;
