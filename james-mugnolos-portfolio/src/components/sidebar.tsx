import { FunctionComponent } from "react";
import { NavbarContent } from "./navbarContent";
import { useViewport } from "../hoooks/customVeiwportHook";
interface ISidebarProps {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
}
export const Sidebar: FunctionComponent<ISidebarProps> = ({
  isOpen,
  setIsOpen,
}) => {
  function closeSidebar() {
    setIsOpen(false);
  }
  const { width } = useViewport();
  const breakpoint = 768;
  return (
    <>
      {width > breakpoint ? closeSidebar() : null}
      <div
        className={`fixed z-40 h-full w-full bg-[rgba(0,0,0,.6)] ease-in-out duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
        onClick={closeSidebar}
      >
        <div
          className={`fixed top-0 right-0 h-full w-[60%] bg-[linear-gradient(to_left,_#eff8ff,_#eaf5ff,_#e5f1ff,_#e1edff,_#dee9ff);] ease-in-out duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={closeSidebar}
        >
          <h1 className="flex text-4xl sm:text-5xl justify-center pt-5 pb-3 mb-5 font-normal mx-8 text-[#4071f4] border-b-2 border-[#4071f4]">
            portfolio
          </h1>
          <NavbarContent></NavbarContent>
        </div>
      </div>
    </>
  );
};
