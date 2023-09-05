import Image from "next/image";
import React from "react";

const Card = ({ title, name, email, number, src }) => {
  return (
    <div>
      <div className="text-white space-y-5">
        {/* image */}
        <div className="px-8">
          <div className="relative w-[200px] h-[250px]">
            <Image src={src} fill className="object-cover object-center" />
            <div className="absolute top-0 w-full h-full ring-2 ring-red-600 " />
          </div>
        </div>
        {/* details */}
        <div className="text-center space-y-1 ">
          <h3 className="font-bold text-lg uppercase">{title}</h3>
          <p>{name}</p>
          <p>{email}</p>
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
