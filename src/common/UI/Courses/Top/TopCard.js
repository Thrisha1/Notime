import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
const TopCard = ({ image, coursename, desc, no_of_people }) => {
  return (
    <div className="cards ">
      <Card
        isPressable
        isHoverable
        isBlurred
        variant="bordered"
        css={{ mw: "400px" }}
      >
        <Card.Body className="bg-gradient-to-r from-[#3e3232] to-p_grey">
          <div className="flex gap-3  ">
            <div className=" w-1/3">
              <Image
                src={image}
                className="object-cover w-full h-full"
                alt="react-image"
              />
            </div>

            <div className="flex flex-col w-2/3">
              <div className="text-[#fff] tracking-widest font-bold">
                {coursename}
              </div>
              <div className="text-p_dullgrey  font-normal ">{desc}</div>
              <div className="text-[0.8rem] mt-auto font-semibold text-blue-500">
                {" "}
                {no_of_people} People Joined
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TopCard;
