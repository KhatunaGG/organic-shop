"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import CheckIcon from "../_atoms/CheckIcon/CheckIcon";
import { ClobalContext, InfoType } from "@/app/context/Context";
import { useRouter } from "next/navigation";

export type ArrType = {
  title: string;
  count: number | undefined;
  price: number;
  total: number;
};

const OrderSection = () => {
  const [storedOrderInfo, setStoredOrderInfo] = useState<InfoType>();
  const [show, setShow] = useState(false);
  const [arrLength, setArrLength] = useState(1);
  const router = useRouter();
  const context = useContext(ClobalContext);

  const { setInfo } = context || {};

  useEffect(() => {
    const storedInLs = JSON.parse(localStorage.getItem("orderInfo") || "{}");
    setStoredOrderInfo(storedInLs);
  }, []);

  if (!context) {
    return null;
  }

  return (
    <div className="w-full flex items-center justify-center min-h-[calc(100vh-8vh)] py-8  md:py-0">
      <div className="h-full w-full flex flex-col  md:max-w-[500px] md:flex-row items-start rounded-xl overflow-hidden bg-slate-200 shadow-xl">
        <div className="w-full p-4 md:min-w-[250px] flex flex-col gap-6 ">
          <div className="w-full flex flex-row items-center gap-4">
            <div className="w-8 h-8 border-4 border-green-700 border-double rounded-md shadow-md flex items-center justify-center">
              <CheckIcon />
            </div>
            <h2 className="text-sm text-green-700">THANK YOU FOR YOUR ORDER</h2>
          </div>

          <div className="flex flex-col rounded-lg overflow-hidden  bg-white">
            {storedOrderInfo?.orders?.slice(0, arrLength).map((item, i) => (
              <div key={i} className="flex flex-col items-start  p-2 ">
                <div className="w-full flex flex-row items-center justify-between border border-green-950 rounded-md pl-1 pr-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                  <p className="inline-block text-xs">{item.title}</p>
                  <p className="inline-block text-xs font-bold">
                    {item.sale
                      ? item.sale * (item.count || 1)
                      : item.price * (item.count || 1)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setShow(!show);
              setArrLength(show ? 1 : storedOrderInfo?.orders?.length || 1);
            }}
            className="text-xs flex items-center justify-center"
          >
            {arrLength === 1
              ? `and ${
                  storedOrderInfo?.orders
                    ? storedOrderInfo.orders.length - 1
                    : 0
                } other item(s)`
              : "View less"}
          </button>
        </div>

        <div className="w-full bg-black p-4 flex flex-col items-center justify-between gap-y-8  ">
          <div className="relative w-200 h-210">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
            <Image
              src={"/assets/order-img.png"}
              alt="Order Image"
              className="object-cover w-full h-full"
              width={200}
              height={210}
            />
          </div>

          <div className="w-full h-full bg-black space-y-4 flex flex-col items-center justify-between">
            <span className="font-bold text-white">
              Total:{" "}
              <span className="font-bold text-red-500 text-lg">
                ${" "}
                {typeof storedOrderInfo?.forPayment === "number"
                  ? storedOrderInfo.forPayment.toFixed(2)
                  : "0.00"}
              </span>
            </span>
            <button
              onClick={() => {
                localStorage.removeItem("orderInfo");
                if (setInfo) setInfo(undefined);
                router.push("/");
              }}
              className="text-white text-xs cursor-pointer"
            >
              Back to{" "}
              <span className="uppercase font-bold text-green-500 text-xs">
                Ecobazar
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
