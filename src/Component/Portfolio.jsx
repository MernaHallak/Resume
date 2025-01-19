import React, { useContext } from "react";
import { MdArrowOutward } from "react-icons/md";
import Project from "./Project";
import ImageProject from "../assets/projects.png";

const Portfolio = ({isHome}) => {
  return (
    <div id="projects" className="mb-24 container mx-auto">
      <p className="text-mainColor font-semibold mb-2">Portfolio</p>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold mb-10">
          My Creative Works <br /> Latest
          <span className="text-mainColor"> Projects</span>
        </h1>
        <button className="flex items-center bg-[#7DE0EA] text-white p-2 px-3 rounded">
          View Github
          <div>
            <MdArrowOutward />
          </div>
        </button>
      </div>
      <div className="grid grid-rows-2 grid-cols-3	gap-8 ">
      {isHome ? <>  <Project
          image={ImageProject}
          title="Educational Platform"
          desc="Html-Css3-Vanilla javscript"
        />
        <Project
          image={ImageProject}
          title="Educational Platform"
          desc="Html-Css3-Vanilla javscript"
        />
        <Project
          image={ImageProject}
          title="Educational Platform"
          desc="Html-Css3-Vanilla javscript"
        />
        <Project
          image={ImageProject}
          title="Educational Platform"
          desc="Html-Css3-Vanilla javscript"
        />
        <Project
          image={ImageProject}
          title="Educational Platform"
          desc="Html-Css3-Vanilla javscript"
        />
        <Project
          image={ImageProject}
          title="Educational Platform"
          desc="Html-Css3-Vanilla javscript"
        /></> : <>  <Project
        image={ImageProject}
        title="Educational Platform"
        desc="Html-Css3-Vanilla javscript"
      />
      <Project
        image={ImageProject}
        title="Educational Platform"
        desc="Html-Css3-Vanilla javscript"
      />
      <Project
        image={ImageProject}
        title="Educational Platform"
        desc="Html-Css3-Vanilla javscript"
      />
   </>}
      </div>
    </div>
  );
};

export default Portfolio;
