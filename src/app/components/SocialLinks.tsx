import { getMetaData } from "@/datahelpers/getMetaData";
import { Image } from "@nextui-org/react";
import React from "react";
const SocialLinks = async () => {
  const { social_links } = await getMetaData();
  return (
    <div className="flex gap-2">
      {social_links.map((link) => (
        <a
          href={link.url}
          key={link.name}
          title={link.name}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={`/svg/${link.icon}`}
            alt={link.name}
            height={32}
            width={32}
            className="rounded-none"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
