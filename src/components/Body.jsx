import React from "react";
import { ReactTyped } from "react-typed";
import FallingText from "./FallingText";

export default function Body() {
  return (
    <>
      <div className="bg-white w-full h-screen flex justify-center">
        <div className="shadow-2xl  bg-color w-[90%] p-6">
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
          <div className="flex justify-center items-center mt-5">
            <h1
              className="text-4xl text-white rounded-2xl px-4 py-2 border-2 border-transparent  
               hover:border-sky-500 shadow-none hover:shadow-lg hover:shadow-sky-500  
               transition-all duration-300"
            >
              About Me
            </h1>
          </div>

          <div className="w-full flex justify-center">
            <p className=" text-base text-justify mt-4 text-color max-w-5xl">
              Hi!{" "}
              <span className="font-semibold specific-color ">
                I'm Muhamad Anas Soomro,
              </span>{" "}
              a passionate
              <span className="font-semibold specific-color">
                {" "}
                MERN Stack Developer{" "}
              </span>{" "}
              with a strong focus on building modern, scalable, and
              user-friendly web applications. I specialize in
              <span className="font-semibold">
                {" "}
                React, Tailwind CSS, and the MERN stack...
              </span>{" "}
              ensuring seamless frontend experiences while continuously
              enhancing my backend expertise. Currently, I am deepening my
              knowledge in frontend development to create more interactive and
              optimized user interfaces, while also exploring backend
              technologies to strengthen my full-stack development skills. I
              believe in writing clean, maintainable code and love solving
              complex problems through innovative solutions. Take a look at some
              of my work{" "}
              <span className="specific-color font-semibold hover:underline">
                <a href="#Project">Project's</a>
              </span>{" "}
              I’m always open to learning new technologies and collaborating on
              exciting projects. Let’s build something amazing together! 🚀
            </p>
          </div>

          <div className="relative w-full h-64 mt-10 border-[#3fc1a3] border rounded overflow-hidden">
            <FallingText className="border border-amber-300 "
              text={`MERN Stack React & Tailwind Frontend Developer Code & Coffee Sleek Designs Learning New Technologies.`}
              highlightWords={[
                "MERN",
                "Frontend",
                "Code",
                "React",
                "Designs",
                "Learning",
                "Technologies"

              ]}
              highlightClass="highlighted"
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1.5rem"
              mouseConstraintStiffness={0.9}
            />
          </div>
        </div>
      </div>
    </>
  );
}
