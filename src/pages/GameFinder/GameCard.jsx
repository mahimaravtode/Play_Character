import React from "react";
import GameCard1 from "../../assets/GameCard1.jpg";
import GameCard2 from "../../assets/GameCard2.jpg";
import Img2 from "../../assets/Img2.png";
import { MdAccessTime, MdOutlineLibraryAdd, MdOutlineLoyalty } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

const GameCard = () => {
  const data = [
    {
      Img1: GameCard1,
      Icon: Img2,
      Title: "Runecairn: Wardensaga | A Soulslike Adventure",
      GameMaster: "TheGiftOfGabes",
      FanBase: "$20",
      Library: "Cairn",
      Loyalty: "Campaign",
      Time: "Wednesday,October 9,2024 at 10.30 PM IST",
      id: 1,
    },
    {
      Img1: GameCard2,
      Icon: Img2,
      Title: "Runecairn: Wardensaga | A Soulslike Adventure",
      GameMaster: "TheGiftOfGabes",
      FanBase: "$20",
      Library: "Cairn",
      Loyalty: "Campaign",
      Time: "Wednesday,October 9,2024 at 10.30 PM IST",
      id: 2,
    },
    {
      Img1: GameCard2,
      Icon: Img2,
      Title: "Runecairn: Wardensaga | A Soulslike Adventure",
      GameMaster: "TheGiftOfGabes",
      FanBase: "$20",
      Library: "Cairn",
      Loyalty: "Campaign",
      Time: "Wednesday,October 9,2024 at 10.30 PM IST",
      id: 3,
    },
    {
      Img1: GameCard2,
      Icon: Img2,
      Title: "Runecairn: Wardensaga | A Soulslike Adventure",
      GameMaster: "TheGiftOfGabes",
      FanBase: "$20",
      Library: "Cairn",
      Loyalty: "Campaign",
      Time: "Wednesday,October 9,2024 at 10.30 PM IST",
      id: 4,
    },
    {
      Img1: GameCard2,
      Icon: Img2,
      Title: "Runecairn: Wardensaga | A Soulslike Adventure",
      GameMaster: "TheGiftOfGabes",
      FanBase: "$20",
      Library: "Cairn",
      Loyalty: "Campaign",
      Time: "Wednesday,October 9,2024 at 10.30 PM IST",
      id: 5,
    },
    {
      Img1: GameCard2,
      Icon: Img2,
      Title: "Runecairn: Wardensaga | A Soulslike Adventure",
      GameMaster: "TheGiftOfGabes",
      FanBase: "$20",
      Library: "Cairn",
      Loyalty: "Campaign",
      Time: "Wednesday,October 9,2024 at 10.30 PM IST",
      id: 6,
    },
    {
      Img1: GameCard2,
      Icon: Img2,
      Title: "Runecairn: Wardensaga | A Soulslike Adventure",
      GameMaster: "TheGiftOfGabes",
      FanBase: "$20",
      Library: "Cairn",
      Loyalty: "Campaign",
      Time: "Wednesday,October 9,2024 at 10.30 PM IST",
      id: 7,
    },
    {
      Img1: GameCard2,
      Icon: Img2,
      Title: "Runecairn: Wardensaga | A Soulslike Adventure",
      GameMaster: "TheGiftOfGabes",
      FanBase: "$20",
      Library: "Cairn",
      Loyalty: "Campaign",
      Time: "Wednesday,October 9,2024 at 10.30 PM IST",
      id: 8,
    },
    
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="w-full flex lg:flex-row sm:flex-col sm:px-12 xs:px-18 flex-wrap gap-6 pr-0">
        {data.map((elem) => {
          return (
            <Link className="w-full lg:w-[45%] lg:mx-2 mx-auto">
              <div className="hover:-translate-y-2 transition-all duration-300 cursor-pointer rounded-md overflow-hidden shadow-md">
                <div className="w-full">
                  <div className="relative h-32 w-full">
                    <img className="w-full h-full object-cover rounded-t-md" src={elem.Img1} alt="" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 my-4 px-5">
                    <img src={elem.Icon} className="w-16 h-16 rounded-full" alt="" />
                    <div className="flex flex-col justify-center">
                      <h1 className="text-[#333] text-lg max-xl:text-xl">{elem.Title}</h1>
                      <h2 className="text-[#808080] text-sm sm:text-md">Game Master: {elem.GameMaster}</h2>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f9f9f9] relative py-4 pt-10 px-5 flex flex-wrap items-center gap-3 text-[#777777]">
                  <div className="flex items-center gap-2">
                    <MdOutlineLibraryAdd />
                    <span>{elem.Library}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdOutlineLoyalty />
                    <span>{elem.Loyalty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiWallet />
                    <span>{elem.FanBase}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdAccessTime />
                    <span>{elem.Time}</span>
                  </div>
                  <div className="p-2 absolute rounded-full right-5 -top-4 text-[#777777] bg-[#EEE]">
                    <IoStar />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GameCard;
