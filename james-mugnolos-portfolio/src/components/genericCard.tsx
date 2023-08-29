import React, { FunctionComponent } from "react";

interface ICardProps {
  title: string;
  description: string;
  subDescription?: string;
}
export const GenericCard: FunctionComponent<ICardProps> = ({
  title,
  description,
  subDescription,
}) => {
  return (
    <div className="bg-[rgba(0,0,0,.05)] p-3 flex grow">
      <div className="flex flex-col grow bg-white p-2">
        <h1 className="md:text-xl lg:text-4xl font-semibold self-center">
          {title}
        </h1>

        <div className="md:text-[1.05rem] lg:text-2xl font-light h-full text-center flex  flex-col justify-center">
          <h3>{description}</h3>
          <h3>{subDescription}</h3>
        </div>
      </div>
    </div>
  );
};
