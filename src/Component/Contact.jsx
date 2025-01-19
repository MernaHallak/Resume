import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <div className=" container mx-auto">
      <div id="contact" className="container mx-auto">
        <p className="text-mainColor pb-2">Contact</p>
        <h1 className="text-4xl font-semibold">
          Let’s Discuss Your <span className="text-mainColor">Project</span>
        </h1>
        <div className="flex justify-between mt-10 py-10">
          <div className="w-1/4 space-y-16">
            <div className="flex items-center gap-3">
              <IoCallOutline
                size={40}
                color="#7DE0EA"
                className="p-2  text-white rounded"
              />
              <div>
                <p>Call me</p>
                <p>+96396900000</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineMailOutline
                color="#7DE0EA"
                size={40}
                className="p-2  text-white rounded"
              />
              <div>
                <p>Email me</p>
                <p>example@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CiLocationOn
                size={40}
                color="#7DE0EA"
                className="p-2  text-white rounded"
              />
              <div>
                <p>Address</p>
                <p>Damascus,syria</p>
              </div>
            </div>
          </div>
          <form className="w-2/3 space-y-6">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Full name"
                className="w-[45%]  border-2 border-gray rounded-lg p-2 outline-none"
              />

              <input
                type="email"
                placeholder="Your email"
                className="w-[45%] border border-gray rounded-lg p-2 outline-none"
              />
            </div>
            <input
              type="number"
              placeholder="Phone number"
              className="w-full border border-gray rounded-lg p-2 outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full resize-none border border-gray rounded-lg p-2 outline-none"
              rows={5}
            ></textarea>
            <button className="rounded-lg bg-mainColor py-3 px-8 text-white bg-[#7DE0EA] text-white rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
