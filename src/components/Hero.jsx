import React from "react";
import { assets } from "../assets/assets";
import {  ArrowRightIcon, Calendar, TimerIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className='bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen flex flex-col  justify-center items-start gap-4 px-6 md:px-16 lg:px-24   '>
      <div className="px-6 md:px-16 lg:px-24">
        <div>
          <img
            src={assets.marvelLogo}
            alt=""
            className="max-h-11 lg:h-11 mt-20"
          />
        </div>
        <div className="font-medium"> 
        <h1 className="text-5xl md:text-[70px]  mt-5 max-w-2xl font-medium">
          Guardians <br />
          of the Galaxy
        </h1>
        </div>
        <div>
          <p className="flex items-center gap-2 sm:gap-4 mt-5 max-sm:text-sm">
            Action | Adventure | Sci-Fi <span className="flex items-center gap-1 sm:gap-2 md:gap-3"><Calendar/>2018 <TimerIcon/>2h 8m</span>
          </p>
        </div>
        <p className="font-medium text-gray-300 max-w-md mt-5">In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy</p>
          <div className="flex items-center gap-2 mt-5">
            <button className="flex items-center px-6 py-3  bg-primary hover:bg-primary-dull transition-all duration-300 rounded-full">Explore movies <span><ArrowRightIcon/></span></button>
          </div>
      </div>
    </div>
  );
};

export default Hero;
