import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
const Footer = ({ isDarkMode }) => {
  return (
    <div
      className={`${isDarkMode ? "bg-[#1B2431] text-white" : "bg-white text-black"} py-5`}
    >
      <div className="container mx-auto">
        <hr className="text-gray" />
        <div className="flex items-center justify-between pt-4 ">
          <p>@ 2024. All Rights Reserved</p>
          <p>Develpoment by Lorina</p>
          <div className="flex items-center gap-2">
            <FaFacebookF className="text-white p-1 rounded-full bg-mainColor" />
            <FaTwitter className="text-white p-1 rounded-full bg-mainColor" />
            <LiaLinkedinIn className="text-white p-1 rounded-full bg-mainColor" />
            <FaInstagram className="text-white p-1 rounded-full bg-mainColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
