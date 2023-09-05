import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrapper from "./Wrapper";
import { scrollTo } from "@/lib/utils";

const Navbar = () => {
  return (
    <div className="px-1 lg:px-8 w-full  ">
      <Wrapper>
        <div className="w-full flex gap-x-2 lg:gap-x-0 md:justify-center lg:justify-between items-center">
          {/* logo */}
          <Link href={"/"} className="flex items-center">
            <div className="relative w-[150px] h-[100px] lg:w-[300px] lg:h-[100px] ">
              <Image
                src={"/assets/logo.png"}
                alt="logo"
                className="object-contain lg:object-contain lg:block"
                fill
              />
            </div>
            {/* logo end*/}
            <span className="bg-white/70 w-[2px] h-[30px] lg:h-[50px] rounded-full " />
            <div className="relative w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ml-3 mr-2">
              <Image
                src={"/assets/logo2.jpg"}
                alt="X"
                fill
                className="object-cover bg-[#B81D21]"
              />
            </div>
          </Link>
          {/* navbar actions */}
          <div className="flex gap-x-14 text-white items-center font-semibold text-xl tracking-widest flex-shrink ">
            <div
              onClick={() => scrollTo("herobanner")}
              className="cursor-pointer transition-colors hover:text-[#B81D21] duration-200 hidden lg:block"
            >
              <div>Home</div>
            </div>
            <div
              onClick={() => scrollTo("speakers")}
              className="cursor-pointer transition-colors hover:text-[#B81D21] duration-200 hidden lg:block"
            >
              <div>Speakers</div>
            </div>
            <div
              onClick={() => scrollTo("About")}
              className="cursor-pointer whitespace-nowrap  transition-colors hover:text-[#B81D21] duration-200 hidden lg:block"
            >
              <div>About Us</div>
            </div>
            <div
              onClick={() => scrollTo("Contact")}
              className="cursor-pointer whitespace-nowrap transition-colors hover:text-[#B81D21] duration-200 hidden lg:block"
            >
              <div>Contact Us</div>
            </div>
            <Link
              href="/login"
              className=" transition-colors hover:text-[#B81D21] duration-200 hidden lg:block"
            >
              <div>Login</div>
            </Link>

            <a
              href="#"
              className="relative border-2 py-2 px-1 lg:py-2 lg:px-4 lg:tracking-widest lg:uppercase border-[#B81D21] text-sm lg:text-lg
               text-white transition-all z-[1] bg-[#b81d21] rounded-xl lg:rounded-sm
               after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-[#b81d21] after:-z-[2] lg:after:rounded-sm after:rounded-xl
               before:absolute before:bottom-0 before:left-0 before:h-full before:bg-black before:w-0 before:transition-all before:-z-[1]
                hover:before:w-full hover:text-[#b81d21]
               "
            >
              Get Tickets
            </a>

            {/* navbar actions end */}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
