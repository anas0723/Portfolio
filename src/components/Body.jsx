import React from "react";
import { ReactTyped } from "react-typed";

export default function Body() {
  return (
    <>
      <div className="bg-white w-full h-screen flex justify-center">
        <div className="shadow-2xl bg-color w-[90%] p-6">
          <h1 className="  text-white text-2xl">
            Hi, My self
            <br />
            <span className=" block text-4xl specific-color font-thin">
              Muhammad Anas
            </span>
            <br />
            <span className="block text-3xl font-Arial text-color delicious-handrawn-regular ">
              I build sleek and interactive web experiences.
            </span>
          </h1>
          <span className="block mt-4  text-2xl specific-color">

          <ReactTyped
            strings={[
              "Building sleek, responsive, and dynamic web apps",
              "Allways try to learn new things & dedicated to my work",
              "I am a MERN Stack Developer",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
            />
            </span>
        </div>
      </div>
    </>
  );
}
