"use client";
import { ClobalContext } from "@/app/context/Context";
import React, { useContext } from "react";
import { BagIcon, HeartIcon } from "../_atoms";
import SignSection from "../SignSection/SignSection";

const Intro = () => {
  const context = useContext(ClobalContext);
  if (!context) return null;
  const {
    shoppingCartItems,
    totalCount,
    favorites,
    total,
    currentUser,
    logout,
    accessToken
  } = context;

  return (
    <section className="w-full h-[15vh] md:h-[8vh] bg-green-950 flex flex-row items-center flex-grow justify-between px-[3%] lg:px-[7%] ">
      <div className="w-full flex flex-row ">
        <div className="w-[10%] md:w-0 md:hidden bg-pink-200 flex items-center justify-center">
          ddd
        </div>

        <div className="w-[90%] md:w-full  flex flex-col items-center md:justify-between md:flex-row gap-1 ms:gap-0">
          <div className="w-full md:w-[50%] flex flex-row justify-end md:justify-start gap-4">
            <div className="relative">
              <HeartIcon width="w-6" height="h-6" />
              <div className="w-5 h-5 rounded-full bg-[#ffffff65] absolute top-[-2px] right-[-9px] flex items-center justify-center text-red-600 font-bold text-sm ">
                {accessToken ? favorites.length : 0}
              </div>
            </div>

            <div className="line w-[1px] h-[25px] bg-[#706d6d]"></div>
            <div className="relative">
              <BagIcon width={"w-6"} hight={"h-6"} />
              <div className="w-5 h-5 rounded-full bg-[#ffffff65] absolute top-[-2px] right-[-9px] flex items-center justify-center text-red-600 font-bold text-sm ">
                {totalCount ? totalCount : 0}
              </div>
            </div>

            {shoppingCartItems.length > 0 && (
              <div className="flex flex-row space-x-2 items-center  whitespace-nowrap">
                <p className="text-[14px] text-[#898787] text-sm">
                  Shopping cart:
                </p>
                <p className="text-[13px] text-[#898787] font-bold text-base  ">
                  $ {total ? total.toFixed(2) : 0.0}
                </p>
              </div>
            )}
          </div>
          {!currentUser ? (
            <SignSection />
          ) : (
            <div className="flex gap-1 text-white items-center text-xs">
              <span>{currentUser.name}</span>
              <span>{currentUser.email}</span>
              <div className="space-x-3">
                <button onClick={logout} className="text-white text-xs">
                  {" "}
                  / log out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
