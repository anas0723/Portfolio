import React from "react";
import { ReactTyped } from "react-typed";
import FallingText from "./FallingText";
import Cursor from "./cursor";
export default function Body() {
  return (
<>
<Cursor />

    <div className="bg-[#0a192f] w-full min-h-screen flex justify-center items-center p-6">
      <div className="bg-[#112240] shadow-2xl rounded-lg w-full max-w-6xl p-8 text-white">
        <h1 className="text-xl sm:text-2xl font-light">Hi, Myself</h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#64ffda] mt-2">
          Muhammad Anas
        </h2>
        <h3 className="text-lg sm:text-2xl font-light text-gray-300 mt-2 delicious-handrawn-regular">
          I build sleek and interactive web experiences.
        </h3>

        <div className="mt-4 text-lg text-[#64ffda]">
          <ReactTyped
            strings={[
              "Building sleek, responsive, and dynamic web apps",
              "Always learning new things & dedicated to my work",
              "I am a MERN Stack Developer",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>

        <div className="flex justify-center mt-6">
          <button className="text-xl sm:text-3xl px-6 py-3 rounded-lg border-2  border-[#64ffda]  shadow-lg shadow-[#64ffda] transition-all duration-300">
            About Me
          </button>
        </div>

        <div className="flex  justify-center">
          <p className="text-gray-300 text-base sm:text-lg mt-6  leading-relaxed max-w-6xl ">
            Hi!{" "}
            <span className="font-semibold text-[#64ffda]">
              I'm Muhammad Anas Soomro,
            </span>{" "}
            a passionate
            <span className="font-semibold text-[#64ffda]">
              {" "}
              MERN Stack Developer
            </span>{" "}
            with a strong focus on building modern, scalable, and user friendly
            web applications. I specialize in
            <span className="font-semibold text-[#64ffda]">
              {" "}
              React, Tailwind CSS, and the MERN stack
            </span>
            , ensuring seamless frontend experiences. Currently, <br /> I am
            deepening my knowledge in frontend development while also exploring
            backend technologies. I believe in writing clean, maintainable code
            and love solving complex problems. Check out some of my work
            <span className="font-semibold text-[#64ffda] hover:underline ml-1">
              <a href="#Project">Projects</a>
            </span>
            . Let's build something amazing together! 🚀
          </p>
        </div>

        <div className="relative w-full h-64 mt-10 border-[#64ffda] border rounded-lg overflow-hidden">
          <FallingText
                text={`MERN Stack React Tailwind Frontend Developer CodeCoffee Sleek Designs Learning New Technologies`}
            highlightWords={[
              "MERN",
              "Frontend",
              "CodeCoffee",
              "React",
              "Designs",
              "Learning",
              "Technologies",
            ]}
            highlightClass="bg-gray-800  border border-gray-500 px-2 py-1 rounded-md"
            trigger="hover"
            className="bg-amber-500"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="1.4rem"
            mouseConstraintStiffness={0.9}
          />
        </div>
      </div>
    </div>
    </>
  );
}
