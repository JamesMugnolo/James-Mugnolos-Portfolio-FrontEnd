import { FunctionComponent } from "react";

interface ISkillCardProps {
  title: string;
  comphortLevel: string;
}
export const SkillCard: FunctionComponent<ISkillCardProps> = ({
  title,
  comphortLevel,
}) => {
  return (
    <div className="flex flex-col items-center bg-white p-5 m-5 mb-0">
      <h1 className="text-2xl lg:text-3xl font-semibold">{title}</h1>
      <h3 className="text-xl lg:text-2xl font-normal mt-2">{comphortLevel}</h3>
    </div>
  );
};
