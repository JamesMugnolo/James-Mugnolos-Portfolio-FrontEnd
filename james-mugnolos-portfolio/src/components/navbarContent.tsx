import { FunctionComponent } from "react";
import { NavLink } from "./navLink";
export const NavbarContent: FunctionComponent = () => {
  return (
    <ul
      className="flex flex-col gap-6 text-2xl sm:text-3xl md:flex-row md:text-xl lg:gap-12 justify-between justify-center items-center text-white rounded-full lg:text-2xl 
          font-normal"
    >
      <NavLink to={"/Home"}>Home</NavLink>
      <NavLink to={"/About"}>About</NavLink>
      <NavLink to={"/Skills"}>Skills</NavLink>
      <NavLink to={"/Projects"}>Projects</NavLink>
      <NavLink to={"/Contact"}>Contact</NavLink>
      <li>
        <button className=" hover:scale-125 hover:bg-indigo-600 duration-300 bg-[#4071f4] py-3 px-5 md:text-2xl lg:text-3xl tracking-wide rounded-md font-bold text-white md:mr-10">
          Resume
        </button>
      </li>
    </ul>
  );
};
