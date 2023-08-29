import React, { FunctionComponent, useEffect, useState } from "react";
import NavbarSideStyles from "./navbarSideStyles.module.css";

interface ISideProps {
  isLeftSide: boolean;
}
export const NavbarSides: FunctionComponent<ISideProps> = ({ isLeftSide }) => {
  return (
    <>
      {isLeftSide ? (
        <div className={NavbarSideStyles["left"]}></div>
      ) : (
        <div className={NavbarSideStyles["right"]}></div>
      )}
    </>
  );
};
