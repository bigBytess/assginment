import React from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoIosDownload } from "react-icons/io";

function Sidebar() {
  return (
    <div className="drawer-side z-20">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-lg">
        <li>
          <a>
            {" "}
            <FaHome />
            Home
          </a>
        </li>
        <li>
          <a>
            {" "}
            <BiSolidDashboard />
            Dashboard
          </a>
        </li>
        <li>
          <a>
            {" "}
            <IoMdSettings />
            Setting
          </a>
        </li>
        <li>
          <a>
            {" "}
            <IoIosDownload />
            Download
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
