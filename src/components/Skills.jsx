import React from "react";
import { SkillsText } from "./SkillsText";
import { FaCss3, FaGitAlt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import zustand from '../assets/zustand.svg'

export const Skills = () => {
  return (
    <div className="w-full">
      <div className="text-6xl text-center flex justify-center py-16 font-bold">
        Skills
      </div>
      <section className="grid grid-cols-2 gap-6 h-[30em] px-20 justify-center">
        <div className="col-span-2 bg-black text-white p-20 h-fit rounded-lg">
            {/* <div className="font-bold text-4xl">Technical Skills</div> */}
          <ul className="text-3xl grid grid-cols-4 items-center gap-10 space-y-6">
            <li className="flex flex-col items-center gap-4">
              <FaHtml5 />
              <div>HTML</div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <FaCss3 />
              <div>CSS</div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <FaJs />
              <div>JavaScript</div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <FaReact />
              <div>React</div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <FaGitAlt />
              <div>Git</div>
            </li>
            <li className="flex flex-col items-center gap-4">
            <RiTailwindCssFill />
              <div>Tailwind Css</div>
            </li>
            <li className="flex flex-col items-center gap-4">
            <SiFramer />
              <div>Framer Motion</div>
            </li>
            <li className="flex flex-col items-center gap-4">
            <img className="object-cover w-10 h-10" src={zustand} alt="zustand logo" />
              <div>Zustand</div>
            </li>
          </ul>
        </div>
        {/* <SkillsText baseVelocity={5}>
          HTML &nbsp; CSS &nbsp; Tailwind &nbsp; Javascript &nbsp; React &nbsp;
          HTML &nbsp; CSS &nbsp; Tailwind &nbsp; Javascript &nbsp; React &nbsp;
        </SkillsText>
        <SkillsText baseVelocity={-5}>
          Teamwork &nbsp; Responsive Design &nbsp; Creative &nbsp; Problem
          Solving &nbsp;
        </SkillsText>
        <SkillsText baseVelocity={5}>
          HTML &nbsp; CSS &nbsp; Tailwind &nbsp; Javascript &nbsp; React &nbsp;
          HTML &nbsp; CSS &nbsp; Tailwind &nbsp; Javascript &nbsp; React &nbsp;
        </SkillsText> */}
      </section>
    </div>
  );
};
