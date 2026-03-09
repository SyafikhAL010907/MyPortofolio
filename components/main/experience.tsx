"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/moving-borders";
import { workExperience } from "@/constants/experience";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 w-full relative z-10">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
        My <span className="text-purple-500">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 px-4 md:px-20">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration for each card
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these border radius to keep it separate from the animation
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.title}
                width={128}
                height={128}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
