import { useContext, useState } from "react";
import { FaMoon } from "react-icons/fa";
// import { Link } from "react-scroll";
import { IoIosSunny } from "react-icons/io";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";

const NavBar = ({ isDarkMode, changeTheme }) => {
  // const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const links = ["hero", "about", "education", "projects", "contact"];
  return (
    <div
      className={`fixed z-50 inset-x-0 top-0 px-[10vw] flex justify-between align-center py-5 font-poppins 
       ${isDarkMode ? "bg-[#1B2431] text-white" : "bg-white text-black"} `}
    >
      {/* isDarkMode ? "bg-[#1B2431]" : "bg-white" */}
      {/* ${
        isDarkMode ? "bg-[#1B2431]" : "bg-white"
      } */}
      <h1 className="text-2xl font-semibold">
        <Link to={"/"}>Merna</Link>
      </h1>
      <ul className="flex gap-x-3 align-center">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a
                href={`#${link}`}
                spy={true}
                activeClass="text-red-500 font-bold"
                className=" capitalize cursor-pointer hover:text-red-500"
                smooth={true}
                duration={500}
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
      {/* {isDarkMode ? (
        <IoIosSunny size={30} className="text-white" onClick={toggleTheme} />
      ) : (
        <FaMoon onClick={toggleTheme} />
      )} */}
      {isDarkMode ? (
        <IoIosSunny
          size={30}
          className="text-white cursor-pointer"
          onClick={() => changeTheme((prev) => !prev)}
        />
      ) : (
        <FaMoon
          size={30}
          className="cursor-pointer"
          onClick={() => changeTheme((prev) => !prev)}
        />
      )}
    </div>
  );
};

export default NavBar;
