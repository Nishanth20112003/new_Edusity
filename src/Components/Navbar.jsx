import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
const Navbar = () => {
  let [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="navbar w-[100%] bg-gray-900 p-2 containers flex items-center justify-between fixed top-0 z-10">
        <div className="logo">
          <img src={logo} className="w-[180px]" />
        </div>
        <div className="hidden md:flex gap-5">
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="program"
            smooth={true}
            offset={-280}
            duration={500}
            className="cursor-pointer"
          >
            Program
          </Link>
          <Link
            to="about"
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
          >
            About us
          </Link>
          <Link
            to="campus"
            smooth={true}
            offset={-230}
            duration={500}
            className="cursor-pointer"
          >
            Campus
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            offset={-240}
            duration={500}
            className="cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-130}
            duration={500}
            className="bg-gray-100 px-2 py-1 text-black rounded-full cursor-pointer"
          >
            Contact us
          </Link>
        </div>
        <div
          className={sidebar ? "hidden" : "menu-icon md:hidden"}
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-list cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
        <div
          className={sidebar ? "close-icon cursor-pointer" : "hidden"}
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>
      </div>
      {sidebar ? (
        <div className="md:hidden sidebar w-[200px] bg-gray-900 pb-2 fixed top-[43px] right-[0px] h-[100vh] z-10">
          <div className="links">
            <Link to="hero" smooth={true} offset={0} duration={500} onClick={() => { setSidebar(!sidebar) }}>
            <p className="p-2 hover:bg-gray-100 hover:text-gray-900 cursor-pointer px-3 text-lg">
              Home
            </p>
            </Link>
            <Link to="program" smooth={true} offset={-280} duration={500} onClick={() => { setSidebar(!sidebar) }}>
            <p className="p-2 hover:bg-gray-100 hover:text-gray-900 cursor-pointer  px-3 text-lg">
              Program
            </p>
            </Link>
            <Link to="about" smooth={true} offset={-100} duration={500} onClick={() => { setSidebar(!sidebar) }}>
            <p className="p-2 hover:bg-gray-100 hover:text-gray-900 cursor-pointer  px-3 text-lg">
              About us
            </p>
            </Link>
            <Link to="campus" smooth={true} offset={-230} duration={500} onClick={() => { setSidebar(!sidebar) }}>
            <p className="p-2 hover:bg-gray-100 hover:text-gray-900 cursor-pointer  px-3 text-lg">
              Campus
            </p>
            </Link>
            <Link to="testimonials" smooth={true} offset={-240} duration={500} onClick={() => { setSidebar(!sidebar) }}>
            <p className="p-2 hover:bg-gray-100 hover:text-gray-900 cursor-pointer  px-3 text-lg">
              Tesimonials
            </p>
            </Link>
            <Link to='contact' smooth={true} offset={-130} duration={500} onClick={() => { setSidebar(!sidebar) }}>
            <button className="ml-2 px-3 py-1 rounded-full bg-gray-100 text-black mt-3 hover:bg-black hover:text-gray-100">
              Contact us
            </button>
            </Link>
            
          </div>
        </div>
      ) : (
        "hidden"
      )}
    </>
  );
};

export default Navbar;
