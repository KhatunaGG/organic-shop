"use client";
import { ClobalContext } from "@/app/context/Context";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

type ButtonPropsType = {
  text: string;
  width?: string;
  rounded?: string;
  paddingY?: string;
};

const Button = ({ text, width, rounded, paddingY }: ButtonPropsType) => {
  const context = useContext(ClobalContext);
  const router = useRouter();
  if (!context) return;
  const { setButtonInnerText } = context;
  setButtonInnerText(text);

  return (
    <button
      onClick={() => {
        if (text === "Proceed to checkout") {
          router.push("/pages/checkout");
        }
      }}
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
