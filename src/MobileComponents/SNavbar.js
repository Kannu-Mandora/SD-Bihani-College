import React from "react";
import Logo from "../jsx/Logo";
import Hamburger from "../jsx/Hamburger";

function SNavbar() {
  return (
    <>
      <div className="SNavbar shadow-md flexCenter">
        <Logo className="py-3" />
        <Hamburger className="" />
      </div>
    </>
  );
}

export default SNavbar;
