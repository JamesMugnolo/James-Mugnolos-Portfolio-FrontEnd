import { FunctionComponent } from "react";

export const HomePage: FunctionComponent = () => {
  return (
    <>
      <main className="h-full w-full fixed top-[calc(50%-80px)] left-[50%]">
        <div className="border-[#4071f4] border-[4px] md:border-[6px] lg:border-[6px] rounded-xl w-fit p-4 translate-x-[-50%] flex justify-center flex-col items-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium ">
            hello there
          </h3>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            Im James Mugnolo
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#4071f4] font-normal">
            Software Engineer
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-44xl lg:text-5xl mt-4 font-medium">
            From Illinois
          </h3>
        </div>
      </main>
    </>
  );
};
