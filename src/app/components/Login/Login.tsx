"use client";
import { ClobalContext } from "@/app/context/Context";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { axiosInstance } from "@/app/libs/axiosinstance";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setCookie } from "cookies-next";
import { SignInType } from "@/app/interfaces/interface";
import { schema } from "@/app/schema/LoginSchema";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const path = usePathname();
  const context = useContext(ClobalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInType>({
    resolver: yupResolver(schema),
  });

  if (!context) return null;
  const {
    handleChange,
    isChecked,
    setIsChecked,
    setAccessToken,
    accessToken,
    shoppingCartItems,
  } = context;

  const onSubmit = async (data: SignInType) => {
    try {
      const res = await axiosInstance.post("/auth/sign-in", data);
      if (res.status === 200 || res.status === 201) {
        const token = res.data.accessToken;
        setAccessToken(token);
        setCookie("accessToken", token, { maxAge: 60 * 60 });
        reset();
      }
      if (accessToken && shoppingCartItems.length !== 0) {
        router.push("/pages/checkout");
      } else {
        router.push("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || "An error occurred";
        toast.error(message, {
          position: "top-left",
          autoClose: 2000,
        });
      } else {
        setErrorMessage("An error occurred");
        console.log(errorMessage);
      }
    }
  };

  return (
    <div className="w-full md:w-[50%] flex flex-col gap-8 p-6 rounded-md shadow-md">
      <h1 className="font-bold tracking-wide text-green-950 text-[18px]">
        Sign In
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6"
      >
        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="">Email</label>
          <input
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
            placeholder="Email"
            type="text"
            {...register("email")}
          />
          {errors.email && (
            <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px]">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="">Password</label>
          <input
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px]">
              {errors.password?.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full outline-none  py-4  bg-gradient-to-b from-green-500 to-yellow-300 
      border border-yellow-300 rounded-md
      focus:outline-none focus:ring-2 focus:ring-yellow-300 active:from-yellow-300 font-bold tracking-wider text-base"
        >
          Sign in
        </button>
      </form>

      <div className="w-full flex flex-row items-center justify-start gap-4 text-xs lg:text-sm">
        <input
          onChange={() => handleChange(path)}
          checked={isChecked === path}
          type="checkbox"
          name=""
          id=""
        />
        <label htmlFor="">
          Do not have an account?
          <span
            onClick={async () => {
              if (isChecked === path) {
                await router.push("/pages/signup");
                setIsChecked("");
              }
            }}
            className="font-bold text-green-800"
          >
            {" "}
            Sign up{" "}
          </span>
        </label>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
