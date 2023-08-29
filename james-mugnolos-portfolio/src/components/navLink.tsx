import React, { FunctionComponent } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { To } from "react-router-dom";

interface ILinkProps {
  to: To;
  children: string;
}
export const NavLink: FunctionComponent<ILinkProps> = ({ to, children }) => {
  const fullPath = useResolvedPath(to);
  const isActive = useMatch({ path: fullPath.pathname, end: true });

  return (
    <li
      className={
        isActive
          ? "flex grow justify-center h-full items-center"
          : "flex grow justify-center h-full items-center hover:scale-110 duration-300"
      }
    >
      <Link
        to={to}
        className={
          isActive
            ? "text-black scale-135 font-semibold px-2 duration-300"
            : "text-black duration-300"
        }
      >
        {children}
      </Link>
    </li>
  );
};
