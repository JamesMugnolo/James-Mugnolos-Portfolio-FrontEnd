import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent } from "react";

interface IProjectCardProps {
  title: string;
  description: string;
  repoLink: string;
  deployLink: string | null;
}
export const ProjectCard: FunctionComponent<IProjectCardProps> = ({
  title,
  description,
  repoLink,
  deployLink,
}) => {
  return (
    <div className="flex flex-col justify-between bg-white p-5 min-h-[14.5rem]">
      <div>
        <h1 className="text-2xl lg:text-3xl font-semibold ">{title}</h1>
        <h3 className="text-lg font-normal mt-3 overflow-wrap break-words">
          {description}
        </h3>
      </div>
      <div className="flex items-center mt-2">
        <a
          className="text-xl duration-300 text-center  w-fit h-fit text-gray-400 hover:text-black underline hover:scale-105"
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
          <FontAwesomeIcon
            icon={faUpRightFromSquare}
            className="text-sm ml-[.35rem]"
          />
        </a>
        <div className="border-gray-400 w-[1px] h-full border-x-2 mx-3 my-1"></div>
        {deployLink != null ? (
          <a
            className="text-xl text-center duration-300 w-fit h-fit text-gray-400 hover:text-black underline hover:scale-105"
            href={deployLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Site
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="text-sm ml-[.25rem]"
            />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
