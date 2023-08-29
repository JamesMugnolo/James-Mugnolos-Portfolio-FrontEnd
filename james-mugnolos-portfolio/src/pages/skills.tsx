import { FunctionComponent } from "react";
import { SkillDisplay } from "../components/skillDisplay";

export enum skillTypes {
  LANGUAGES = "Languages",
  TOOLS = "Tools",
  FRAMEWORKS = "Frameworks",
}
export const SkillsPage: FunctionComponent = () => {
  return (
    <main className="flex flex-col md:flex-row lg:flex-row gap-6 p-10 justify-between w-[100%] h-[calc(100vh-85px)]">
      <div className="lg:w-1/3 flex">
        <SkillDisplay>{skillTypes.LANGUAGES}</SkillDisplay>
      </div>
      <div className="lg:w-1/3 lg:mx-5 md:mx-5 flex grow">
        <SkillDisplay>{skillTypes.TOOLS}</SkillDisplay>
      </div>
      <div className="lg:w-1/3 pb-10 md:pb-0 lg:pb-0 flex">
        <SkillDisplay>{skillTypes.FRAMEWORKS}</SkillDisplay>
      </div>
    </main>
  );
};
