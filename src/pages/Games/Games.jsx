import React from 'react'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import bgImg3 from '../../assets/bgImg3.jpg'

const Games = () => {
  return (
    <div className="w-full min-h-screen mt-20">
    <div className="xl:max-w-screen-xl  py-5 w-full  lg:px-0 px-10 mx-auto flex flex-col lg:flex-row gap-10">
      <div className="lg:w-2/3 w-full  ">
        <h1 className="text-3xl text-center md:text-left">
          What are TTRPGs? | PlayerCharacter.Games
        </h1>
        <h2 className="text-[#808080] text-xl mt-2 font-light text-center md:text-left">
        Just as importantly, how do you play them?
        </h2>
        <div className="w-full rounded-md shadow-md overflow-hidden my-10">
          <div className="w-full h-[40vh]">
            <img
              src={bgImg3}
              className="w-full h-full object-cover"
              alt="About PlayerCharacter.Games"
            />
          </div>
          <div className="p-8">
            <div className="my-6">
              <h1 className="text-[#333] text-2xl">What are Table Top Role Playing Games (TTRPGs)?</h1>
              <p className="my-3 tracking-wide text-[16px] leading-relaxed text-[#808080]">
              Table Top Role Playing Games (TTRPGs) are a unique blend of storytelling, strategy, and chance. Unlike board games, which are typically bound by strict rules and objectives, or video games, which are defined by programmed logic and graphics, TTRPGs allow for imaginative freedom, creativity, and flexibility. Players assume the roles of characters in a fictional setting, following narratives guided by a story teller, often called a Game Master (GM). People love TTRPGs because they offer social interaction, unlimited creativity, and the thrill of unpredictable outcomes. They are about living out stories, facing challenges, and making meaningful decisions that shape the narrative.
              </p>
            </div>
            <div className="my-6">
              <h1 className="text-[#333] text-2xl">How to Play TTRPGs</h1>
              <p className="my-3 tracking-wide text-[16px] leading-relaxed text-[#808080]">
              At the heart of every TTRPG is the Game Master (GM). The GM crafts the world, manages the rules, and acts as the main narrator. As a player, you will create and control a character, known as your Player Character (PC). Your PC will interact with the world, the characters in it (both player-controlled and those controlled by the GM), and play a pivotal role in the unfolding story. The beauty of TTRPGs is the vast array of choices available to players. While dice rolls might introduce an element of chance, your decisions as a player are paramount, making every session a unique experience.
              </p>
            </div>
            <div className="my-6">
              <h1 className="text-[#333] text-2xl">Modern Tools for Online TTRPGs</h1>
              <p className="my-3 tracking-wide text-[16px] leading-relaxed text-[#808080]">
              The cherished pen and paper roots of TTRPGs have witnessed a digital evolution in recent years. Leveraging tools originally designed for business communications and video gaming, the intimate and tactile experience of traditional TTRPGs has been recreated in the online space.
              </p>
            </div>
            <div className="my-6">
              <h1 className="text-[#333] text-2xl">Popular TTRPG Systems Include</h1>
              <p className="my-3 tracking-wide text-[16px] leading-relaxed text-[#808080]">
              Delving into established universes is a fantastic way for newcomers to get a taste of TTRPGs. Here are some renowned systems to consider: 
              </p>
            </div>
            <div className="my-6">
              <h1 className="text-[#333] text-2xl">How to Start Playing with Player Character Games</h1>
              <p className="my-3 tracking-wide text-[16px] leading-relaxed text-[#808080]">
              Starting your TTRPG journey might seem daunting, but Player Character Games is here to guide you. We provide a state-of-the-art matching service, connecting you with the right players and GMs. Our platform is designed to help beginners dive in with ease, ensuring your first steps into this magical world are as smooth as possible. Join us, and embark on your Player Character's journey today!
              </p>
            </div>
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

    <Link to={'/about-us'}>
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
  )
}

export default Games