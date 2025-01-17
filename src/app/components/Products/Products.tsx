"use client";
import { ClobalContext } from "@/app/context/Context";
import React, { useContext } from "react";
import Product from "../Product/Product";
import Filter from "../Filter/Filter";
import Scroll from "../Scroll/Scroll";
import Image from "next/image";

const Products = () => {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { data, value } = context;

  return (
    <div className="mx-auto gap-[2%] flex flex-row items-center md:items-start mt-8 mb-10">
      <Filter />

      <div className="w-full  grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:w-[73%]  gap-x-4 gap-y-4">
        {data
          .filter((item) => item.price >= value[0] && item.price <= value[1])
          .slice(0, 6)
          .map((item, i) => (
            <Product key={i} product={item} />
          ))}
        <Image
          src="/assets/Breadcrumbs.png"
          alt={""}
          width={800}
          height={150}
          className="col-span-full shadow-md h-[15vh] mt-10 mb-10"
        />

        <div className="md:col-span-2">
          {data
            .filter((item) => item.price >= value[0] && item.price <= value[1])
            .slice(6, 7)
            .map((item, i) => (
              <Product key={i} product={item} />
            ))}
        </div>

        {data
          .filter((item) => item.price >= value[0] && item.price <= value[1])
          .slice(7, data.length)
          .map((item, i) => (
            <Product key={i} product={item} />
          ))}
      </div>
      <Scroll />
    </div>
  );
};

export default Products;
