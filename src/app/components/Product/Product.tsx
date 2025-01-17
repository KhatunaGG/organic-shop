"use client";
import { ClobalContext, DataType } from "@/app/context/Context";
import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { BagIcon, HeartIcon } from "../_atoms";
import Image from "next/image";
import { axiosInstance } from "@/app/libs/axiosinstance";
import { useRouter } from "next/navigation";
import axios from "axios";

type ProductPropsType = {
  product: DataType;
};

const Product = ({ product }: ProductPropsType) => {
  const router = useRouter();
  const context = useContext(ClobalContext);
  if (!context) return;
  const { addToCart, getFavorites, favorites } = context;

  const getProductById = async (id: string) => {
    try {
      const res = await axiosInstance.get(`/products/${id}`);
      if (res.status === 200 || res.status === 201) {
        router.push(`/pages/Details/${product._id}`);
      }
    } catch (error) {
      let message = "An unexpected error occurred.";
      if (axios.isAxiosError(error) && error.response) {
        message = error.response.data.message || message;
      }
    }
  };

  return (
    <div className="flex flex-col flex-grow bg-white    items-center    shadow-xl rounded-lg relative group">
      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg ">
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span
            onClick={() => getProductById(product._id ? product._id : "")}
            className="text-white text-xl font-semibold cursor-pointer py-8"
          >
            Quick View
          </span>
        </div>
      </div>

      <button
        onClick={() => getFavorites(product)}
        className="outline-none absolute right-[3%] top-[3%] w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center  hover:bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 "
      >
        <HeartIcon product={product} width={"w-6"} height={"h-6"} />
      </button>
      <div className="w-full flex items-center justify-center">
        <Image src={product.image} alt={""} width={200} height={200} />
      </div>
      <div className="w-full p-4">
        <div>
          <h2 className="w-full text-left  pt-2">{product.title}</h2>
          <h2 className="w-full text-left font-bold text-green-900 flex items-center gap-4">
            <span className={`${product.sale ? "line-through" : ""}`}>
              ${product.price.toFixed(2)}
            </span>
            {product.sale && (
              <span className="text-red-600">${product.sale.toFixed(2)}</span>
            )}
          </h2>

          <Stack className="w-full text-left pb-4 pt-4" spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={product.rating.rate}
              precision={0.5}
              readOnly
            />
          </Stack>
        </div>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="outline-none absolute right-[3%] bottom-[3%] w-10 h-10 rounded-full bg-green-300 flex items-center justify-center transition-all duration-300 ease-in-out  hover:bg-green-500 "
      >
        <BagIcon width={"w-6"} hight={"h-6"} />
      </button>
    </div>
  );
};

export default Product;
