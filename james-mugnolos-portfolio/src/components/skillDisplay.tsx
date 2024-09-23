import { FunctionComponent } from "react";
import { skillTypes } from "../StaticStores/skillsData";
import { SkillCard } from "./skillCard";
import { SkillData } from "../StaticStores/skillsData";

interface ISkillDisplayProps {
  children: skillTypes;
}
export const SkillDisplay: FunctionComponent<ISkillDisplayProps> = ({
  children,
}) => {
  const skillCards = SkillData.filter((skills) => skills.type === children);

  return (
    <div className="overflow-y-auto sm:h-fit md:h-full no-scrollbar">
      <div className="flex flex-col grow ">
        <div className="bg-[rgba(0,0,0,.05)] sm:h-fit md:h-full overflow-y-auto no-scrollbar">
          <ul className="list-none w-full flex flex-col grow gap-4 p-4 ">
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
    </div>
  );
};
