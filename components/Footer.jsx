import React from "react";
import Wrapper from "./Wrapper";
import { CiFacebook } from "react-icons/ci";
import { ImInstagram } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaGofore,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white flex pt-12 bg-black lg:h-[300px]">
      <Wrapper>
        <div className="w-full bg-[#c31f26] text-white lg:px-10 px-5 flex lg:flex-row flex-col">
          <div className="lg:w-1/2 py-4 pr-4 text-justify space-y-4">
            <h1 className="font-bold text-3xl">What is TEDx Smiu?</h1>
            <p className="font-medium text-neutral-200">
              A TEDx event is a local gathering where live TED-like talks and
              videos previously recorded at TED conferences are shared with the
              community. TEDx events are fully planned and coordinated
              independently on a community-by-community basis.
            </p>
          </div>
          <div className="lg:w-1/2 py-4 lg:pl-28 text-justify">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">Follow Us On Social Media</h1>
            <div className="py-5 lg:space-x-6 flex flex-wrap gap-x-4 gap-y-4 lg:gap-0">
              <a href="">
                <span className="w-16 h-16  rounded-full flex items-center justify-center p-4 ring-2 ring-transparent ring-offset-2 transition-all hover:scale-110">
                  <FaFacebookF size={45} />
                </span>
              </a>
              <a href="">
                <span className="w-16 h-16 rounded-full flex items-center justify-center p-4 ring-2 ring-transparent ring-offset-2 transition-all hover:scale-110">
                  <ImInstagram size={45} />
                </span>
              </a>
              <a href="">
                <span className="w-16 h-16 rounded-full flex items-center justify-center p-4 ring-2 ring-transparent ring-offset-2 transition-all hover:scale-110">
                  <FaTwitter size={45} />
                </span>
              </a>
              <a href="">
                <span className="w-16 h-16 rounded-full flex items-center justify-center p-4 ring-2 ring-transparent ring-offset-2 transition-all hover:scale-110">
                  <HiOutlineMail size={45} />
                </span>
              </a>
              <a href="">
                <span className="w-16 h-16 rounded-full flex items-center justify-center p-4 ring-2 ring-transparent ring-offset-2 transition-all hover:scale-110">
                  <FaLinkedinIn size={45} />
                </span>
              </a>
              {/* <span> */}
              {/* <ImInstagram/> */}
              {/* </span> */}
            </div>
          </div>
        </div>
        <div className="bg-[#c31f26]  px-10 py-5">
        <hr className="opacity-40"/>
        <div className="text-center text-black mt-4">
        <span className="text-black font-semibold text-lg block lg:inline">&copy; {new Date().getFullYear()} TEDxSMIU</span>
        <span className="ml-2 w-4 h-4 text-2xl font-semibold hidden lg:inline-block">|</span>
        <span className="ml-2 block lg:inline">This independent TEDx event is operated underlicense from TED.</span>
        </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
