import { Image, Link } from "@nextui-org/react";
import React, { FC } from "react";
import { IconLinkProps } from "./types";

const IconLink: FC<IconLinkProps> = ({ url, icon, name }) => {
  return (
    <Link href={url} key={name} title={name} target="_blank" rel="noreferrer">
      <Image src={`/svg/${icon}`} alt={name} height={30} width={30} />
    </Link>
  );
};

export default IconLink;
