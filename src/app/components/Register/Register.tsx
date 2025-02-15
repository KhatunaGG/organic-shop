"use client";
import { ClobalContext } from "@/app/context/Context";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { axiosInstance } from "@/app/libs/axiosinstance";
import { ORGANIC_SHOP_URI } from "@/app/constants/constants";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUpType } from "@/app/interfaces/interface";
import { schema } from "@/app/schema/RegisterSchema";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const path = usePathname();
  const context = useContext(ClobalContext);
  console.log(errorMessage);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<signUpType>({
    resolver: yupResolver(schema),
  });

  if (!context) return null;
  const { handleChange, isChecked, setIsChecked } = context;

  const onSubmit = async (data: signUpType) => {
    try {
      const res = await axiosInstance.post("/auth/sign-up", data);
      console.log(res, "responsss");
      if (res.status === 200 || res.status === 201) {
        router.push(`${ORGANIC_SHOP_URI}/pages/signin`);
        reset();
      }
    } catch (error) {
      let message = "An unexpected error occurred.";
      if (axios.isAxiosError(error) && error.response) {
        if (
          error.response.status === 400 &&
          error.response.data.message === "User already exists"
        ) {
          message =
            "User with this email already exists. Please try another email.";
        } else {
          message = error.response.data.message || message;
        }
      }
      toast.error(message, {
        position: "top-left",
        autoClose: 2000,
      });
    } finally {
      setErrorMessage("");
      reset();
    }
  };

  return (
    <div className="w-full md:w-[50%] flex flex-col gap-4 p-6 rounded-md shadow-md">
      <h1 className="font-bold tracking-wide text-green-950 text-[18px]">
        Sign Up
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6"
      >
        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="name">Name</label>
          <input
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
            placeholder="Name"
            type="text"
            {...register("name")}
          />
          {errors.name && (
            <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px] rounded-md">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="email">Email</label>
          <input
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
            placeholder="Email"
            type="text"
            {...register("email")}
          />
          {errors.email && (
            <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px] rounded-md">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="password">Password</label>
          <input
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px] rounded-md">
              {errors.password.message}
            </span>
          )}
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
            onClick={async () => {
              if (isChecked === path) {
                await router.push("/pages/signin");
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
      <ToastContainer />
    </div>
  );
};

export default Register;
