import React from "react";
import { SkillsText } from "./SkillsText";

export const Skills = () => {
  return (
    <div className="w-full">
      <div className="text-6xl text-center flex justify-center pt-16 font-bold">
        Skills
      </div>
      <section className="flex flex-col gap-6 h-[30em] justify-center">
        <SkillsText baseVelocity={5}>
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
        </SkillsText>
      </section>
    </div>
  );
};
