import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar bg-[#F1F1F1]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold "
            >
              <Link
                className=" hover:text-orange-500 hover:border-b-2 hover:border-orange-500"
                to="/"
              >
                <li>Home</li>
              </Link>
              <Link
                className=" hover:text-orange-500 hover:border-b-2 hover:border-orange-500"
                to="/about"
              >
                <li>About</li>
              </Link>
              <Link
                className=" hover:text-orange-500 hover:border-b-2 hover:border-orange-500"
                to="/achivement"
              >
                <li>Achivements</li>
              </Link>
              <Link
                className=" hover:text-orange-500 hover:border-b-2 hover:border-orange-500"
                to="/contact"
              >
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <Link to="/" className="normal-case text-xxl font-bold">
            {" "}
            <span className="">Abdul Motin</span>{" "}
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold ">
            <Link
              to="/"
              className="mr-5 hover:text-orange-500 hover:border-b-2 hover:border-orange-500"
            >
              <li>Home</li>
            </Link>
            <Link
              to="/about"
              className="mr-5 hover:text-orange-500 hover:border-b-2 hover:border-orange-500"
            >
              <li>About</li>
            </Link>
            <Link
              to="/achivement"
              className="mr-5 hover:text-orange-500 hover:border-b-2 hover:border-orange-500"
            >
              <li>Achivements</li>
            </Link>
            <Link
              to="/contact"
              className="mr-5 hover:text-orange-500 hover:border-b-2 hover:border-orange-500"
            >
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
