import { Content } from "@/components/Content";
import { FC } from "react";
import { EducationProps } from "./types";

const Education: FC<EducationProps> = ({ education }) => (
  <Content title="Education">
    {education.map((education) => (
      <ul key={education.field} className="list-disc ml-4">
        <li className="pl-3">
          <p className="font-medium md:text-xl text-base md:leading-8">
            {education.field}
          </p>
          <p className="font-medium md:text-xl text-base md:leading-8 text-zinc-500 dark:text-zinc-400">
            {education.duration}
          </p>
          <p className="font-medium md:text-xl text-base md:leading-8 text-zinc-500 dark:text-zinc-400">
            {education.institute}
          </p>
        </li>
      </ul>
    ))}
  </Content>
);

export default Education;
