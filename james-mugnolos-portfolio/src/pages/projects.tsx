import { FunctionComponent } from "react";
import { ProjectCard } from "../components/projectCard";
import { ProjectData } from "../StaticStores/projectData";

export const ProjectsPage: FunctionComponent = () => {
  function filterEven(isEven: boolean) {
    return ProjectData.filter((project, index) => {
      return index % 2 === (isEven ? 0 : 1);
    });
  }
  return (
    <main className="flex flex-col p-10 justify-between w-[100%] h-[calc(100vh-85px)] ">
      <h1 className="text-4xl lg:text-5xl text-center font-semibold mb-5">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full overflow-auto bg-[rgba(0,0,0,.05)] gap-5 p-4">
        <ul className="list-none">
          {filterEven(true).map((project) => (
            <li key={project.id} className="mb-5">
              <ProjectCard
                title={project.name}
                description={project.description}
                repoLink={project.githubLink}
                deployLink={project.deployLink}
              ></ProjectCard>
            </li>
          ))}
        </ul>
        <ul className="list-none">
          {filterEven(false).map((project) => (
            <li key={project.id} className="mb-5">
              <ProjectCard
                title={project.name}
                description={project.description}
                repoLink={project.githubLink}
                deployLink={project.deployLink}
              ></ProjectCard>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
