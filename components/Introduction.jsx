import React from "react";
import Image from "next/image";
import Wrapper from "./Wrapper";
import UpperDesign from "./UpperDesign";

const Introduction = () => {
  return (
    <div className="relative overflow-hidden lg:h-screen w-full h-auto">
      <Wrapper className={"w-full space-y-3 lg:space-y-1"}>
        <UpperDesign heading={"What is Tedx Smiu"} />
        <div className="w-full block lg:flex lg:gap-x-14">
          <div className="relative aspect-square overflow-hidden flex-1 hidden lg:block">
            <Image
              src={"/assets/xlogo.jpg"}
              fill
              alt="image"
              className="opacity-40 object-cover"
            />
          </div>
          <div className="relative text-white lg:aspect-square lg:flex-1 h-full lg:h-auto z-[2]">
            {/* for mobile image */}
            <div className="absolute w-full h-full lg:hidden opacity-30 bg-[url('/assets/xlogo.jpg')] bg-center bg-no-repeat bg-cover -z-[1]"></div>
            
            <div className="flex flex-col justify-center px-4 md:px-5 lg:px-6 lg:gap-y-4  font-medium text-justify hyphens-auto h-full opacity-100 z-0">
              <p className="text-xl">
                Welcome to TEDx SMIU, an independently organized TED event
                hosted by Sindh Madressatul Islam University (SMIU) where ideas
                worth spreading come to life! Join us for an inspiring day
                filled with thought-provoking talks, interactive discussions,
                and an opportunity to connect with like-minded individuals.
              </p>
              <p className="text-xl py-6 ">
                TEDx SMIU aims to bring together a diverse group of speakers
                from various disciplines, each with a unique perspective and
                groundbreaking ideas. The talks will cover a wide range of
                topics, including technology, education, science, arts, social
                issues, and more. This event is an excellent opportunity to gain
                insights, ignite your curiosity, and be part of a community that
                fosters change.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Introduction;
