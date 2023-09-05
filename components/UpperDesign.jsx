import Image from "next/image";
import React from "react";

const UpperDesign = ({ heading }) => {
  return (
    <div className="relative w-full flex">
      <div
        className="bg-[#b81d21] py-5 w-full px-10 flex items-center"
        style={{
          clipPath: "polygon(0% 0%, 100% 1%, 92% 80%, 90% 100%, 0% 100%)",
        }}
      >
        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-neutral-100 relative before:absolute before:w-3 before:h-3 before:-left-3 before:top-3 before:bg-red-950 before:rounded-full after:absolute after:w-3 after:h-3 after:-right-3 after:top-3 after:bg-red-950 after:rounded-full px-3 ">
          {heading}
        </h1>
      </div>
      <div className="relative w-[300px] h-[80px]">
        <Image
          src={"/assets/logo.png"}
          alt="logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default UpperDesign;
