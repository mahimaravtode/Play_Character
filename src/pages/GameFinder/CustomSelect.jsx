import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const CustomSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative inline-block w-full" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-[1px] focus:ring-blue "
        >
          <span className="text-[#808080]">
            {selectedOption || "Select Category"}
          </span>
          <AiFillCaretDown className="ml-2 text-[#808080]" />
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 z-10 mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="relative inline-block mt-8  w-full " ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-[1px] focus:ring-blue relative"
        >
          <span className="text-[#808080]">
            {selectedOption || "Select Game System"}
          </span>
          <AiFillCaretDown className="ml-2 text-[#808080]" />
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0  z-10 mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="relative inline-block mt-8  w-full " ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span className="text-[#808080]">
            {selectedOption || "Keyword Search"}
          </span>
          <AiFillCaretDown className="ml-2 text-[#808080]" />
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 z-10 mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomSelect;
