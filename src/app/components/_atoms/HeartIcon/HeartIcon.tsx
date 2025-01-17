"use client";
import { ClobalContext } from "@/app/context/Context";
import { HeartIconPropsType } from "@/app/interfaces/interface";
import { useContext } from "react";

function HeartIcon({ product, width, height }: HeartIconPropsType) {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { favorites } = context;

  const isFavorite = favorites.some((item) => item._id === product?._id);

  return (
    <svg
      className={`${width} ${height}`}
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill={isFavorite ? "red" : "transparent"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.999 28.5722C-10.6672 13.8334 7.9995 -2.16662 15.999 7.95079C23.9995 -2.16663 42.6661 13.8334 15.999 28.5722Z"
        stroke="#706d6d"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default HeartIcon;
