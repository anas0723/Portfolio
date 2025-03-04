import React, { useState } from "react";
import { decode } from "html-entities";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
  { title: "Home", link: "#About" },
  { title: "Projects", link: "#Project" },
  { title: "Contact", link: "#Contact" },
  // { title: "Resume", link: "#Resume"}
];

export default function Header() {
  const [isHamburgerOpen, setIsHamBurgerOpen] = useState(false);

  return (
    <header className="custom-bg flex justify-between items-center w-full p-4 relative">
      <h1>
        <a href="/" className="text-3xl text-right relative group">
          {decode("&lt")}{" "}
          <span className="specific-color allura-regular text-4xl relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3fc1a3] after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full">
            M.Anas
          </span>{" "}
          {decode("&gt")}
        </a>
      </h1>

      {/* Hamburger Menu Button for Small Screens */}
      <div
        className="text-3xl sm:hidden cursor-pointer"
        onClick={() => setIsHamBurgerOpen(!isHamburgerOpen)}
      >
        <RxHamburgerMenu />
      </div>

      {/* Desktop Menu (Hidden on Small Screens) */}
      <ul className="hidden sm:flex text-lg justify-evenly gap-10 mr-14">
        {links.map((item, i) => (
          <li className="navlinkStyle py-2 text-right relative group" key={i}>
            <a
              className="relative text-white after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3fc1a3] after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full after:left-0"
              href={item.link}
            >
              {item.title}
            </a>
          </li>
        ))}
        <li className="w-full flex justify-end ">
          <a
            className="rounded-2xl text-white px-4  py-2 border-2 border-transparent hover:border-sky-500 shadow-none hover:shadow-lg hover:shadow-sky-500 transition-all duration-300"
            href="#resume"  
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Mobile Menu (Visible when Hamburger is Open) */}
      {isHamburgerOpen && (
        <ul className="mobile-screen flex flex-col items-end absolute top-full right-0 w-full bg-[#0a192f] py-4 px-6 sm:hidden">
          {links.map((item, i) => (
            <li className="navlinkStyle py-2 text-right relative group" key={i}>
              <a
                href={item.link}
                className="relative text-white after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3fc1a3] after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full after:left-0"
              >
                {item.title}
              </a>
            </li>
          ))}
          <li className="w-full flex justify-end pb-2 " >
            <a
              className="rounded-2xl text-white px-4 py-2 border-2 border-transparent hover:border-sky-500 shadow-none hover:shadow-lg hover:shadow-sky-500 transition-all duration-300"
              href="/resume"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
