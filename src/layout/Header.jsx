import { useState } from "react";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const title = "<SK />";
  return (
    <header>
      <nav className="flex justify-between  z-10 bg-white ">
        <div>
          <span className="text-4xl font-bold text-purple-600">{title}</span>
        </div>
        <div className="hidden md:flex">
          <ul className="flex flex-row">
            <li className="mr-4 pt-2 px-2 transition-all ease-in-out hover:scale-110 cursor-pointer hover:border-b-2">
              <a href="#home">Home</a>
            </li>
            <li className="mr-4 pt-2 px-2 transition-all ease-in-out hover:scale-110 cursor-pointer hover:border-b-2">
              <a href="#about">About me</a>
            </li>
            <li className="mr-4 pt-2 px-2 transition-all ease-in-out hover:scale-110 cursor-pointer hover:border-b-2">
              <a href="#skills">Skills</a>
            </li>
            <li className="mr-4 pt-2 px-2 transition-all ease-in-out hover:scale-110 cursor-pointer hover:border-b-2">
              <a href="#protfolio">Portfolio</a>
            </li>
            <li className="mr-4 pt-2 px-2 transition-all ease-in-out hover:scale-110 cursor-pointer hover:border-b-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="visible md:hidden">
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 "
              onClick={() => setToggle(!toggle)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            ""
          )}
          {toggle ? (
            <div className="absolute top-5 mr-8 right-0 h-80 w-60 bg-gray-300 shadow-lg rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 float-right m-4 cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>

              <ul
                className="flex flex-col mt-12 p-3"
                onClick={() => setToggle(!toggle)}
              >
                <li  onClick={() => setToggle(!toggle)} className="mr-5 p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
                  <a href="#home" >Home</a>
                </li>
                <li  onClick={() => setToggle(!toggle)} className="mr-5 p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
                  <a href="#about">About me</a>
                </li>
                <li  onClick={() => setToggle(!toggle)} className="mr-5 p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
                  <a href="#skills">Skills</a>
                </li>
                <li  onClick={() => setToggle(!toggle)}className="mr-5 p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
                  <a href="#protfolio">Portfolio</a>
                </li>
                <li className="mr-5 p-3 transition-all ease-in-out hover:scale-110 cursor-pointer">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </header>
  );
};
