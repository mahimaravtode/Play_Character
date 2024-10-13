import React, { useEffect, useState } from "react";

import Card from "./Card";
import Cateories from "./Cateories";
import DiscordImg from "../../assets/discord.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import NoResultImg from "../../assets/NoResults.svg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {

  const [gameCount, setGameCount] = useState(0);
  const [playerCount, setPlayerCount] = useState(0);
  const [gameMasterCount, setGameMasterCount] = useState(0);

  const gameTarget = 42;
  const playerTarget = 149;
  const gameMasterTarget = 10;

  useEffect(() => {
    const totalSteps = 100;  
    const gameIncrement = gameTarget / totalSteps;
    const playerIncrement = playerTarget / totalSteps;
    const gameMasterIncrement = gameMasterTarget / totalSteps;

    let currentStep = 0;

    const h6timer = setInterval(() => {
      if (currentStep < totalSteps) {
        setGameCount((prev) => Math.min(prev + gameIncrement, gameTarget));
        setPlayerCount((prev) => Math.min(prev + playerIncrement, playerTarget));
        setGameMasterCount((prev) => Math.min(prev + gameMasterIncrement, gameMasterTarget));
        currentStep++;
      } else {
        clearInterval(h6timer);  
      }
    }, 25); 

    return () => clearInterval(h6timer);  
  }, []);

  return (
    <>
      <div>
        <div className="home_section ">
          <div className="overlay">
            <div className="max-w-screen-xl text-white pt-28 mx-auto px-4  lg:pl-5 md:pl-32 sm:px-6 ">
              <h3 className="md:text-4xl sm:2xl max-sm:text-center">
                Find Your Player Character Game!
              </h3>
              <p className="text-[#ffffffb3] md:leading-10 md:text-2xl max-sm:text-sm mt-5 font-[300] max-sm:text-center">
                Our focus on Players helps you find games that match your
                preferences and play style, optimizing <br /> the Table Top Role
                Playing Game (TTRPG) experience for everyone.
              </p>
              <div className="flex flex-col justify-between sm:flex-row items-center gap-4 sm:gap-8 mt-10">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md w-full sm:w-auto bg-blue hover:bg-blue-700 transition duration-200">
                  What's your experience level?
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md w-full sm:w-auto bg-blue hover:bg-blue-700 transition duration-200">
                  What genre of games are you interested in?
                </button>
              </div>

              <div className="mt-8 flex flex-col md:flex-row gap-5 rounded-md overflow-hidden">
                <select className="pl-4 py-3 lg:pr-8 bg-white text-[#3d3939ce]  outline-none border-r-[1px] rounded-md   w-full md:w-1/2">
                  <option value="0">Select your TTRPG experience level</option>
                  <option value="1">Select your TTRPG experience level</option>
                  <option value="2">Shiny - Never played TTRPG before</option>
                  <option value="3">Familiar - Played a game or two</option>
                  <option value="4">
                    Veteran - Played several games and genres
                  </option>
                </select>
                <select className="pl-4 py-3 lg:pr-8 bg-white text-[#3d3939ce]  outline-none  rounded-md w-full md:w-1/2">
                  <option value="0">Select your TTRPG genre preference</option>
                  <option value="1">Fantasy</option>
                  <option value="2">Sci-Fi</option>
                  <option value="3">Horror</option>
                  <option value="4">Historical</option>
                </select>
              </div>
             <div className="mt-16 flex sm:flex-row ">
                <div className="flex flex-col  pr-8 gap-2  border-r-[1px] border-[#5a5353ab]">
                  <h6 className="text-4xl">{Math.round(gameCount)}</h6>
                  <p className="text-xl font-[200]">Games</p>
                </div>
                <div className="flex flex-col px-8 pr-8 gap-2   border-r-[1px] border-[#5a5353ab]">
                  <h6 className="text-4xl">{Math.round(playerCount)}</h6>
                  <p className="text-xl font-[200]">Players</p>
                </div>
                <div className="flex flex-col px-8 gap-2 ">
                  <h6 className="text-4xl">{Math.round(gameMasterCount)}</h6>
                  <p className="text-xl font-[200]">Game Masters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  bg-[#f9f9f9] py-10">
          <h1 className="text-lightBlack mb-10 text-center text-3xl font-[300]">
            How PlayerCharacter.Games is different!
          </h1>
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <Card />
            </div>
            <div className="w-fit group mx-auto text-center">
              <button className="pt-5 text-blue rounded-md ">
                Join us on Discord and we'll get you in your game.
              </button>
              <div className="border-t-2 group-hover:w-full transition-all duration-500 border-blue  w-0"></div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl container mx-auto my-14 px-4">
          <h1 className="text-3xl md:text-4xl font-[300] text-[#333] max-sm:text-center">
            Popular TTRPG Game Categories
          </h1>
          <p className="text-md  w-full text-[#212529] sm:w-[85%] my-5  max-sm:text-center">
            With literally hundreds of role-playing systems available, it can be
            hard to find the right genre for your mood or interest. We've
            painstakingly categorized the TTRPG game landscape for GMs to assign
            a top-level category to games. Click on the categories below to find
            the right game for you; the numbers indicate how many games are
            posted in that category.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 mt-16  my-10">
            <Cateories />
          </div>
        </div>
        <div className="w-full min-h-[60vh] bg">
          <div className="overlay1 ">
            <div className="max-w-screen-xl px-8 md:px-16 md:mx-auto ">
              <div className="flex flex-col lg:flex-row py-28 gap-10">
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl mt-5 font-[300] text-white">
                    PCG is better with AlterEgo.
                  </h1>
                  <p className="text-md my-10 text-white font-[300]">
                    Finding the right game is not always easy. Simple matching
                    algorithms are often not enough. Player Character Games uses
                    an integrated Discord Server not just to help onboard new
                    players and Game Masters but to build rich profiles for
                    better player matching. Join our Discord Server to get
                    custom game recommendations and complete your matching
                    profile.
                  </p>
                  <div className="flex justify-center gap-2 group cursor-pointer rounded-sm text-white bg-[#5865f2] py-3 px-4 items-center">
                    <button className="">Join our AlterEgo Discord!</button>
                    <FaLongArrowAltRight className="text-xl ease-linear  transition-all duration-75 group-hover:block  hidden" />
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src={DiscordImg}
                    className="lg:w-[90%] sm:[40%] sm:mx-auto"
                    alt="Discord"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto my-20 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-xl md:text-2xl font-[300]">
              Recommended: These games match your Alter Ego Discord Profile
            </h1>
            <div className="flex items-center text-blue hover:text-black transition-all duration-300 gap-2 mt-4 md:mt-0">
              <button className="text-sm md:text-base">Game Finder</button>
              <IoIosArrowRoundForward className="text-xl" />
            </div>
          </div>
          <div className="w-24 md:w-28 mx-auto my-5">
            <img src={NoResultImg} alt="No Results" />
          </div>
          <h1 className="font-medium text-xl md:text-2xl text-[#212529] text-center">
            No Game Recommendations!
          </h1>
          <p className="text-center  my-5 text-[#212529] text-sm md:text-base">
            To receive game recommendations, you must have an Alter Ego Discord
            profile.
            <br />
            Register and complete your profile:{" "}
            <span className="text-blue text-[16px] md:text-[18px]">
              Alter Ego Discord
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
