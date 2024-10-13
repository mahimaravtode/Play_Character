import React from "react";
import About1Img from "../../assets/About1.jpg";
import { FaFacebookF, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full min-h-screen mt-20">
      <div className="xl:max-w-screen-xl  py-5 w-full  lg:px-0 px-10 mx-auto flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3 w-full  ">
          <h1 className="text-3xl text-center md:text-left">
            About PlayerCharacter.Games
          </h1>
          <h2 className="text-[#808080] text-xl mt-2 font-light text-center md:text-left">
            What is Player Character Games?
          </h2>
          <div className="w-full rounded-md shadow-md overflow-hidden my-10">
            <div className="w-full h-[40vh]">
              <img
                src={About1Img}
                className="w-full h-full object-cover"
                alt="About PlayerCharacter.Games"
              />
            </div>
            <div className="p-8">
              <div className="my-6">
                <h1 className="text-[#333] text-2xl">Our Mission</h1>
                <p className="my-3 tracking-wide text-[16px] leading-relaxed text-[#808080]">
                  At Player Character Games, our mission is to revolutionize the
                  Tabletop Role-Playing Game (TTRPG) experience. Our platform is
                  crafted to ensure that players and game masters are matched
                  based on their preferences, ensuring a harmonious gaming
                  experience. As players engage more with the platform, Player
                  Character Games will refine its recommendations, adapting to
                  individual experiences, games played, and evolving play
                  styles.
                </p>
              </div>
              <div className="my-6">
                <h1 className="text-[#333] text-2xl">A Lifelong Passion</h1>
                <p className="my-3 tracking-wide text-[16px] leading-relaxed text-[#808080]">
                  Our love for tabletop role-playing games runs deep. As
                  long-time role players, we're thrilled by the evolution of
                  TTRPGs and the new dimensions they're exploring. Yet, amidst
                  this evolution, we remain steadfast in our belief that the
                  true magic of the game emerges when a synergistic group brings
                  their collective passion, emotion, and unique play styles 'to
                  the table'.
                </p>
              </div>
              <div className="my-6">
                <h1 className="text-[#333] text-2xl">Supporting New Players</h1>
                <p className="my-3 tracking-wide text-[16px] leading-relaxed text-[#808080]">
                  Embracing newcomers with open arms, we at Player Character
                  Games feel a unique buzz with each new addition. Understanding
                  the invaluable spark each novice player brings, we're driven
                  to deliver an impeccable, tailored experience from the get-go.
                  Our vision is clear and heartfelt: from their inaugural game,
                  we aspire for every entrant to not only immerse in the allure
                  of TTRPGs but also to blossom into enduring advocates and
                  stalwarts of our cherished community.
                </p>
              </div>
              <div className="my-6">
                <h1 className="text-[#333] text-2xl">World Building</h1>
                <p className="my-3 tracking-wide text-[16px] leading-relaxed text-[#808080]">
                  There's a special excitement at Player Character Games when it
                  comes to homebrew content and the boundless creativity game
                  masters pour into their unique worlds. Crafted with precision,
                  passion, and a touch of magic, these custom realms are a
                  testament to the limitless potential of TTRPGs. We're eager to
                  elevate these creations, assisting game masters in finding
                  like-minded enthusiasts who resonate with their vision.
                  Through our platform, we aim to connect these imaginative
                  storytellers with players ready to embark on adventures,
                  breathing life into every meticulously designed scenario and
                  landscape.
                </p>
              </div>
              <div className="my-6">
                <h1 className="text-[#333] text-2xl">Our Pledge</h1>
                <p className="my-3 tracking-wide text-[16px] leading-relaxed text-[#808080]">
                  Every dice roll, every imagined landscape, and every
                  character's journey resonates with us deeply. Player Character
                  Games is more than a platform—it's a reflection of our passion
                  for the TTRPG universe. We're here to champion both the
                  seasoned game master, pouring heart and soul into their
                  homebrew worlds, and the eager player, seeking that perfect
                  adventure. By fostering these connections and celebrating the
                  diverse tapestry of play styles and narratives, we aim to
                  enrich the TTRPG experience for all. Our promise is to stand
                  by our community, ensuring that every tale spun and every
                  quest undertaken is nothing short of extraordinary.
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
  );
};

export default About;
