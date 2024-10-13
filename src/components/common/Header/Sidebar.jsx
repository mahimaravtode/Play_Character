import React, { useState } from "react";
import { FaShare } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { IoClose, IoPersonCircleSharp, IoSettingsSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { MdDashboard, MdOutlineReport } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import Logo2 from "../../../assets/Logo.png";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const items = [
    { text: "Dashboard", icon: <MdDashboard />, path: "/dashboard" },
    { text: "Profile", icon: <IoPersonCircleSharp />, path: "/profile" },
    { text: "Settings", icon: <IoSettingsSharp />, path: "/settings" },
    { text: "Logout", icon: <LuLogOut />, path: "/logout" },
    { text: "Help", icon: <FiHelpCircle />, path: "/help" },
    { text: "Reports", icon: <MdOutlineReport />, path: "/reports" },
    {
      text: "Notifications",
      icon: <IoMdNotifications />,
      path: "/notifications",
    },
    { text: "Share", icon: <FaShare />, path: "/share" },
  ];

  return (
    <div
      className={`md:fixed top-0 py-5 px-3 transition-all duration-300 md:shadow-md  left-0 z-[10]   bg-zinc-900  text-white md:min-h-screen  ${
        isCollapsed ? "w-[70px]" : "w-[250px]"
      } `}
    >
      <div className="flex flex-col relative">
        <div className="flex items-center gap-7">
          <div className={`${isCollapsed ? 'hidden': 'block'}`}>
            <img src={Logo2} className="md:w-36 w-44 " alt="" />
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className=" text-2xl "
          >
            {isCollapsed ? <RiMenu2Line className="ml-3" /> : <RiMenu2Line />}
          </button>
        </div>
        <div className="mt-4">
          <nav className="md:flex hidden mt-4 flex-col ">
            <ul className="flex flex-col gap-2">
              {items.map((elem, i) => (
                <li
                  key={i}
                  className="flex w-full  hover:bg-hover cursor-pointer hover:text-white rounded-md  items-center gap-10 p-3"
                >
                  <div className="">
                    <button className="text-2xl">{elem.icon}</button>
                  </div>
                  <a
                    href={elem.path}
                    className={` ${isCollapsed ? "hidden" : "block"}`}
                  >
                    <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                      {elem.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
