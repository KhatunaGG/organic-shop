"use client";
import { ClobalContext } from "@/app/context/Context";
import React, { useContext } from "react";
import Link from "next/link";
import Overlay from "../Overlay/Overlay";
import Image from "next/image";
import { BagIcon, HeartIcon } from "../_atoms";
import { DataType, ProductDescType } from "@/app/interfaces/interface";


function Productdescription({ params }: ProductDescType) {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { data, overlay, setOverlay, getFavorites, addToCart } = context;

  const productDetails = data.filter((item) => item._id === params);
  console.log(productDetails);

  return (
    <>
      {productDetails.map((product: DataType, i: number) => (
        <div key={i} className="w-full  mt-8 mx-auto md:pb-[100px]">
          <div className=" flex flex-col md:flex-row items-center justify-between">
            <div className="w-full h-[300px] md:h-[450px] bg-white flex items-center justify-center md:w-[40%] relative">
              <Link href={"/"}>
                <span className="absolute top-0 left-0 text-[#7d7979] font-bold  hover:text-green-600 transition-all duration-300 ease-in-out cursor-pointer">
                  Go Back
                </span>
              </Link>

              <div className="w-full relative">
                <Image
                  src={product.image}
                  alt={""}
                  width={400}
                  height={400}
                  className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] "
                />

                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-400 rounded-lg ">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-400">
                    <span
                      onClick={() => setOverlay(product.image)}
                      className="text-white text-xl font-semibold cursor-pointer py-8"
                    >
                      Zoom...
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {overlay === product.image && <Overlay />}

            <div className="w-full details flex flex-col md:w-[48%] gap-6 ">
              <div className="flex flex-col items-start gap-[20px]">
                <div className="w-full flex flex-row items-center justify-between pr-2">
                  <h1 className="font-bold text-base text-[#7d7979] w-[85%]">
                    {product.title}
                  </h1>
                  <span className="px-2 py-1 bg-green-800 text-white rounded-md text-[11px] w-[15%] flex items-center justify-center whitespace-nowrap">
                    in stock
                  </span>
                </div>
                <div className="price font-bold text-green-800 text-[18px]">
                  $ {product.price.toFixed(2)}
                </div>
                <div className="line h-[1px] w-full bg-[#d7d3d3]"></div>
              </div>

              <div className="flex flex-col items-start gap-6">
                <p className="text-sm text-[#898787]">{product.description}</p>
                <div className="line h-[1px] w-full bg-[#d7d3d3]"></div>

                <div className="w-[90%] flex flex-row items-center justify-between gap-3">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-[90%] border flex flex-row gap-3 items-center justify-center text-white text-sm font-bold py-4 rounded-[30px] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 bg-gradient-to-b from-green-500 to-yellow-400 focus:ring-yellow-300 active:from-yellow-300"
                  >
                    <span>Add to Cart</span>
                    <BagIcon width="20px" hight="20px" />
                  </button>

                  <button
                    onClick={() => getFavorites(product)}
                    className="outline-none top-[2%] right-[2%] bg-[#F2F2F2] w-[40px] h-[40px] rounded-full flex items-center justify-center "
                  >
                    <HeartIcon height="24px" width="24px" product={product} />
                  </button>
                </div>

                <div className="w-full flex flex-row items-center gap-2">
                  <span className="text-sm text-black">Category:</span>
                  <span className="text-sm text-[#898787]">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Productdescription;
