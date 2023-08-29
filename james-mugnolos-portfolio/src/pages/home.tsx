import { FunctionComponent } from "react";

export const HomePage: FunctionComponent = () => {
  return (
    <>
      <main className="h-full w-full text-center md:text-left fixed md:ml-10 top-[calc(50%-80px)]">
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium ">
            hello there
          </h3>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">
            Im James Mugnolo
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#4071f4] font-normal">
            Software Engineer
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl mt-1 font-medium">
            From Illinois
          </h3>
        </div>
      </main>
    </>
  );
};
