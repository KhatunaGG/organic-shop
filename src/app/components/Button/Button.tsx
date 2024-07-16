"use client";
import { ClobalContext } from "@/app/context/Context";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

type ButtonPropsType = {
  text: string;
  width?: string;
  rounded?: string;
  paddingY?: string;
};


// export type ArrType = {
//   title: string;
//   count: number | undefined;
//   price: number;
//   total: number;
// };

const Button = ({ text, width, rounded, paddingY }: ButtonPropsType) => {
  // const [invoice, setInvoice] = useState({});



  
  const context = useContext(ClobalContext);
  const router = useRouter();
  if (!context) return;
  const { setButtonInnerText, shoppingCartItems, info, total } = context;
  setButtonInnerText(text);

  // console.log(invoice, 'invoice from button')
  


  // function generateId(): string {
  //   const now = new Date();
  //   const id = `${now.getFullYear()}${(now.getMonth() + 1)
  //     .toString()
  //     .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}${now
  //     .getHours()
  //     .toString()
  //     .padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now
  //     .getSeconds()
  //     .toString()
  //     .padStart(2, "0")}${now.getMilliseconds().toString().padStart(3, "0")}`;
  //   return id;
  // }

  // const getInvoice = () => {
  //   const arr: ArrType[] = shoppingCartItems.map((item) => ({
  //     title: item.title,
  //     count: item.count ?? 1,
  //     price: item.price,
  //     total: item.price * (item.count ?? 1),
  //   }));
  //   console.log(arr, "arr");

  //   const newObj = {
  //     ...info,
  //     purchase: arr,
  //     total: total <= 50 ? (total + 3.99).toFixed(2) : total,
  //     id: generateId(),
  //   };

  //   setInvoice(newObj);
  // };


  return (
    <button
      onClick={() => {
        if (text === "Proceed to checkout") {
          router.push("/pages/checkout");
          // getInvoice()

        }
      }}
      type={text === 'Place Order' ? "submit" : "button"}
      style={{
        width: width,
        borderRadius: rounded,
        paddingTop: paddingY,
        paddingBottom: paddingY,
      }}
      className="outline-none px-4 py-2 text-sm bg-gradient-to-b from-green-500 to-yellow-300 
      border border-yellow-300 rounded-r-md
      focus:outline-none focus:ring-2 focus:ring-yellow-300 active:from-yellow-300"
    >
      {text}
    </button>
  );
};

export default Button;
