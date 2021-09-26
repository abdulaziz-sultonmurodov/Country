import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Search from "./Search";

const Header = ({ url, setSearchWord }) => {
  let screenWidth = window.screen.width;

  return (
    <header className="flex flex-col">
      <nav className="flex flex-row items-center justify-between px-4 sm:px-10 py-5">
        <Link to="/">
          <img
            className="w-48 cursor-pointer"
            src="https://rs.school/images/rs_school_js.svg"
            alt="Logo"
          />
        </Link>
        {screenWidth > 640 ? (
          <Search url={url} setSearchWord={setSearchWord} />
        ) : (
          <span className="hidden"></span>
        )}
        <Dropdown />
      </nav>
      {screenWidth <= 640 ? (
        <Search url={url} setSearchWord={setSearchWord} />
      ) : (
        <span className="hidden"></span>
      )}
    </header>
  );
};

export default Header;
