// "use client";
// import React from "react";
// import ArrowGreenIcon from "../_atoms/ArrowGreenIcon/ArrowGreenIcon";
// import { usePathname, useRouter } from "next/navigation";

// type SecondaryButtonPropsType = {
//   text: string;
//   location: string;
// };

// const SecondaryButton = ({ text, location }: SecondaryButtonPropsType) => {
//   const router = useRouter();
//   const path = usePathname();
//   console.log(path, "path");

//   return (
//     <>
//       {path !== "/pages/sale" && (
//         <button
//           onClick={() => {
//             location === "salebanner" && router.push("/pages/sale");
//           }}
//           className="flex gap-2 items-center justify-center bg-white rounded-2xl px-8 py-2 cursor-pointer outline-none border-none text-green-500 hover:bg-green-600 hover:text-white duration-300 ease-in-out"
//         >
//           <span className="text-xs">{text}</span>
//           <ArrowGreenIcon />
//         </button>
//       )}
//     </>
//   );
// };

// export default SecondaryButton;

"use client";
import React from "react";
import ArrowGreenIcon from "../_atoms/ArrowGreenIcon/ArrowGreenIcon";
import { usePathname, useRouter } from "next/navigation";

type SecondaryButtonPropsType = {
  text: string;
  location: string;
};

const SecondaryButton = ({ text, location }: SecondaryButtonPropsType) => {
  const router = useRouter();
  const path = usePathname();
  // console.log(path, "path");

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
