import FireBase from "../assets/Pictures/fire-base-icons.svg";
import Git from "../assets/Pictures/git-icons.svg";
import GitHub from "../assets/Pictures/github-icons.svg";
import Html from "../assets/Pictures/html-icons.svg";
import Js from "../assets/Pictures/js-icons.svg";
import MongoDb from "../assets/Pictures/mongodb-icons.svg";
import Mui from "../assets/Pictures/mui-icons.svg";
import Next from "../assets/Pictures/Next-icons.svg";
import PostMan from "../assets/Pictures/postman-icons.svg";
import React from "../assets/Pictures/react-icons.svg";
import Tailwind from "../assets/Pictures/tailwind-icons.svg";
import TypeScript from "../assets/Pictures/type-scrtip-icons.svg";
import Vercel from "../assets/Pictures/vercel-icons.svg";
import VsCode from "../assets/Pictures/vscode-icons.svg";
import Css from '../assets/Pictures/css-icon.jpeg';

export default function Skill() {
  const images = [
    { src: FireBase, alt: "Firebase" },
    { src: Git, alt: "Git" },
    { src: GitHub, alt: "GitHub" },
    { src: Html, alt: "HTML" },
    { src: Js, alt: "JavaScript" },
    { src: MongoDb, alt: "MongoDB" },
    { src: Mui, alt: "Material-UI" },
    { src: Next, alt: "Next.js" },
    { src: PostMan, alt: "Postman" },
    { src: React, alt: "React" },
    { src: Tailwind, alt: "Tailwind CSS" },
    { src: TypeScript, alt: "TypeScript" },
    { src: Vercel, alt: "Vercel" },
    { src: VsCode, alt: "VS Code" },
    { src: Css, alt: "CSS" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-5xl mb-8">Languages & Tools</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative p-2 rounded transition-all duration-300 hover:scale-110 ]"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-16 w-16 transition-transform duration-300 hover:scale-[1.3_1.1]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
