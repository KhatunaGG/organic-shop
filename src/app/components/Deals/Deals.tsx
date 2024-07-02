import React from "react";
import ArrowGreenIcon from "../_atoms/ArrowGreenIcon/ArrowGreenIcon";

const Deals = () => {
  return (
    <div
      className="hidden md:flex w-full md:min-h-[320px] lg:min-h-[420px] justify-center md:mt-10 lg:mt-12 rounded-lg "
      style={{
        backgroundImage: "url('/assets/banner2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white uppercase pt-[5%] flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs font-thin text-green-500">Best Deals</div>
          <h2 className="uppercase">Sale of the Day</h2>
        </div>

        {/* <button className="flex gap-2 items-center justify-center bg-white rounded-2xl px-8 py-2 cursor-pointer outline-none border-none hover:bg-green-600 hover:text-white duration-300 ease-in-out">
          <span className="text-xs text-green-500">Shop Now</span>
          <ArrowGreenIcon />
        </button> */}

        <button className="flex gap-2 items-center justify-center bg-white rounded-2xl px-8 py-2 cursor-pointer outline-none border-none text-green-500 hover:bg-green-600 hover:text-white duration-300 ease-in-out">
          <span className="text-xs">Shop Now</span>
          <ArrowGreenIcon />
        </button>
      </div>
    </div>
  );
};

export default Deals;
