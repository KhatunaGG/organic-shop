"use client";
import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HomeIcon, EcobazarIcon, LeafIcon, ArrowRIcon } from "../_atoms";
import Image from "next/image";
import { ClobalContext } from "@/app/context/Context";

const Header = () => {
  const context = useContext(ClobalContext);
  if (!context) return null;
  const { checked } = context;

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-xl w-full flex flex-col items-start gap-4 px-[3%] lg:px-[7%] z-10">
        <div className="flex flex-row items-center gap-4">
          <LeafIcon />
          <EcobazarIcon location={"header"} />
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <HomeIcon />
          <ArrowRIcon />
          <p className="text-gray-800 text-sm">Category</p>
          <ArrowRIcon />
          <p className="text-md text-red-700 font-bold">
            {checked ? checked : "All"}
          </p>
        </div>
      </div>

      <div className="absolute w-full h-[50vh] bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        transitionTime={1000}
      >
        <div>
          <Image
            src="/assets/b1.jpg"
            alt=""
            className="h-[50vh] object-cover"
            width={500}
            height={500}
            priority
          />
        </div>
        <div>
          <Image
            src="/assets/b2.jpg"
            alt=""
            className="h-[50vh] object-cover"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/assets/b3.jpg"
            alt=""
            className="h-[50vh] object-cover"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/assets/b4.jpg"
            alt=""
            className="h-[50vh] object-cover"
            width={500}
            height={500}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
