import React from "react";
import { decode } from "html-entities";

export default function header() {
  return (
    <>
      <header className="  custom-bg flex justify-between  items-center p-4">
        <h1 className=" ">
          <a href="/" className=" text-3xl   ">
            {decode("&lt")}{" "}
            <span className="  specific-color allura-regular text-4xl underline-duration-1000  transition-all duration-800 hover:underline hover:decoration-2">
              M.Anas
            </span>{" "}
            {decode("&gt")}
          </a>
        </h1>
        <ul className=" flex text-lg  justify-ceter gap-10 mr-14">
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            {" "}
            <a href="">Contact</a>
          </li>
        </ul>
      </header>
    </>
  );
}
