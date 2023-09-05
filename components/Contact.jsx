import React from "react";
import UpperDesign from "./UpperDesign";
import Wrapper from "./Wrapper";
import Card from "./Card";
const Contact = () => {
  return (
    <div className="lg:h-screen h-auto">
      <Wrapper className={"h-full"}>
        <UpperDesign heading={"Contact Us"} />
        <div className="lg:pt-16 lg:px-10 pt-4">
          <div className="flex items-center lg:gap-x-24 justify-center flex-col lg:flex-row gap-y-5">
            <Card
              title={"Lead Organizer"}
              name={"Murtaza Lashari"}
              email={"lashari.murtaza1@gmail.com"}
              number={"+92-321-1242710"}
              src={"/assets/d2.jpg"}
            />
            <Card
              title={"DIRECTOR CORPORATE"}
              name={"Sufiyan Arshad"}
              email={"Sufiyanarshad08@gmail.com"}
              number={"+92-305-2740966"}
              src={"/assets/d3.jpg"}
            />
            <Card
              title={"PUBLIC RELATIONS"}
              name={"Javeria Hameed"}
              email={"javeriahameed06@gmail.com"}
              number={"+92-333-3795017"}
              src={"/assets/dummyimage.jpg"}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
