"use client";
import Image from "next/image";
import React from "react";
import CheckIcon from "../_atoms/CheckIcon/CheckIcon";

const OrderSection = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-[calc(100vh-8vh)]">
      <div className="flex flex-row items-start rounded-xl overflow-hidden bg-slate-200  shadow-xl">

        <div className="p-4 min-w-[250px] flex flex-col gap-6">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="w-8 h-8 border-4 border-green-700 border-double rounded-md shadow-md flex items-center justify-center">
              <CheckIcon />
            </div>
            <h2 className="text-sm text-green-700">THANK YOU FOR YOUR ORDER</h2>
          </div>

          <div>order</div>

          <h3>and 0 other item(s)</h3>


        </div>

        <div className="w-full relative bg-black p-4  ">
            <div className="bg-gradient-to-t from-black to-transparent">
                  <Image
            src={"/assets/order-img.png"}
            alt={""}
            className="object-cover"
            width={200}
            height={210}
          />
            </div>
        
          <div className="w-full bg-black p-4 flex flex-col items-center justify-between">
            <span className="font-bold text-green-600">
              Total: <span className="font-bold text-red-600"> $ 55</span>{" "}
            </span>
            <span className="text-green-600 text-xs">Back to shop</span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
