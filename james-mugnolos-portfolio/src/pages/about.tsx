import { FunctionComponent } from "react";
import { GenericCard } from "../components/genericCard";
export const AboutPage: FunctionComponent = () => {
  return (
    <>
      <main className="w-[100%] h-[calc(100vh-85px)] flex grow items-center flex-col lg:flex-col md:flex-row p-10">
        <section className="flex grow lg:flex-row lg:w-full md:justify-center lg:h-1/3 flex-col md:h-full md:w-1/2 md:mr-5 lg:mr-0">
          <div className="flex lg:w-1/2 lg:h-full md:h-1/3  md:mb-0 mb-5">
            <GenericCard
              title="Summery"
              description="I am an adaptable college graduate with knowledge of application development, configuration management, and database
design. I aim to leverage my technical and communicative abilities to meet deadlines in an organized fashion and help the team achieve its goals."
            ></GenericCard>
          </div>
          <div className="flex lg:w-1/2 lg:h-full md:h-1/3 lg:mt-0 lg:ml-5 md:mt-5">
            <GenericCard
              title="Education"
              description="University of Wisconsin Platteville - Graduated May 2023"
              subDescription="Bachelor of Science - Software Engineering"
            ></GenericCard>
          </div>
        </section>
        <section className="flex lg:w-full lg:h-1/2 md:justify-center flex-col lg:justify-between grow lg:mt-5 lg:flex-row md:flex-col md:h-full md:w-1/2">
          <div className="flex lg:w-1/3 lg:h-full md:h-1/3 lg:mt-0 mt-5 sm:mt-[-1rem] md:mt-0">
            <GenericCard
              title="Communication"
              description="Without clear and constant communication, any team can fail. That is why I am always striving to be more effective at communicating my thoughts in a brief but informative manner with those around me."
            ></GenericCard>
          </div>
          <div className="flex lg:w-1/3 lg:h-full md:h-1/3 lg:my-0 lg:mx-5 my-5">
            <GenericCard
              title="Organization "
              description="As a Software Engineer, organization is a key part of success. I am always striving to implement more efficient ways to organize the tasks that need to be done, how the tasks will be done, and the timeframe for which said tasks should be done."
            ></GenericCard>
          </div>
          <div className="flex lg:mb-0 mb-5 sm:mb-0 md:mb-0 lg:w-1/3 md:h-1/3 lg:h-full">
            <GenericCard
              title="knowledge"
              description="Knowledge is the backbone of any Software Engineer's life. That is why I am constantly learning new skills and continually refining the skills I have already learned."
            ></GenericCard>
          </div>
        </section>
      </main>
    </>
  );
};
