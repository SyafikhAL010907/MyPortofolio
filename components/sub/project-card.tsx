"use client";

import Image from "next/image";
import { PinContainer } from "../ui/3d-pin";
import { GridGlobe } from "../grid-globe";
import { useInView } from "react-intersection-observer";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  isGlobe?: boolean;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  isGlobe = false,
}: ProjectCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="flex items-center justify-center sm:w-[350px] w-[80vw]">
      <PinContainer title="Visit" href={link}>
        <div className="relative flex items-center justify-center sm:w-[350px] w-[80vw] overflow-hidden h-[30vh] mb-10">
          <div
            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
            style={{ backgroundColor: "#13162D" }}
          >
            <img src="/bg.png" alt="bgimg" />
          </div>
          {isGlobe ? (
            <div className="z-10 absolute inset-0 flex items-center justify-center">
              {inView && <GridGlobe />}
            </div>
          ) : (
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="z-10 absolute bottom-0"
            />
          )}
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
          {title}
        </h1>

        <p
          className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-gray-200"
          style={{
            margin: "1vh 0",
          }}
        >
          {description}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {/* Tech stack icons could go here if available */}
          </div>

          <div className="flex justify-center items-center">
            <p className="flex lg:text-xl md:text-xs text-sm text-purple-500">
              Check Live Site
            </p>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

