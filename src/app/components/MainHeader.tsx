import React from "react";
import { getMetaData } from "@/datahelpers/getMetaData";
import { Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { MAIN_IMAGE_PATH } from "@/constants";

const MainHeader = () => {
  const { title, designation, company, company_url, full_name } = getMetaData();
  return (
    <div className="flex gap-8 items-center flex-col md:flex-row">
      <Image
        as={NextImage}
        width={130}
        height={130}
        src={MAIN_IMAGE_PATH}
        alt={`${full_name} profile photo`}
        radius="full"
      />
      <div className="flex flex-col gap-2">
        <span className="text-2xl md:text-4xl font-semibold text-headingtext text-center md:text-left">
          {title}
        </span>
        <span className="text-lg md:text-xl text-headingtext md:leading-10 text-center md:text-left">
          {designation}
          <Link
            href={company_url}
            target="_blank"
            rel="noreferrer"
            className="text-headingtext"
          >
            {` @${company}`}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default MainHeader;
