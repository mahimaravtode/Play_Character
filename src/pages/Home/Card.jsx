import React from "react";
import { BsFilePerson } from "react-icons/bs";
import { FiCheckSquare } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";

const Card = () => {
  return (
    <>
      <div className=" mt-10 md:mt-14">
        <div className="   text-center mb-8">
          <BsFilePerson className="text-blue w-fit mx-auto text-6xl" />
          <div className="md:my-5">
            <h2 className="text-2xl my-3  font-[300]">Player First</h2>
            <p className="my-5 text-[#808080]">
            We know you are passionate about the characters you create. We want to make sure the right players are in the right games.  
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-10 md:mt-14">
        <div className="   text-center mb-8">
          <LuMessagesSquare className="text-blue w-fit mx-auto text-6xl" />
          <div className="md:my-5">
            <h2 className="text-2xl my-3  font-[300]">Beginner Friendly</h2>
            <p className="my-5 text-[#808080]">
              We know you are passionate about the characters you create. We
              want to make sure the right players are in the right games.
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-10 md:mt-14">
        <div className="   text-center mb-8">
          <FiCheckSquare className="text-blue w-fit mx-auto text-6xl" />
          <div className="md:my-5">
            <h2 className="text-2xl  my-3 font-[300]">Easy Game Creation</h2>
            <p className="my-5 text-[#808080]">
            We make sure every GM knows their stuff and are willing to help out newcomers. We also give them easy to use tools to get games posted fast!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
