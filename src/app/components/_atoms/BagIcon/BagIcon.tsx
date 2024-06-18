import React from "react";

type BagIconPropsType = {
  width: string;
  hight: string;
};

function BagIcon({ width, hight }: BagIconPropsType) {
  return (
    <svg
    className={`${width} ${hight}`}
      width="34"
      height="35"
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3333 14.6667H7.08333L4.25 30.25H29.75L26.9167 14.6667H22.6667M11.3333 14.6667V10.4167C11.3333 7.28705 13.8704 4.75 17 4.75V4.75C20.1296 4.75 22.6667 7.28705 22.6667 10.4167V14.6667M11.3333 14.6667H22.6667M11.3333 14.6667V18.9167M22.6667 14.6667V18.9167"
        stroke="#706d6d"
        // stroke-width="1.5"
        strokeWidth="1.5"
        // stroke-linecap="round"
        strokeLinecap="round"
        // stroke-linejoin="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BagIcon;
