import React, { useState } from "react";
import jj from "../assets/JJ.jpg";
import { Accordion } from "./Accordion";

export const About = () => {
  return (
    <div className="">
      <div
        id="about"
        className="text-5xl md:text-6xl text-center flex justify-center py-16 font-bold"
      >
        About
      </div>
      <div className="relative flex flex-col md:flex-row items-center gap-10 md:gap-20 px-10 md:px-20 md:my-10">
        <div className="relative w-full md:w-2/3 h-[38em] rounded-2xl shadow-xl border-black">
          <img
            className="object-cover h-full w-full -z-10 rounded-2xl"
            src={jj}
            alt="Enda Rae"
          />
        </div>
        <div className="w-full h-fit flex flex-col gap-4 text-xl text-justify">
          <p className="font-bold text-2xl md:text-3xl">
            I'm a passionate frontend developer dedicated to crafting seamless
            user experiences and driving digital transformation.
          </p>
          <p>
            With a keen eye for detail, I specialize in building responsive
            websites that deliver exceptional user interfaces, adeptly
            translating Figma designs into functional, engaging experiences.
          </p>
          <Accordion title="My expertise lies in:">
            <ul className="list-disc ml-2 grid md:grid-cols-2 gap-x-6">
              <li>Responsive web design</li>
              <li>User experience (UX) optimization</li>
              <li>Figma to code implementation</li>
              <li>Critical thinking and problem-solving</li>
              <li>Cross-functional team collaboration</li>
            </ul>
          </Accordion>
          <p>
            I thrive on continuous learning and actively engage with tech
            communities, both as a volunteer and collaborator. This commitment
            to growth allows me to adapt to new challenges and contribute
            innovative solutions in any environment.
          </p>
          <p>
            My professional skills are complemented by creative pursuits. I
            contribute to my church's media department as a photographer and
            occasionally capturing moments of beauty that inspire me. Poetry
            serves as my method of decompression, and I have a fondness for
            anime. Currently, I'm expanding my linguistic horizons by learning
            Japanese.
          </p>
          <Accordion title="Key soft skills:">
            <ul className="list-disc ml-2 flex flex-col">
              <li>Meticulous attention to detail</li>
              <li>Strong teamwork and collaboration abilities</li>
              <li>Adaptability and eagerness to learn</li>
            </ul>
          </Accordion>
          <p>
            I'm seeking a dynamic role at a forward-thinking tech company where
            I can leverage my skills to enhance user experiences and contribute
            to digital innovation. If you believe I'd be a valuable addition to
            your team, please contact me at{" "}
            <a
              className="underline hover:font-semibold inline-flex"
              href="mailto:jblessedagboola@gmail.com"
            >
              jblessedagboola@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
