import React, { FC } from "react";
import { ContainerProps } from "./types";
const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto container flex flex-col px-8 lg:px-50 xl:px-60 md:px-30 md:px-20 my-10">
      {children}
    </div>
  );
};

export default Container;
