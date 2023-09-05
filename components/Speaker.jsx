import { speakerDescription, speakers } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import UpperDesign from "./UpperDesign";
import Wrapper from "./Wrapper";
const Speaker = () => {
  const [imageId, setImageId] = useState(1);
  const carouselRef = useRef();

  const navigation = (dir) => {
    const current = carouselRef.current;
    let left =
      dir === "left"
        ? current.scrollLeft - current.offsetWidth / 2
        : current.scrollLeft + current.offsetWidth / 2;

    current.scrollTo({
      left: left,
      behavior: "smooth",
    });
  };
  const speakerDetails = speakerDescription.find(
    (current) => current.id === imageId
  );
  return (
    <div className="text-white overflow-hidden h-auto lg:h-screen space-y-3 ">
      <Wrapper>
        <UpperDesign heading={"Speaker"} />
        {/* slider */}
        <div className="relative p-4 w-full space-y-4 lg:space-y-6">
          {/* slider card */}
          <div className="lg:px-20 ">
            <div className="w-full flex bg-[#c31f26] rounded-md flex-col-reverse lg:flex-row ">
              {/* desc */}
              <div className="p-5 flex-[1.5] space-y-1 lg:py-9 text-justify hyphens-auto ">
                <h1 className="text-3xl ">
                  <span className="font-semibold">{speakerDetails.fName}</span>
                  <span className="font-extralight">
                    {speakerDetails.lName}
                  </span>
                </h1>
                <h1 className="text-xl font-light">{speakerDetails.worker}</h1>
                <hr className=" opacity-70" />
                <p className="text-lg">{speakerDetails.description}</p>
              </div>
              {/* image */}
              <div
                className="relative aspect-[2.4/1] overflow-hidden bg-center bg-cover w-[35%] hidden lg:block"
                style={{
                  clipPath:
                    "polygon(100% 0%, 100% 50%, 100% 100%, 15% 100%, 0% 50%, 15% 0)",
                }}
              >
                <Image
                  src={speakerDetails.image}
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* image for mobile*/}
              <div className="relative aspect-square overflow-hidden bg-center bg-cover w-full block lg:hidden rounded-md">
                <Image
                  src={speakerDetails.image}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
          {/* slider card end*/}
          {/* slider images all end*/}
          <div
            className="relative overflow-hidden flex items-center w-full px-6 gap-x-10 py-2"
            ref={carouselRef}
          >
            {speakers.map((speaker) => (
              <div
                className="relative w-[100px] h-[100px] flex-shrink-0 rounded-full cursor-pointer"
                key={speaker.id}
                onClick={() => setImageId(speaker.id)}
              >
                <Image
                  src={speaker.image}
                  fill
                  alt="image"
                  className={cn(
                    "object-top overflow-hidden object-cover rounded-full w-full ",
                    speaker.id === imageId ? "grayscale-0" : "grayscale"
                  )}
                />
                <div
                  className={cn(
                    "absolute w-[100px] h-[100px] ring-4 ring-offset-4 rounded-full",
                    speaker.id === imageId ? "ring-red-500" : "ring-transparent"
                  )}
                />
              </div>
            ))}
          </div>
          {/* slider images all end*/}
          {/* right */}
          <div
            className="absolute bottom-14 left-3 rounded-full bg-black cursor-pointer"
            onClick={() => navigation("left")}
          >
            <BsArrowLeftCircle className="text-2xl text-red-600" />
          </div>
          {/* left */}
          <div
            className="absolute  bottom-14 right-3 rounded-full bg-black cursor-pointer"
            onClick={() => navigation("right")}
          >
            <BsArrowRightCircle className="text-2xl text-red-600" />
          </div>
        </div>
        {/* slider end */}
      </Wrapper>
    </div>
  );
};

export default Speaker;
