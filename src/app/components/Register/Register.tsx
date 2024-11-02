"use client";
import { ClobalContext } from "@/app/context/Context";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Register = () => {
  const router = useRouter();
  const path = usePathname();
  const context = useContext(ClobalContext);
  if (!context) return;
  const { handleChange, isChecked, setIsChecked } = context;


  return (
    <div className="w-full md:w-[50%] flex flex-col gap-8 p-6 rounded-md shadow-md">
      <h1 className="font-bold tracking-wide text-green-950 text-[18px]">
        Sign Up
      </h1>

      <form  className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="">Email</label>
          <input

            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
            placeholder="Email"
            type="text"

            required
          />
        </div>

        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="">Password</label>
          <input

            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
            placeholder="Password"
            type="password"

            required
          />
        </div>

        <button
          type="submit"
          className="w-full outline-none  py-4  bg-gradient-to-b from-green-500 to-yellow-300 
      border border-yellow-300 rounded-md
      focus:outline-none focus:ring-2 focus:ring-yellow-300 active:from-yellow-300 font-bold tracking-wider text-base"
        >
          Sign up
        </button>
      </form>

      <div className="w-full flex flex-row items-center justify-start gap-2 text-xs lg:text-sm">
        <input
          onChange={() => handleChange(path)}
          type="checkbox"
          checked={isChecked === path}
          name=""
          id=""
        />
        <label htmlFor="">
          Already have an account?
          <span
            onClick={() => {
              if (isChecked === path) {
                router.push("/pages/signin");
                setIsChecked("");
              }
            }}
            className="font-bold text-green-800 cursor-pointer"
          >
            {" "}
            Sign in
          </span>
        </label>
      </div>
    </div>
  );
};

export default Register;
