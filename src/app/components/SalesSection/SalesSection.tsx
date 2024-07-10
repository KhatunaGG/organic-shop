"use client";
import { ClobalContext } from "@/app/context/Context";
import React, { useContext } from "react";
import Product from "../Product/Product";
import Scroll from "../Scroll/Scroll";

const SalesSection = () => {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { data } = context;
  const salesData = data.filter((el) => el.sale);
  console.log(salesData, "salesData");
  return (

      <div className="w-full mt-8 mb-10 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {salesData.length === 0 && (
          <div className="w-full py-6 flex items-center justify-center text-red-600 text-base lg:text-lg ">
            No items
          </div>
        )}
        {salesData.map((product, i) => (
          <Product key={i} product={product} />
        ))}
        <Scroll />
      </div>
   
  );
};

export default SalesSection;
