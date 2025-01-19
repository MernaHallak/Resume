import React from "react";
import imageAbout from "../assets/about.png";
const About = ({ skills }) => {
  return (
    <div
      id="about"
      className="container mx-auto flex justify-between items-center"
    >
      <div className="w-1/2">
        <img className="scale-90" src={imageAbout} alt="" />
      </div>
      <div className="w-1/2 space-y-5">
        <h1 className="text-4xl font-semibold">About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        {skills.map((ele, index) => {
          return (
            <div className="w-full" key={index}>
              <div>
                <label className="text-2xl font-semibold ">{ele.name}</label>
              </div>
              <progress
                className="progress w-full appearance-none bg-gray-200 rounded-lg"
                value={ele.rate}
                max={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
