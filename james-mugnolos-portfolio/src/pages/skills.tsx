import { FunctionComponent } from "react";
import { SkillDisplay } from "../components/skillDisplay";
import { skillTypes } from "../StaticStores/skillsData";
export const SkillsPage: FunctionComponent = () => {
  return (
    <main className="p-10 w-[100%] h-[calc(100vh-85px)]">
      <section className="sm:h-fit md:h-[30%]">
        <div className="flex-row h-fit">
          <h1 className="text-4xl lg:text-5xl text-center font-semibold mb-3">
            {skillTypes.CERTIFICATIONS}
          </h1>
          <SkillDisplay>{skillTypes.CERTIFICATIONS}</SkillDisplay>
        </div>
      </section>
      <section className="flex flex-col md:flex-row lg:flex-row h-[70%] gap-4 pt-4 justify-between min-h-0 mb-4 sm:overflow-unset md:overflow-hidden">
        <div className="lg:w-1/3  lg:min-h-0">
          <h1 className="text-4xl lg:text-5xl text-center font-semibold mb-3">
            {skillTypes.LANGUAGES}
          </h1>
          <SkillDisplay>{skillTypes.LANGUAGES}</SkillDisplay>
        </div>
        <div className="lg:w-1/3  lg:min-h-0">
          <h1 className="text-4xl lg:text-5xl text-center font-semibold mb-3">
            {skillTypes.TOOLS}
          </h1>
          <SkillDisplay>{skillTypes.TOOLS}</SkillDisplay>
        </div>
        <div className="lg:w-1/3  lg:min-h-0 sm:pb-10">
          <h1 className="text-4xl lg:text-5xl text-center font-semibold mb-3 ">
            {skillTypes.FRAMEWORKS}
          </h1>
          <SkillDisplay>{skillTypes.FRAMEWORKS}</SkillDisplay>
        </div>
      </section>
    </main>
  );
};
