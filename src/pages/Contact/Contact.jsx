import React from "react";
import hoverImage from "../../assets/bgImg2.jpg";
import { FaFacebookF, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import SeerImg from "../../assets/Seer.png";
import discordLogo from "../../assets/discord-logo.png";
import facebookLogo from "../../assets/facebook-logo.png";
const Contact = () => {
  return (
    <div className="w-full min-h-screen mt-20">
      <div className="xl:max-w-screen-xl  py-5 w-full  lg:px-0 px-10 mx-auto flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3 w-full  ">
          <h1 className="text-3xl text-center md:text-left">
            Contact Us | PlayerCharacter.Games
          </h1>
          <h2 className="text-[#808080] text-xl mt-2 font-light text-center md:text-left">
            The Seer knows all, but sometimes needs a little reminder.
          </h2>
          <div className="w-full rounded-md shadow-md overflow-hidden my-10">
            <div className="w-full h-[40vh]">
              <img
                src={hoverImage}
                className="w-full h-full object-cover"
                alt="About PlayerCharacter.Games"
              />
            </div>
            <div className="p-8">
              <div className="my-6">
                <div className="flex items-center gap-3">
                  <img src={SeerImg} className="w-8" alt="" />
                  <h1 className="text-[#333] text-2xl">
                    Getting in touch with the Player Character Games Team
                  </h1>
                </div>
                <p className="my-3 tracking-wide text-[16px] leading-relaxed text-[#808080]">
                  We want your gaming experience to be awesome . If you have
                  issues of any kind please don't hesitate to contact us.
                </p>
              </div>
              <div className="my-8">
              <h1 className="text-[#333] text-2xl">
              The Seer's Help Desk  
                  </h1>
                <p className="my-3 tracking-wide text-[16px] leading-relaxed text-[#808080]">
                  The Seer is our Oracle of all things Player Character Games
                  and is actually a real, physical entity, not one of those new
                  fangled constructs.
                </p>
              </div>
              <span className="text-[#0D6EFD]  cursor-pointer  hover:text-[#333]">
                Consult The Seer; submit a Support Request and we'll get right
                on your issue or concern.
              </span>
              <div className="my-8">
                <div className="flex items-center gap-3">
                  <img src={discordLogo} className="w-8" alt="" />
                  <h1 className="text-[#333] text-2xl">Discord</h1>
                </div>
                <p className="my-3 tracking-wide text-[16px] leading-relaxed text-[#808080]">
                  Our AlterEgo Discord Server is the best place to go deep on
                  Player Character Games. It's a growing community and our team
                  of support monks are dedicated to help you get started or
                  solve your burning questions.
                </p>
              </div>
              <span className="text-[#0D6EFD]  cursor-pointer  hover:text-[#333]">
                Join us on Discord and we'll help you with your game questions
                or issues.
              </span>
              <div className="my-8">
                <div className="flex items-center gap-3">
                  <img src={facebookLogo} className="w-8" alt="" />
                  <h1 className="text-[#333] text-2xl">Facebook</h1>
                </div>
                <p className="my-3 tracking-wide text-[16px] leading-relaxed text-[#808080]">
                  You can also reach us on Facebook Messenger.
                </p>
              </div>
              <span className="text-[#0D6EFD]   cursor-pointer hover:text-[#333]">
                Join us on Facebook and we'll help you with your game questions
                or issues.
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full lg:px-0 px-5">
          <div className="lg:float-right text-center">
            <button className="px-5 rounded-md py-3 text-[14px] text-white bg-[#333]">
              Updated: 13 June 2024
            </button>
          </div>

          <div className="mt-6 md:mt-24">
            <Link to={"/contact-us"}>
              <div className="bg-white hoverImage transition-all duration-300 shadow-md py-5 px-4 rounded-md">
                <h4 className="font-semibold">Contact us</h4>
                <button className="px-5 mt-3 rounded-md py-3 text-[14px] text-[#888] bg-[#f0f0f0]">
                  13 June 2024
                </button>
              </div>
            </Link>
          </div>

          <Link to={"/about-us"}>
            <div className="my-4 md:my-6 shadow-md py-5 px-4 rounded-md bg-white hoverImage transition-all duration-300">
              <h4 className="font-semibold">About PlayerCharacter.Games</h4>
              <button className="px-5 mt-3 rounded-md py-3 text-[14px] text-[#888] bg-[#f0f0f0]">
                13 June 2024
              </button>
            </div>
          </Link>

     
          <Link to={"/what-are-ttrgs"}>
        
        <div className="my-4 md:my-6 shadow-md py-5 px-4 rounded-md bg-white hoverImage transition-all duration-300">
            <h4 className="font-semibold">
              What are TTRPGs? | PlayerCharacter.Games
            </h4>
            <button className="px-5 mt-3 rounded-md py-3 text-[14px] text-[#888] bg-[#f0f0f0]">
              13 June 2024
            </button>
          </div>
        </Link>

          <Link to={"/gamemaster-help"}>
          <div className="my-4 md:my-6 shadow-md py-5 px-4 rounded-md bg-white hoverImage transition-all duration-300">
            <h4 className="font-semibold">Game Master setup Help</h4>
            <button className="px-5 mt-3 rounded-md py-3 text-[14px] text-[#888] bg-[#f0f0f0]">
              13 June 2024
            </button>
          </div>
          </Link>

          <div className="mt-6">
            <h4 className="font-semibold">Social Profiles</h4>
            <div className="flex mt-4 gap-5 items-center text-[#888] text-2xl">
              <FaFacebookSquare />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
