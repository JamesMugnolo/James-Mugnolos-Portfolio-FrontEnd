import React, { FunctionComponent, useEffect, useState } from "react";
import { skillTypes } from "../pages/skills";
import { SkillCard } from "./skillCard";
import axios from "axios";
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
  const [skillCards, setSkillCards] = useState<SkillCardType[]>([]);
  const addItems = (cardData: SkillCardType[]) => {
    setSkillCards([...cardData, ...skillCards]);
    console.log(cardData);
    console.log(skillCards);
  };
  useEffect(() => {
    if (children === skillTypes.FRAMEWORKS) {
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}api/Skills/${skillTypes.FRAMEWORKS}`
        )
        .then(function (response) {
          const newCardsData: SkillCardType[] = response.data;
          addItems(newCardsData);
        });
    }
    if (children === skillTypes.TOOLS) {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}api/Skills/${skillTypes.TOOLS}`)
        .then(function (response) {
          let newCardsData: SkillCardType[] = [];
          newCardsData = response.data;
          addItems(newCardsData);
        });
    }
    if (children === skillTypes.LANGUAGES) {
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}api/Skills/${skillTypes.LANGUAGES}`
        )
        .then(function (response) {
          let newCardsData: SkillCardType[] = [];
          newCardsData = response.data;
          addItems(newCardsData);
        });
    }
  }, []);
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
                comphortLevel={skill.comfortlevel}
              ></SkillCard>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
