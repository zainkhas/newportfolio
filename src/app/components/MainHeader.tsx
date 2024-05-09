import React from "react";
import { getMetaData } from "@/datahelpers/getMetaData";
import { Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { MAIN_IMAGE_PATH } from "@/constants";

const MainHeader = async () => {
  const { title, designation, company, company_url, full_name } =
    await getMetaData();
  return (
    <div className="flex gap-8 items-center">
      <Image
        as={NextImage}
        width={130}
        height={130}
        src={MAIN_IMAGE_PATH}
        alt={`${full_name} profile photo`}
        radius="full"
      />
      <div className="flex flex-col">
        <span className="text-4xl font-semibold text-headingtext">{title}</span>
        <span className="text-xl text-headingtext leading-10">
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
