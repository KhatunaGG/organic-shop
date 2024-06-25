"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HomeIcon, EcobazarIcon, LeafIcon, ArrowRIcon } from "../_atoms";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-xl w-full flex flex-col items-start gap-4 px-[3%] lg:px-[7%] z-10">
        <div className="flex flex-row items-center gap-4">
          <LeafIcon />
          <EcobazarIcon />
        </div>

        <div className="flex flex-row space-x-2 items-center">
          <HomeIcon />
          <ArrowRIcon />
          <p className="text-gray-800 text-xs">Category</p>
          <ArrowRIcon />
          <p className="text-xs text-red-700 font-bold">Vegetables</p>
        </div>
      </div>

      <div className="absolute w-full h-[50vh]  bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
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
          <Image src="/assets/b1.jpg" alt={""}  className="h-[50vh] object-cover" width={500} height={500} />

          {/* <img
            loading="lazy"
            className="h-[50vh] object-cover"
            src="/assets/b1.jpg"
            alt=""
          /> */}
        </div>

        <div>

        <Image src="/assets/b2.jpg" alt={""}  className="h-[50vh] object-cover" width={500} height={500}  />
          {/* <img
            loading="lazy"
            className="h-[50vh] object-cover"
            src="/assets/b2.jpg"
            alt=""
          /> */}
        </div>

        <div>
        <Image src="/assets/b3.jpg" alt={""}  className="h-[50vh] object-cover" width={500} height={500}  />
          {/* <img
            loading="lazy"
            className="h-[50vh] object-cover"
            src="/assets/b3.jpg"
            alt=""
          /> */}
        </div>

        <div>
        <Image src="/assets/b4.jpg" alt={""}  className="h-[50vh] object-cover" width={500} height={500}  />
          {/* <img
            loading="lazy"
            className="h-[50vh] object-cover"
            src="/assets/b4.jpg"
            alt=""
          /> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
