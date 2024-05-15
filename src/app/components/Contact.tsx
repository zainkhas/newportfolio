import { Content } from "@/components/Content";
import { getFooter } from "@/datahelpers/getFooter";
import React from "react";
const Contact = async () => {
  const footer = await getFooter();
  return (
    <Content title="Contact">
      <div dangerouslySetInnerHTML={{ __html: footer }} />
    </Content>
  );
};

export default Contact;
