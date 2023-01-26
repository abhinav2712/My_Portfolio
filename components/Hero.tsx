import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";


import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo:PageInfo;
  
};
export default function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Name:'${pageInfo.name}'`,
      
      "../Devops Enthusiast/..",
      "<FullStackDeveloper/>",
      "Guy-Who-Loves-Cats.jsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      ></img>
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#c4c2c2] ml-7 pb-2 tracking-[15px] items-center">
          {pageInfo?.role}</h2>
        <h1 className="text-5xl text-[#b1c6f3] ml-6 lg:text-6xl font-semibold ">

          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
          
          <div className="pt-5">
            <Link href="#about">
            <button className="heroButton">About </button>
            </Link>
           
            <Link href="#exp">
            <button className="heroButton">Work Experience</button>
            </Link>
            
            <Link href="#skills">
            <button className="heroButton">Skills</button>
            </Link>
           
            <Link href="#projects">
            <button className="heroButton">Projects</button>
            </Link>
            
            {/* <Link href="#achievements">
            <button className="heroButton">Achievements</button>
            </Link> */}

            <Link href="#contact">
            <button className="heroButton">Contact</button>
            </Link>
            
          </div>

      </div>
    </div>
  );
}
