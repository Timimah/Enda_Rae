import React from "react";
import jj from "../assets/JJ.jpg";

export const About = () => {
  return (
    <div className="">
      <div id="about" className="text-6xl text-center flex justify-center py-16 font-bold">
        About
      </div>
      <div className="grid grid-cols-2 gap-20 px-20 my-10">
      <div className="relative rounded-lg shadow-xl border-black">
          <img className="object-cover -z-10 rounded-lg" src={jj} alt="Enda Rae" />
        </div>
        <div className="w-full text-2xl py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          mollitia, officia asperiores repellat tempora dolorem maxime sequi
          reprehenderit molestias ad autem necessitatibus blanditiis. Illum,
          molestiae. Quas libero ducimus commodi architecto?
        </div> 
      </div>
    </div>
  );
};
