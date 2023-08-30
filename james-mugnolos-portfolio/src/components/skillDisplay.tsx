import React, { FunctionComponent, useEffect, useState } from "react";
import { skillTypes } from "../pages/skills";
import { SkillCard } from "./skillCard";
import { ISkillsDataLayout, SkillData } from "../StaticStores/skillsData";

interface ISkillDisplayProps {
  children: skillTypes;
}
type SkillCardType = {
  id: number;
  name: string;
  comfortlevel: string;
};
export const SkillDisplay: FunctionComponent<ISkillDisplayProps> = ({
  children,
}) => {
  const skillCards = SkillData.filter((skills) => skills.type == children);

  return (
    <div className="flex flex-col grow">
      <h1 className="text-4xl lg:text-5xl text-center font-semibold">
        {children}
      </h1>
      <div className="bg-[rgba(0,0,0,.05)] mt-6 h-full overflow-auto">
        <ul className="list-none w-full flex flex-col grow mb-5">
          {skillCards.map((skill) => (
            <li key={skill.id}>
              <SkillCard
                title={skill.name}
                comphortLevel={skill.comfortLevel}
              ></SkillCard>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
