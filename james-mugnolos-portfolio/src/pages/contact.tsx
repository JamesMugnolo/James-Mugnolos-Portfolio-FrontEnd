import { FunctionComponent } from "react";

export const ContactPage: FunctionComponent = () => {
  return (
    <main className="flex flex-col justify-center items-center w-[100%] h-[calc(100vh-85px)] pb-12">
      <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-black font-light">
        mugnolojames@gmail.com
      </h1>
      <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-black font-light">
        (630)-956-6122
      </h2>
      <a
        href="https://www.linkedin.com/in/james-mugnolo-130312160/"
        className="bg-[#4071f4] text-[1rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] mt-5 font-semibold rounded-lg text-white px-5 py-2 hover:scale-110 hover:bg-indigo-600 duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>LinkedIn</button>
      </a>
    </main>
  );
};
