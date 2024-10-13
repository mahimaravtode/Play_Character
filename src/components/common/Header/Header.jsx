import React, { useState } from "react";
import Logo from "../../../assets/Logo.png";
import Logo2 from "../../../assets/Logo2.png";

import { MdArrowDropDown, MdClose, MdMenu } from "react-icons/md";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const DropdownLinks = [
    { id: 1, name: "Tomb of Annihilation", link: "/#" },
    { id: 2, name: "Land of Sorrow", link: "/#" },
    { id: 3, name: "Advanture", link: "/#" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  const [nav, setNav] = useState(false);
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <>
      <header className=" w-full border-b-[1px] z-[9]   border-b-border-slate-300 absolute top-0">
        <nav
          collapseOnSelect
          expand="lg"
          className={`${
            nav === true
              ? "sticky flex items-center shadow-md "
              : "flex items-center bg-white text-black"
          }`}
        >
          <div className="md:border-r-[1px]  r flex items-center md:gap-8  md:px-8 sm:gap-5 sm:px-10  py-3 md:border-slate-300">
           
           <Link to={'/'}>
           <div className=" ">
              <img src={Logo2} className="md:w-36 w-44 " alt="" />
          
            </div>
           </Link>
          </div>
          <div className="flex justify-between items-center w-full py-2 px-5">
            <div className="px-5 ">
              <ul className={`md:flex items-center gap-10 hidden`}>
                <li className="group relative cursor-pointer">
                  <a
                    href="/gamefinder"
                    className="flex items-center  gap-[2px] py-2"
                  >
                    Game Finder
                    <MdArrowDropDown className="transition-all duration-200 group-hover:rotate-180" />
                  </a>
                  <div className="absolute hidden group-hover:block w-[200px] rounded-md bg-white p-2 shadow-md">
                    <ul>
                      {DropdownLinks.map((item) => (
                        <li key={item.id}>
                          <a
                            href={item.link}
                            className="inline-block w-full hover:bg-blue/10 rounded-md p-2 "
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/dashboard" className=" ">
                    Dashboard & Tools
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-5">
              <button className="px-3 py-2 bg-blue text-white border-[1px] border-secondary rounded-md hover:bg-hover hover:bg-none">
                Log In
              </button>
              <button
                className="md:hidden p-2 bg-white text-black rounded-md"
                onClick={handleMenuToggle}
              >
                {isMenuOpen ? (
                  <MdClose className="text-black text-xl" />
                ) : (
                  <MdMenu className="text-black text-xl" />
                )}
              </button>
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 left-0  w-[60%] h-screen bg-[#2a2a2a] z-[999] shadow-md text-white">
            <div className="text-center py-2 my-1  border-b-[1px] border-[#404040]">
              <h4>Menu</h4>
            </div>
            <ul className="flex flex-col gap-3  font-[300]">
              <li className="group relative cursor-pointer px-3 hover:bg-[hsla(0,0%,100%,.03)] border-b-[1px] border-[#404040] py-2">
                <a
                  href="/gamefinder"
                  className="flex items-center gap-[2px]   "
                >
                  Game Finder
                  <MdArrowDropDown className="transition-all duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute hidden group-hover:block w-full rounded-md bg-[#2a2a2a] p-2 shadow-md">
                  <ul>
                    {DropdownLinks.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          className="inline-block w-full hover:bg-blue-500 hover:bg-[hsla(0,0%,100%,.03)] transition-all duration-300 rounded-md p-2 hover:bg-primary/20"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="block px-3 hover:bg-[hsla(0,0%,100%,.03)] border-b-[1px] border-[#404040] py-2 hover:bg-blue-500 hover:text-white "
                >
                  Dashboard & Tools
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="block px-3 hover:bg-[hsla(0,0%,100%,.03)] border-b-[1px] border-[#404040] py-2 hover:bg-blue-500 hover:text-white "
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
