"use client";
import React, { useContext } from "react";
import { ClobalContext } from "@/app/context/Context";
import { useRouter } from "next/navigation";
import { CartTotalPropsType } from "@/app/interfaces/interface";

const CartTotal = ({ totalPrice }: CartTotalPropsType) => {
  const router = useRouter();
  const context = useContext(ClobalContext);
  if (!context) return;
  const { total, shoppingCartItems, accessToken } = context;
  const Shipping = 3.99;
  console.log(totalPrice);

  const proceedToCheckout = () => {
    if (accessToken && shoppingCartItems.length > 0) {
      router.push("/pages/checkout");
    } else {
      router.push("/pages/signup");
    }
  };

  return (
    <>
      <div className="cart-total w-full md:w-[29%] p-[24px] border border-gray-200 shadow-md flex flex-col gap-4">
        <h2 className="text-base font-bold">Cart Total</h2>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between border-b border-b-gray-200 py-3">
            <span>Subtotal:</span>
            <span className="font-bold">
              $ {total ? total.toFixed(2) : 0.0}
            </span>
          </div>

          <div className="flex flex-row items-center justify-between border-b border-b-gray-200 py-3">
            <span>Shipping:</span>
            <span className={`${total >= 50.0 && "text-green-600"} font-bold`}>
              {" "}
              {total <= 50.0 ? "$" : ""}
              {total <= 50.0 ? 3.99 : "Free"}
            </span>
          </div>

          <div className="flex felx-row items-center justify-between border-b border-b-gray-200 py-3">
            <span>Total:</span>
            <span className="font-bold">
              {shoppingCartItems.length > 0 && total <= 50.0
                ? (total + Shipping).toFixed(2)
                : total > 50.0
                ? total.toFixed(2)
                : 0.0}
            </span>
          </div>
        </div>
        <button
          onClick={proceedToCheckout}
          className="w-full outline-none  py-4  bg-gradient-to-b from-green-500 to-yellow-300 
      border border-yellow-300 rounded-[50px]
      focus:outline-none focus:ring-2 focus:ring-yellow-300 active:from-yellow-300 font-bold tracking-wider text-base"
        >
          Proceed to checkout
        </button>
      </div>
    </>
  );
};

export default CartTotal;
