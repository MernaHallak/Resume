import React, { useContext } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Project = ({ image, title, desc }) => {
  // const {img}=useContext(Image)

  return (
    <div>
      <img src={image} alt="" className="w-full mb-3" />

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-md">{desc}</p>
        </div>
        <Link to="/project">
          <BsArrowUpRightCircle size={20} color="#7DE0EA" />
        </Link>
      </div>
    </div>
  );
};

export default Project;
