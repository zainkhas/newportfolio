import React from "react";
import { getResumeData } from "@/datahelpers/getResumeData";
import { getSkills } from "@/helpers/getSkills";
import { getTenure } from "@/datahelpers/getTenure";
import ResumePaper from "./ResumePaper/ResumePaper";
import ResumeHeader from "./ResumeHeader/ResumeHeader";
import { getMetaData } from "@/datahelpers/getMetaData";
import Container from "../components/Container";
import { About } from "./About";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Metadata } from "next";
import { PAGE_DESCRIPTIONS, PAGE_TITLES } from "@/constants";

export const metadata: Metadata = {
  title: PAGE_TITLES.RESUME,
  description: PAGE_DESCRIPTIONS.MAIN
};

const Resume = () => {
  const resume = getResumeData();
  const skills = getSkills(resume.skills);
  const tenure = getTenure(resume);
  const { full_name } = getMetaData();
  const { about, tagline, contact, education, experience } = resume;
  return (
    <Container>
      <ResumePaper>
        <ResumeHeader
          fullName={full_name}
          tagline={tagline}
          contacts={contact}
        />
        <About about={about} />
        <Skills skills={skills} />
        <Education education={education} />
        <Experience experience={experience} tenure={tenure} />
      </ResumePaper>
    </Container>
  );
};

export default Resume;
