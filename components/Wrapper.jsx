import { cn } from "@/lib/utils";
import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div className={cn("w-full xl:mx-auto max-w-[1560px]", className)}>{children}</div>
  );
};

export default Wrapper;
