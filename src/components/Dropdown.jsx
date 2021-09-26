import React, { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const openLanguage = () => setOpen(!open);

  // eslint-disable-next-line
  const [language, setLanguage] = useState("En");

  const handleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    window.location.reload();
  };
  const defaultLang = localStorage.getItem("language");
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={openLanguage}
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {defaultLang ? defaultLang : language}

          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={
          open
            ? "z-40 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            : "hidden"
        }
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div role="none">
          <div
            onClick={() => handleLanguage("En")}
            className="text-gray-700 block px-4 cursor-pointer py-2 text-sm hover:bg-blue-500 hover:text-white"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
          >
            En
          </div>
          <div
            onClick={() => handleLanguage("Ru")}
            className="text-gray-700 block px-4 cursor-pointer py-2 text-sm hover:bg-blue-500 hover:text-white"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
          >
            Ru
          </div>
          <div
            onClick={() => handleLanguage("Uz")}
            className="text-gray-700 block px-4 cursor-pointer py-2 text-sm hover:bg-blue-500 hover:text-white"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-2"
          >
            Uz
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
