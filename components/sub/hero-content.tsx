"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { GridGlobe } from "../grid-globe";

export const HeroContent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] w-max mt-10"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-2 w-full max-w-[1000px] mx-auto relative h-[200px]"
        >
          <div className="relative w-full h-full p-[2px] overflow-hidden rounded-[34px]">
            {/* External Active Moving Lines (Border Trail) */}
            <div className="absolute inset-0 z-0">
              <div
                className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#712fff_330deg,#b49bff_360deg)] animate-[rotate_4s_linear_infinite]"
              />
            </div>

            <div ref={ref} className="Welcome-box relative z-10 !w-full h-full py-[15px] px-[25px] border border-[#2A0E61] bg-[#030014] flex flex-col items-center justify-center rounded-[32px] overflow-hidden">
              <h1
                style={{ textShadow: "0 0 20px rgba(0,255,255,0.8), 0 0 40px rgba(128,0,128,0.8)" }}
                className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center absolute top-16 z-[30] pointer-events-none"
              >
                Hi, I&apos;m Maulana Syafikh Alkhudri
              </h1>
              <div className="w-full h-full relative z-[10]">
                {inView && <GridGlobe />}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Fullstack Developer & PTIK UNJ Student with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn more
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
