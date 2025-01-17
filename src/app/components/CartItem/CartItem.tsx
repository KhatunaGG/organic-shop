"use client";
import { ClobalContext } from "@/app/context/Context";
import React, { useContext } from "react";
import Image from "next/image";
import { CartItemPropsType } from "@/app/interfaces/interface";


function CartItem({ cartItem }: CartItemPropsType) {
  const context = useContext(ClobalContext);
  if (!context) return;
  const {
    increment,
    decrement,
    removeCartItem,
    shoppingCartItems,
    setShoppingCartItems,
  } = context;

  return (
    <div className="cart-item w-full md:p-2">
      <div className="border border-gray-200 md:p-1 flex-grow">
        <div className="w-full flex flex-row items-center md:justify-between  py-2 ">
          <div className="capitalize text-base text-[var(--text-gray)] w-[60%] md:w-[40%] flex flex-row items-center">
            <Image src={cartItem.image} alt={""} width={100} height={100} />
            <p className="text-xs md:text-sm lg:text-sm">{cartItem.title}</p>
          </div>

          <ul className="w-full flex flex-row items-center justify-around md:justify-between  md:w-[50%] font-bold text-xs md:text-sm text-[var(--text-gray)]">
            <li
              className={`${
                cartItem.sale ? "text-red-600" : "text-[var(--text-gray)]"
              }`}
            >
              {(cartItem.sale ? cartItem.sale : cartItem.price).toFixed(2)}
            </li>
            <li className="flex flex-col md:flex-row items-center justify-center gap-2 p-2 border border-[#d9d6d6] rounded-[30px]">
              <button
                onClick={() => {
                  if (cartItem?.count !== undefined && cartItem.count > 1) {
                    decrement(cartItem._id ? cartItem._id : "");
                  } else {
                    setShoppingCartItems(
                      shoppingCartItems.filter((el) => el._id !== cartItem._id)
                    );
                  }
                }}
                className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-400 text-black  flex items-center justify-center"
              >
                -
              </button>
              <p className="">{cartItem.count}</p>
              <button
                onClick={() => increment(cartItem._id ? cartItem._id : "")}
                className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-400 text-black  flex items-center justify-center"
              >
                +
              </button>
            </li>

            <li className="">
              {cartItem?.count && typeof cartItem.count === "number"
                ? cartItem.sale && typeof cartItem.sale === "number"
                  ? "$" + Number((cartItem.sale * cartItem.count).toFixed(2))
                  : "$" + Number((cartItem.price * cartItem.count).toFixed(2))
                : "$" + Number(cartItem.price.toFixed(2))}
            </li>
          </ul>
          <div className="w-[15%] md:w-[10%] flex items-center justify-center">
            <button
              onClick={() => removeCartItem(cartItem._id ? cartItem._id : "")}
              className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded-full text-sm md:text-md "
            >
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
