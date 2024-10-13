import React, { useState } from "react";
import menu from "../../assets/menu.png";

import GameSidebar from "./GameSidebar";
import GameCard from "./GameCard";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

// const [isOpen, setIsOpen] = useState(false)
// const toggleMenu = () =>{
//   setIsOpen(!isOpen)
// }

const GameFinder = () => {
  const [isMenuChecked, setIsMenuChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsMenuChecked(!isMenuChecked);
  };
  const [isMenu2Checked, setIsMenu2Checked] = useState(false);

  const handleCheckbox2Change = () => {
    setIsMenu2Checked(!isMenu2Checked);
  };
  const [value, setValue] = useState(0);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="w-full  h-screen mt-20 gap-10 lg:gap-20 flex flex-col md:flex-row">
        <div className="hidden lg:block h-full w-[400px]">
          <GameSidebar />
        </div>
        <div className="w-full  md:w-full">
          <div className="relative flex items-center justify-between my-6">
            <h1 className=" max-lg:float-left ml-16 max-lg:ml-16 text-center text-2xl">
              Available Games
            </h1>
            <div className="cursor-pointer sm:block lg:hidden  max-lg:mr-16 " onClick={toggleSidebar}>
              <img src={menu} onClick={toggleSidebar} className="w-8" alt="" />
            </div>
          </div>
          <div className="my-5 w-full">
            <GameCard />
          </div>
          <div className="pt-20 w-full">
            <div className="mt-10 py-6 border-t-[1px] border-[#b8b6b6] flex justify-between items-center">
              <h6 className="text-[#333]">
                © 2024{" "}
                <span className="text-black">Player Character Games.</span> All
                Rights Reserved.
              </h6>
              <div className="flex items-center gap-2 pr-10">
                <FaFacebookF className="text-xl text-[#808080] hover:text-[#333]" />
                <FaInstagram className="text-xl text-[#808080] hover:text-[#333]" />
                <FaLinkedinIn className="text-xl text-[#808080] hover:text-[#333]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={` transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}   h-screen z-[99] px-8 absolute top-0 bg-white shadow-md`} >
        <div className="mt-3 cursor-pointer" onClick={toggleSidebar}>
          <IoMdClose className="text-3xl float-right  " />
        </div>
        <div className="flex mt-14 justify-between items-center">
          <h1 className="text-sm">Game Filters</h1>
          <h2 className="text-xl text-[#0d6efd]">Clear</h2>
        </div>
        <div className="w-full my-5">
          <div className="relative inline-block w-full">
            <select className="block appearance-none w-full text-[#808080] bg-white border border-[#CCCCCC] py-3 px-4 rounded leading-tight focus:outline-none focus:border-blue-500">
              <option value="option1">Select Category</option>
              <option value="option2">Abstract/Experiment</option>
              <option value="option3">Fantasy</option>
              <option value="option3">Historical</option>
              <option value="option3">Horror/Cult</option>
              <option value="option3">Modern/Urban Fantasy</option>
              <option value="option3">Mystery/Crime</option>
              <option value="option3">Pulp/Adventure</option>
              <option value="option3">Science-Fiction</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="css-8mmkcg"
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
              </svg>
            </div>
          </div>
          <div className="relative my-8 w-full inline-block">
            <select className="block appearance-none w-full text-[#808080] bg-white border border-[#CCCCCC] py-3 px-4 rounded leading-tight focus:outline-none focus:border-blue-500">
              <option value="option1">Select Game System</option>
              <option value="option2">Abstract/Experiment</option>
              <option value="option3">Fantasy</option>
              <option value="option3">Historical</option>
              <option value="option3">Horror/Cult</option>
              <option value="option3">Modern/Urban Fantasy</option>
              <option value="option3">Mystery/Crime</option>
              <option value="option3">Pulp/Adventure</option>
              <option value="option3">Science-Fiction</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="css-8mmkcg"
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
              </svg>
            </div>
          </div>
          <div className="relative w-full my-2 inline-block">
            <select
              className="block appearance-none w-full text-[#808080] bg-white border border-[#CCCCCC] py-3 px-4 rounded leading-tight focus:outline-none focus:border-blue-500"
              disabled
            >
              <option value="option1">Select Category</option>
              <option value="option2">Abstract/Experiment</option>
              <option value="option3">Fantasy</option>
              <option value="option4">Historical</option>
              <option value="option5">Horror/Cult</option>
              <option value="option6">Modern/Urban Fantasy</option>
              <option value="option7">Mystery/Crime</option>
              <option value="option8">Pulp/Adventure</option>
              <option value="option9">Science-Fiction</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="css-8mmkcg"
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="my-12">
          <div className="flex items-center my-2 gap-3">
            <label className="flex cursor-pointer select-none items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isMenuChecked}
                  onChange={handleCheckboxChange}
                  className="sr-only"
                />
                <div
                  className={`box block h-6 w-10 rounded-full ${isMenuChecked ? "bg-blue" : "bg-[#ccc]"
                    }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${isMenuChecked ? "translate-x-full" : ""
                    }`}
                ></div>
              </div>
            </label>

            <span className="text-[#666]">Campaign Filter</span>
          </div>
          <div className="flex items-center gap-3">
            <label className="flex cursor-pointer select-none items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isMenu2Checked}
                  onChange={handleCheckbox2Change}
                  className="sr-only"
                />
                <div
                  className={`box block h-6 w-10 rounded-full ${isMenu2Checked ? "bg-blue" : "bg-[#ccc]"
                    }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${isMenu2Checked ? "translate-x-full" : ""
                    }`}
                ></div>
              </div>
            </label>

            <span className="text-[#666]">One-Shot Filter</span>
          </div>
          <div className="w-full my-10 flex flex-col items-center">
            <div className="flex justify-between text-[#666] font-[300] w-full text-lg  mb-2">
              <span>Free</span>
              <span>${value}</span>
            </div>
            <input
              type="range"
              min="0"
              max="200"
              value={value}
              onChange={handleSliderChange}
              className="w-full h-1 rounded-lg bg-[#c4c2c2] appearance-none cursor-pointer"
            />
          </div>
          <div className="w-full my-5 mt-12">
            <div className="relative inline-block w-full">
              <select className="block appearance-none w-full active:border-[#0d6efd] text-[#808080] bg-white border border-[#CCCCCC] py-3 px-4 rounded leading-tight focus:outline-none focus:border-blue-500">
                <option value="option1" >Select..</option>
                <option value="option2">All Experiment Level</option>
                <option value="option3">Shiny</option>
                <option value="option3">Familiar</option>
                <option value="option3">Veteran</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                  className="css-8mmkcg"
                >
                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                </svg>
              </div>
            </div>
            <div className="relative my-8 w-full inline-block">
              <select className="block appearance-none w-full text-[#808080] active:border-[#0d6efd] bg-white border border-[#CCCCCC] py-3 px-4 rounded leading-tight focus:outline-none focus:border-blue-500">
                <option value="option1">Select a Day</option>
                <option value="option2">Today</option>
                <option value="option3">Monday</option>
                <option value="option3">Tuesday</option>
                <option value="option3">Wednesday</option>
                <option value="option3">Thursday</option>
                <option value="option3">Friday</option>
                <option value="option3">Saturday</option>
                <option value="option3">Sunday</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                  className="css-8mmkcg"
                >
                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                </svg>
              </div>
            </div>
            <div className="relative  w-full inline-block">
              <select className="block appearance-none w-full text-[#808080] active:border-[#0d6efd] bg-white border border-[#CCCCCC] py-3 px-4 rounded leading-tight focus:outline-none focus:border-blue-500">
                <option value="option1">Newest</option>
                <option value="option2">Oldest</option>
                <option value="option3">Fantasy</option>
                <option value="option3">Game Category</option>
                <option value="option3">Game Master</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                  className="css-8mmkcg"
                >
                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default GameFinder;
