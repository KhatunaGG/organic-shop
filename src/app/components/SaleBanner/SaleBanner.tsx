import React from "react";
import Image from "next/image";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const SaleBanner = () => {
  return (
    <div className="SALE w-full relative min-h-[200px]">
      <Image
        src="/assets/discount-bannar.png"
        alt="Discount Banner"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute z-30 px-[3%] lg:px-[7%] top-1/2 transform -translate-y-1/2 right-[5%] text-right flex flex-col gap-4 items-center justify-center ">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-thin text-green-500">Summer Sale</h2>
          <h1 className="text-red-600 font-bold text-4xl">
            50% <span className="text-white">OFF</span>
          </h1>
        </div>

        <div className="">
          <SecondaryButton text={'Shop Now'} location={'salebanner'} />
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
