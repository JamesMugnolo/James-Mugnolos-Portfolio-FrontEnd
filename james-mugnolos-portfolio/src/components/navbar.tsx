import { FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavbarContent } from "./navbarContent";
import { useViewport } from "../hoooks/customVeiwportHook";
import { Sidebar } from "./sidebar";
export const Navbar: FunctionComponent = () => {
  const { width } = useViewport();
  const breakpoint = 768;

  const [isOpen, setIsOpen] = useState(false);
  function openSidebar() {
    setIsOpen(true);
  }

  return (
    <>
      {width > breakpoint ? (
        ""
      ) : (
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      <nav className="list-none flex flex-row justify-between pt-5 items-center h-[85px]">
        <h1 className="ml-10 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#4071f4]">
          portfolio
        </h1>
        {width < breakpoint ? (
          <div
            className="mr-10 hover:cursor-pointer hover:scale-125 duration-300"
            onClick={openSidebar}
          >
            <FontAwesomeIcon icon={faBars} color={"#4071f4"} size="xl" />
          </div>
        ) : (
          <NavbarContent />
        )}
      </nav>
    </>
  );
};
