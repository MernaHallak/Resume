import React, { useState } from "react";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import projectPrev from "../assets/projects.png";
import bar from "../assets/bar.png";
import { MdArrowOutward } from "react-icons/md";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Portfolio from "../Component/Portfolio";
const ProjectPage2 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <NavBar isDarkMode={isDarkMode} changeTheme={setIsDarkMode} />
      <div className="mt-[100px] w-[80vw] mx-auto font-poppins">
        <div className="flex space-x-5 mb-10">
          <img src={projectPrev} alt="" className="w-1/2" />
          <div className="w-1/2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-lg mb-2">Educational Platform</p>
                <p className="text-sm text-gray mb-2">12-5-2024</p>
              </div>
              <Link to="/project">
                <BsArrowUpRightCircle size={20} color="#7DE0EA" />
              </Link>
            </div>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra Lorem ipsum dolor sit amet consectetur.
              Tristique amet
            </p>
            <p className="mb-2">Basic Languages : Html5 , Css , Javascript</p>
            <p className="mb-2">Framework : Bootstrap</p>
            <p className="mb-2">Libraries : React.js</p>
            <button className="flex items-center bg-[#7DE0EA] text-white p-2 px-3 rounded">
              View Github
              <div>
                <MdArrowOutward />
              </div>
            </button>
          </div>
        </div>
        <img src={bar} alt="" className="mb-10" />
        <Portfolio isHome={false} />
      </div>
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

export default ProjectPage2;
