'use client'
import { usePathname } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
//   const path = usePathname()
//   console.log(path, 'path from FORM')

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
     className="form flex flex-col gap-4 border-b border-b-[#e1dfdf] pb-[20px] ">
      <div className="w-full flex flex-col md:flex-row  items-center gap-[1%] text-xs lg:text-sm">
        <div className="w-full flex flex-col md:w-[33%] gap-y-1 ">
          <label className="" htmlFor="">
            First name
          </label>
          <input
            className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Your First name"
            type="text"
            {...register("name")}
          />
        </div>

        <div className="w-full flex flex-col md:w-[33%] gap-y-1">
          <label htmlFor="">Last name</label>
          <input
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Your last name"
            type="text"
            {...register("lastName")}
          />
        </div>

        <div className="w-full flex flex-col md:w-[33%] gap-y-1">
          <label htmlFor="">Company Name (optional)</label>
          <input
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Company Name"
            type="text"
            {...register("company")}
          />
        </div>
      </div>

      <div>
        <div className="w-full flex flex-col gap-y-1 text-xs lg:text-sm">
          <label htmlFor="">Street Address</label>
          <input
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Street Address"
            type="text"
            {...register("street")}
          />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row  items-center gap-[1%] text-xs lg:text-sm">
        <div className="w-full flex flex-col md:w-[33%] gap-y-1">
          <label className="" htmlFor="">
            Country / Region
          </label>
          <input
            className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            type="text"
            placeholder="Country / Region"
          />
        </div>

        <div className="w-full flex flex-col md:w-[33%] gap-y-1">
          <label htmlFor="">States</label>
          <input
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            type="text"
            placeholder="States"
            {...register("state")}
          />
        </div>

        <div className="w-full flex flex-col md:w-[33%] gap-y-1">
          <label htmlFor="">Zip Code</label>
          <input
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Zip Code"
            type="text"
            {...register("zip")}
          />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row  items-center justify-between gap-[1%] text-xs lg:text-sm">
        <div className="w-full flex flex-col md:w-[50%] gap-y-1">
          <label className="" htmlFor="">
            Email
          </label>
          <input
            className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Email Address"
            type="text"
            {...register("email")}
          />
        </div>

        <div className="w-full flex flex-col md:w-[50%] gap-y-1">
          <label htmlFor="">Phone</label>
          <input
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Phone number"
            type="text"
            {...register("phone")}
          />
        </div>
        <button type="submit">submit</button>
      </div>

      <div className="w-full flex flex-row items-center justify-start gap-2 text-xs lg:text-sm">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Ship to a different address</label>
      </div>
    </form>
  );
};

export default Form;
