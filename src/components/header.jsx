import React, { useState } from "react";
import { decode } from "html-entities";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
  { title: "Home", link: "#About" },
  { title: "Projects", link: "#Project" },
  { title: "Contact", link: "#Contact" },
];
const navlinkStyle = "transition-all duration-30 cursor-pointer";

export default function Header() {
  const [isHamburgerOpen, setIsHamBurgerOpen] = useState(false);

  return (
    <header className="custom-bg flex justify-between items-center w-dvw p-4">
      <h1>
        <a href="/" className="text-3xl">
          {decode("&lt")}{" "}
          <span className="specific-color allura-regular text-4xl underline-duration-1000 transition-all duration-800 hover:underline hover:decoration-2">
            M.Anas
          </span>{" "}
          {decode("&gt")}
        </a>
      </h1>

      <div
        className="text-3xl  cursor-pointer "
        onClick={() => setIsHamBurgerOpen(!isHamburgerOpen)}
      > <span className="text-3xl mobile sm:hidden  ">
        <RxHamburgerMenu />
      </span>
      </div>

      <ul
        className={`flex  text-lg justify-evenly gap-10 mr-14 ${
          isHamburgerOpen ? "flex-col absolute top-full left-0 w-full bg-white" : "flex-row"
        }`}
      >
        {links.map((item, i) => (
          <li  className={`navlinkStyle hover:underline hover:decoration-[#3fc1a3] decoration-2 `} key={i}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
