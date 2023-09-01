"use client";

import React from "react";
import { Josefin_Slab, Lalezar } from "next/font/google";
import { AiFillHtml5, AiFillGithub, AiOutlineFieldTime, AiFillQuestionCircle } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { SiMui, SiSwiper, SiGooglecolab } from "react-icons/si";
import { TbBrandNextjs, TbBrandRadixUi } from "react-icons/tb";
import { BsMicrosoftTeams } from "react-icons/bs";
import { MdReportProblem } from "react-icons/md";
import { LiaTeamspeak } from "react-icons/lia";

const lalezar = Lalezar({ subsets: ["latin"], weight: "400" });
const josefin = Josefin_Slab({ subsets: ["latin"], weight: "600" });

function Skills() {
  return (
    <div
      className="min-[400px]:w-[70vw] md:w-[50vw] xl:w-[25vw] 2xl:w-[20vw] my-20 bg-white p-5 rounded-xl flex flex-col gap-2 lg:gap-5 gradient-border"
      id="skills"
    >
      <h1 className={`text-2xl sm:text-4xl ${lalezar.className}`}>
        My <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">Skills:</span>
      </h1>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h2 className={`text-sm sm:text-xl md:text-2xl ${lalezar.className}`}>HARD SKILLS:</h2>
          <ul className={`${josefin.className} text-xs sm:text-base`}>
            <li className="flex gap-1">
              <AiFillHtml5 size={20} />
              HTML
            </li>
            <li className="flex gap-1">
              <BiLogoCss3 size={20} />
              CSS
            </li>
            <li className="flex gap-1">
              <BiLogoJavascript size={20} />
              JavaScript
            </li>
            <li className="flex gap-1">
              <BiLogoTypescript size={20} />
              TypeScript
            </li>
            <li className="flex gap-1">
              <BiLogoReact size={20} />
              React
            </li>
            <li className="flex gap-1">
              <TbBrandNextjs size={20} />
              Next.Js
            </li>
            <li className="flex gap-1">
              <BiLogoTailwindCss size={20} />
              Tailwind
            </li>
            <li className="flex gap-1">
              <TbBrandRadixUi size={20} />
              Radix
            </li>
            <li className="flex gap-1">
              <SiMui size={20} />
              MUI
            </li>
            <li className="flex gap-1">
              <SiSwiper size={20} />
              Swiper
            </li>
            <li className="flex gap-1">
              <BiLogoMongodb size={20} />
              MongoDB
            </li>
            <li className="flex gap-1">
              <AiFillGithub size={20} />
              Git
            </li>
            <li className="flex gap-1">
              <SiSwiper size={20} />
              Sanity
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={`text-sm sm:text-xl md:text-2xl ${lalezar.className}`}>SOFT SKILLS:</h2>
          <ul className={`${josefin.className} text-xs sm:text-base`}>
            <li className="flex gap-1">
              <AiOutlineFieldTime size={20} />
              Time Management
            </li>
            <li className="flex gap-1">
              <BsMicrosoftTeams size={20} />
              Teamwork
            </li>
            <li className="flex gap-1">
              <MdReportProblem size={20} />
              Creative Problem solving
            </li>
            <li className="flex gap-1">
              <SiGooglecolab size={20} />
              Collaboration
            </li>
            <li className="flex gap-1">
              <AiFillQuestionCircle size={20} />
              Decision-making
            </li>
            <li className="flex gap-1">
              <LiaTeamspeak size={20} />
              Effective Communication
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
