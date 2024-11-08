"use client";
import React, { useContext } from "react";
import Button from "../Button/Button";
import Image from "next/image";
import { ClobalContext } from "@/app/context/Context";

const OrderSummery = () => {
  const context = useContext(ClobalContext);
  if (!context) return;
  const {
    shoppingCartItems,
    totalPrice,
    totalCount,
    setShoppingCartItems,
    handleRadioChange,
    isRadioChecked,
    total
  } = context;


  return (
    <div className="right-side w-full  border border-[#e1dfdf] shadow-md rounded-md p-6 flex flex-col gap-4 ">
      <h2 className="font-bold tracking-wide text-green-950 text-[18px]">
        Order Summery
      </h2>

      {shoppingCartItems.map((item, i) => (
        <div key={i} className="flex flex-col items-start gap-2 border border-slate-300 px-2 rounded-lg">
          <div className="w-full flex flex-row items-center justify-between">
            <Image src={item.image} alt={""} width={50} height={50} />
            {/* <img className="w-[50px] h-[50px]" src="" alt="" /> */}
            <p className="inline-block text-xs">{item.title}</p>
            <p className="inline-block text-xs font-bold">{item.sale ? item.sale * (item.count || 1) : item.price * (item.count || 1)}</p>
          </div>
        </div>
      ))}

      <div className="w-full flex-col items-center ">
        <div className="flex flex-row items-center justify-between py-[12px] border-b border-b-[#e1dfdf] ">
          <div>Subtotal:</div>
          <div>$ {shoppingCartItems.length > 0 ? total.toFixed(2) : "0.00"}</div>
        </div>

        <div className="flex flex-row items-center justify-between py-[12px] border-b border-b-[#e1dfdf] ">
          <div>Shipping:</div>
          <div className={`${total > 50 && "text-green-700 font-bold"}`}>
            {total <= 50.0 ? 3.99 : "Free"}
          </div>
        </div>

        <div className="flex flex-row items-center justify-between py-[12px] border-b border-b-[#e1dfdf] font-bold text-green-900">
          <div>Total:</div>
          <div className="">
            {/* $
            {totalPrice <= 50.0
              ? (totalPrice + 3.99).toFixed(2)
              : (totalPrice + 0).toFixed(2)} */}
            ${" "}
            {shoppingCartItems.length > 0
              ? total <= 50.0
                ? (total + 3.99).toFixed(2)
                : total.toFixed(2)
              : "0.00"}
          </div>
        </div>
      </div>

      <div className="w-full items-start flex flex-col gap-2">
        <h2 className="font-bold tracking-wide text-green-950 text-[18px]">
          Payment Method
        </h2>

        <div className="w-full flex flex-row items-center gap-2 text-xs lg:text-sm">
          <input
            onChange={() => handleRadioChange("cash")}
            checked={isRadioChecked === 'cash'}
            type="radio"
            name="payment"
            id="cod"
            value="cod"
            className="custom-radio"
          />
          <label htmlFor="cash">Cash on Delivery</label>
        </div>

        <div className="w-full flex flex-row items-center gap-2 text-xs lg:text-sm">
          <input
            onChange={() => handleRadioChange("paypal")}
            checked={isRadioChecked === "paypal"}
            type="radio"
            name=""
            id=""
            value=""
            className="custom-radio"
          />
          <label htmlFor="paypal">Paypal</label>
        </div>

        <div className="w-full flex flex-row items-center gap-2 text-xs lg:text-sm">
          <input
            onChange={() => handleRadioChange("amazone")}
            checked={isRadioChecked === "amazone"}
            type="radio"
            name=""
            id=""
            value=""
            className="custom-radio"
          />
          <label htmlFor="amazone">Amazon Pay</label>
        </div>
      </div>

      <Button text={"Place Order"} rounded="30px" />
    </div>
  );
};

export default OrderSummery;
