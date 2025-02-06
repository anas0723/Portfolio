import React, { useState } from "react";
import { decode } from "html-entities";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
  { title: "Home", link: "#About" },
  { title: "Projects", link: "#Project" },
  { title: "Contact", link: "#Contact" },
];

export default function Header() {
  const [isHamburgerOpen, setIsHamBurgerOpen] = useState(false);

  return (
    <header className="custom-bg flex justify-between items-center w-full p-4 relative">
      <h1>
        <a href="/" className="text-3xl">
          {decode("&lt")}{" "}
          <span className="specific-color allura-regular text-4xl underline-duration-1000 transition-all duration-800 hover:underline hover:decoration-2">
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
          <li
            className="navlinkStyle hover:underline hover:decoration-[#3fc1a3] decoration-2"
            key={i}
          >
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu (Visible when Hamburger is Open) */}
      {isHamburgerOpen && (
        <ul className="mobile-screen flex flex-col items-end absolute top-full right-0 w-full bg-[#0a192f] py-4 px-6 sm:hidden">
          {links.map((item, i) => (
            <li
              className="navlinkStyle py-2 text-right hover:underline hover:decoration-[#3fc1a3] decoration-2"
              key={i}
            >
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
