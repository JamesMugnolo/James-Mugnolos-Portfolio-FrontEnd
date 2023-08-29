import React, { FunctionComponent, useEffect } from "react";

interface IProjectCardProps {
  title: string;
  description: string;
  link: string;
}
export const ProjectCard: FunctionComponent<IProjectCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col justify-between bg-white p-5 min-h-[14.5rem]">
      <div>
        <h1 className="text-2xl lg:text-3xl font-semibold ">{title}</h1>
        <h3 className="text-lg font-normal mt-3 overflow-wrap break-words">
          {description}
        </h3>
      </div>
      <a
        className="text-xl duration-300 w-fit pt-2 text-gray-400 hover:text-black hover:scale-105"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        go to Repository
      </a>
    </div>
  );
};
