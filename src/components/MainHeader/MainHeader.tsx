import React from "react";
import { getMetaData } from "@/datahelpers/getMetaData";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { MAIN_IMAGE_PATH } from "@/constants";

const MainHeader = async () => {
  const { title, designation, company, company_url, social_links } =
    await getMetaData();
  return (
    <div>
      <Image
        as={NextImage}
        width={130}
        height={130}
        src={MAIN_IMAGE_PATH}
        alt="Profile Photo"
        radius="full"
      />
    </div>
  );
};

export default MainHeader;
