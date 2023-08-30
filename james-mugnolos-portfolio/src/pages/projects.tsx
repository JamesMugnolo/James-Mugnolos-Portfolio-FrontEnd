import { FunctionComponent, useEffect, useState } from "react";
import { ProjectCard } from "../components/projectCard";
import { ProjectData } from "../StaticStores/projectData";

type ProjectCardType = {
  id: number;
  name: string;
  description: string;
  github_link: string;
};

export const ProjectsPage: FunctionComponent = () => {
  return (
    <main className="flex flex-col p-10 justify-between w-[100%] h-[calc(100vh-85px)] ">
      <h1 className="text-4xl lg:text-5xl text-center font-semibold mb-5">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  h-full overflow-auto bg-[rgba(0,0,0,.05)] gap-5 p-5">
        <ul className="list-none">
          {ProjectData.map((project) => (
            <li key={project.id}>
              <ProjectCard
                title={project.name}
                description={project.description}
                link={project.githubLink}
              ></ProjectCard>
            </li>
          ))}
        </ul>
        <ProjectCard
          title="project"
          link="hththt"
          description="THTHTHERTJETEJTHEJTHEJTHEJTHEJTHETJTjkfvnlewafvnerjfvaklwergvnjardwivaolwjdvn"
        ></ProjectCard>
        <ProjectCard
          title="project"
          link="hththt"
          description="THTHTHERTJETEJTHEJTHEJTHEJTHEJTHETJTjkfvnlewafvnerjfvaklwergvnjardwivaolwjdvn"
        ></ProjectCard>
        <ProjectCard
          title="project"
          link="hththt"
          description="THTHTHERTJETEJTHEJTHEJTHEJTHEJTHETJTjkfvnlewafvnerjfvaklwergvnjardwivaolwjdvn"
        ></ProjectCard>
        <ProjectCard
          title="project"
          link="hththt"
          description="THTHTHERTJETEJTHEJTHEJTHEJTHEJTHETJTjkfvnlewafvnerjfvaklwergvnjardwivaolwjdvn"
        ></ProjectCard>
        <ProjectCard
          title="project"
          link="hththt"
          description="THTHTHERTJETEJTHEJTHEJTHEJTHEJTHETJTjkfvnlewafvnerjfvaklwergvnjardwivaolwjdvn"
        ></ProjectCard>
      </div>
    </main>
  );
};
