import React, { FC } from "react";
import { ResumeHeaderProps } from "./types";
import { Image } from "@nextui-org/react";
const ResumeHeader: FC<ResumeHeaderProps> = ({
  fullName,
  tagline,
  contacts
}) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold md:leading-4">{fullName}</h1>
        <h3 className="text-zinc-500 dark:text-zinc-400 text-lg">{tagline}</h3>
        <div className="flex flex-col gap-2">
          {contacts.map((contactItem) => (
            <a
              key={contactItem.name}
              className="flex items-center text-zinc-500 dark:text-zinc-400"
              href={contactItem.url}
              title={contactItem.name}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center mr-2">
                <Image
                  src={`/svg/${contactItem.icon}`}
                  alt={contactItem.name}
                  height={24}
                  width={24}
                />
              </div>

              {contactItem.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
