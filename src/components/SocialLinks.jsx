import React from "react";
import Instagram from "../assets/Pictures/Instagram.png";
import Github from "../assets/Pictures/Github-icons.svg";
import LinkedIn from "../assets/Pictures/linkdin.jpg";
import Facebook from "../assets/Pictures/Facebook.jpg";
import Leetcode from "../assets/Pictures/Leetcode.webp";


const SocialLinks = () => {
  const images = [
    { src: Instagram, alt: "Instagram" },
    { src: Github, alt: "Github" },
    { src: LinkedIn, alt: "LinkedIn" },
    { src: Facebook, alt: "Facebook" },
    { src: Leetcode, alt: "Leetcode" },

  ]
  return (
   
    <>
    
      <div className="flex justify-center">
        <h1 className="text-6xl font-mono hover:border-2  flex  items-center justify-center   group:[inline]   text-[#64ffda]  mono sm:text-3xl px-6 py-3 rounded-lg border-2  transition-all duration-300 cursor-pointer">
          Social Links
        </h1>
        </div>
        <div className="flex justify-around mt-10 flex-wrap gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="group rounded relative p-4"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-20 w-20 md:h-20 md:w-20  "
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
          </div>
        ))}
        </div>
    
    </>
  );
};

export default SocialLinks;
