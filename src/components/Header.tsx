import React from "react";
import { HiOutlineMoon } from "react-icons/hi";

const Header = () => {
  return (
    <header className="header">
      <nav className="container flex flex-ai-c flex-jc-sb">
        <h1 className="header__text">Where in the world?</h1>
        <button className="button flex flex-ai-c flex-jc-c">
          <HiOutlineMoon />
          <span>Dark Mode</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
