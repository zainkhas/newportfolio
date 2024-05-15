import { Content } from "@/components/Content";
import { getAbout } from "@/datahelpers/getAbout";
import React from "react";
const About = async () => {
  const about = await getAbout();
  return (
    <Content title="About me">
      <div dangerouslySetInnerHTML={{ __html: about }} />
    </Content>
  );
};

export default About;
