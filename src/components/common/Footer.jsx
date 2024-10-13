import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import FooterImg from "../../assets/FooterLogo.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#303030]">
        <div className="w-full border-b border-zinc-500">
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center">
            <div className="flex-1 lg:border-r lg:border-zinc-500 py-4 flex justify-center lg:justify-start">
              <img src={FooterImg} className="w-72" alt="Footer" />
            </div>
            <div className="flex justify-center items-center gap-5 px-4 py-4 lg:py-0 lg:px-0">
              <FaFacebookF className="text-[#808080] text-xl hover:text-white" />
              <FaInstagram className="text-[#808080] text-xl hover:text-white" />
            </div>
          </div>
        </div>

        <div className="w-full border-b border-zinc-500 py-16">
          <div className="max-w-screen-xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 md:gap-3 gap-10">
              <div className="flex flex-col gap-5">
                <h1 className="text-white font-[300] text-xl">
                  Getting Started
                </h1>
                <div className="flex flex-col gap-2">
                  <h6 className="text-md cursor-pointer text-[#c0c0c0] relative hover:text-white">
                    About Player
                  </h6>
                  <h6 className="text-md cursor-pointer text-[#c0c0c0] relative hover:text-white">
                    Game Master Setup
                  </h6>
                  <h6 className="text-md cursor-pointer text-[#c0c0c0] relative hover:text-white">
                    FAQs & Help
                  </h6>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-white font-[300] text-xl">PCG & TTRPGs</h1>
                <div className="flex flex-col gap-2">
                  <Link to={"/gamefinder"}  className="text-md cursor-pointer text-[#c0c0c0] relative hover:text-white">
                  Game Finder
                  </Link>
                 
                  <h6 className="text-md cursor-pointer text-[#c0c0c0] relative hover:text-white">
                    What are TTRPGs?
                  </h6>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-white font-[300] text-xl">Helpful Links</h1>
                <div className="flex flex-col gap-2">
                  <h6 className="text-md cursor-pointer w-fit afterContent1 text-[#c0c0c0] relative hover:text-white">
                    Contact Us
                  </h6>
                  <h6 className="text-md cursor-pointer text-[#c0c0c0] relative hover:text-white">
                    Privacy Policy
                  </h6>
                  <h6 className="text-md cursor-pointer text-[#c0c0c0] relative hover:text-white">
                    Terms of Service
                  </h6>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-white font-[300] text-xl">Account</h1>
                <div className="flex flex-col gap-2">
                  <h6 className="text-md cursor-pointer text-[#c0c0c0] relative hover:text-white">
                    Log In
                  </h6>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <MdOutlineMailOutline className="text-white font-[300] text-2xl" />
                  <h1 className="text-white font-[300] text-md">
                    Sign Up For our Newsletter
                  </h1>
                </div>
                <p className="text-sm my-2 text-[#c0c0c0]">
                  Weekly news, updates, and announcements about Player Character
                  Games and Table Top RPGs.
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Enter your Email address"
                    className="bg-[#262626] border-none outline-none rounded-sm py-3 px-2 flex-1"
                  />
                  <button className="bg-blue hover:bg-white transition-all duration-500 hover:text-black text-white p-3 rounded-sm">
                    <IoMdArrowForward className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8">
          <h1 className="text-center text-md font-[300] text-[#c0c0c0]">
            © 2024  <span className="text-white"> Player Character Games</span> All Rights Reserved. |{" "}
            <span className="relative cursor-pointer hover:text-white">
              Feature Requests
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
