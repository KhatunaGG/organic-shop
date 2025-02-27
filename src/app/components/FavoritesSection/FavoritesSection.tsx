"use client";
import { ClobalContext } from "@/app/context/Context";
import React, { useContext } from "react";
import Product from "../Product/Product";
import Scroll from "../Scroll/Scroll";
import BackLink from "../_atoms/BackLink";

const FavoritesSection = () => {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { favorites } = context;

  return (
    <div className="w-full  min-h-[calc(100vh-267.2px)]">
      <BackLink />
      <div className="w-full h-max mt-8 mb-10 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {favorites.length === 0 && (
          <div className="w-full py-6 flex items-center justify-center text-red-600 text-base lg:text-lg ">
            No favorite items
          </div>
        )}
        {favorites.map((product, i) => (
          <Product key={i} product={product} />
        ))}
        <Scroll />
      </div>
    </div>
  );
};

export default FavoritesSection;
