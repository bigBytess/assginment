import React from "react";

function Navbar() {
  return (
    <nav className="bg-base-300 p-4 flex justify-between items-center sticky top-0">
      <label
        htmlFor="my-drawer"
        className=" btn btn-ghost btn-circle drawer-button lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <h1 className="text-lg font-bold">App Name</h1>
      <div className="dropdown dropdown-end">
        <div className="avatar" tabIndex={0} role="button">
          <div className="ring-primary ring-offset-base-100 w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-2"
        >
          <li>
            <a>
              Profile <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Setting</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
