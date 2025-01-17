"use client";
import ArrowGreenIcon from "../_atoms/ArrowGreenIcon/ArrowGreenIcon";
import { useRouter } from "next/navigation";
import { SecondaryButtonPropsType } from "@/app/interfaces/interface";

const SecondaryButton = ({ text }: SecondaryButtonPropsType) => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          router.push("/pages/sale");
        }}
        className="flex gap-2 items-center justify-center bg-white rounded-2xl px-8 py-2 cursor-pointer outline-none border-none text-green-500 hover:bg-green-600 hover:text-white duration-300 ease-in-out"
      >
        <span className="text-xs">{text}</span>
        <ArrowGreenIcon />
      </button>
    </>
  );
};

export default SecondaryButton;
