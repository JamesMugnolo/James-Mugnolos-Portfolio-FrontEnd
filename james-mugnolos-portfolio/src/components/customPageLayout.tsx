import React, { FunctionComponent } from "react";
import LayoutStyles from "./customPageLayout.module.css";

export const CustomPageLayout: FunctionComponent = () => {
  return (
    <div className="h-[100%] w-full relitive fixed mt-28">
      <div className=" flex h-[19%] shadow-2xl">
        <div className={LayoutStyles["left-rectangle"]}></div>
        <div className={LayoutStyles["divider"]}></div>
        <div className={LayoutStyles["right-rectangle"]}></div>
      </div>
      <div className=" flex h-[19%] my-16 shadow-2xl">
        <div className={LayoutStyles["left-rectangle"]}></div>
        <div className={LayoutStyles["divider"]}></div>
        <div className={LayoutStyles["right-rectangle"]}></div>
      </div>
      <div className=" flex h-[19%] shadow-2xl">
        <div className={LayoutStyles["left-rectangle"]}></div>
        <div className={LayoutStyles["divider"]}></div>
        <div className={LayoutStyles["right-rectangle"]}></div>
      </div>
    </div>
  );
};

//could componatise this more but im choosing not to.
