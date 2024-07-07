// import React from "react";
// import Button from "../Button/Button";
// import OrderSummery from "../OrderSummery/OrderSummery";
// import Form from "../Form/Form";

// function CheckoutSection() {
//   return (
//     <div className=" w-full flex flex-col gap-[30px] flex-grow items-start  mt-8 mb-10 md:gap-[1%] md:flex-row bg-green">
//       <div className="left-side w-full md:w-[70%] flex flex-col gap-[20px]">
//         <h1 className="font-bold tracking-wide text-green-950 text-[32px]">
//           Billing Information
//         </h1>
//         {/* <Form /> */}

//         {/* <form className="form flex flex-col gap-4 border-b border-b-[#e1dfdf] pb-[20px] bg-pink-200">
//           <div className="w-full flex flex-col md:flex-row  items-center gap-[1%] text-xs lg:text-sm">
//             <div className="w-full flex flex-col md:w-[33%] gap-y-1 ">
//               <label className="" htmlFor="">
//                 First name
//               </label>
//               <input
//                 className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 placeholder="Your First name"
//                 type="text"
//               />
//             </div>

//             <div className="w-full flex flex-col md:w-[33%] gap-y-1">
//               <label htmlFor="">Last name</label>
//               <input
//                 className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 placeholder="Your last name"
//                 type="text"
//               />
//             </div>

//             <div className="w-full flex flex-col md:w-[33%] gap-y-1">
//               <label htmlFor="">Company Name (optional)</label>
//               <input
//                 className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 placeholder="Company Name"
//                 type="text"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="w-full flex flex-col gap-y-1 text-xs lg:text-sm">
//               <label htmlFor="">Street Address</label>
//               <input
//                 className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 placeholder="Street Address"
//                 type="text"
//               />
//             </div>
//           </div>

//           <div className="w-full flex flex-col md:flex-row  items-center gap-[1%] text-xs lg:text-sm">
//             <div className="w-full flex flex-col md:w-[33%] gap-y-1">
//               <label className="" htmlFor="">
//                 Country / Region
//               </label>
//               <input
//                 className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 type="text"
//                 placeholder="Country / Region"
//               />
//             </div>

//             <div className="w-full flex flex-col md:w-[33%] gap-y-1">
//               <label htmlFor="">States</label>
//               <input
//                 className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 type="text"
//                 placeholder="States"
//               />
//             </div>

//             <div className="w-full flex flex-col md:w-[33%] gap-y-1">
//               <label htmlFor="">Zip Code</label>
//               <input
//                 className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 placeholder="Zip Code"
//                 type="text"
//               />
//             </div>
//           </div>

//           <div className="w-full flex flex-col md:flex-row  items-center justify-between gap-[1%] text-xs lg:text-sm">
//             <div className="w-full flex flex-col md:w-[50%] gap-y-1">
//               <label className="" htmlFor="">
//                 Email
//               </label>
//               <input
//                 className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 placeholder="Email Address"
//                 type="text"
//               />
//             </div>

//             <div className="w-full flex flex-col md:w-[50%] gap-y-1">
//               <label htmlFor="">Phone</label>
//               <input
//                 className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 placeholder="Phone number"
//                 type="text"
//               />
//             </div>
//           </div>

//           <div className="w-full flex flex-row items-center justify-start gap-2 text-xs lg:text-sm">
//             <input type="checkbox" name="" id="" />
//             <label htmlFor="">Ship to a different address</label>
//           </div>
//         </form> */}

//         <form className="form flex flex-col gap-4 border-b border-b-[#e1dfdf] pb-[20px] bg-pink-200">
//           <div className="w-full flex flex-col md:flex-row  items-center gap-[1%] text-xs lg:text-sm">
//             <div className="w-full flex flex-col md:w-[33%] gap-y-1 ">
//               <label className="" htmlFor="">
//                 First name
//               </label>
//               <input
//                 className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 placeholder="Your First name"
//                 type="text"
//               />
//             </div>

//             <div className="w-full flex flex-col md:w-[33%] gap-y-1">
//               <label htmlFor="">Last name</label>
//               <input
//                 className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 placeholder="Your last name"
//                 type="text"
//               />
//             </div>

//             <div className="w-full flex flex-col md:w-[33%] gap-y-1">
//               <label htmlFor="">Company Name (optional)</label>
//               <input
//                 className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 placeholder="Company Name"
//                 type="text"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="w-full flex flex-col gap-y-1 text-xs lg:text-sm">
//               <label htmlFor="">Street Address</label>
//               <input
//                 className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 placeholder="Street Address"
//                 type="text"
//               />
//             </div>
//           </div>

//           <div className="w-full flex flex-col md:flex-row  items-center gap-[1%] text-xs lg:text-sm">
//             <div className="w-full flex flex-col md:w-[33%] gap-y-1">
//               <label className="" htmlFor="">
//                 Country / Region
//               </label>
//               <input
//                 className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 type="text"
//                 placeholder="Country / Region"
//               />
//             </div>

//             <div className="w-full flex flex-col md:w-[33%] gap-y-1">
//               <label htmlFor="">States</label>
//               <input
//                 className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 type="text"
//                 placeholder="States"
//               />
//             </div>

//             <div className="w-full flex flex-col md:w-[33%] gap-y-1">
//               <label htmlFor="">Zip Code</label>
//               <input
//                 className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 placeholder="Zip Code"
//                 type="text"
//               />
//             </div>
//           </div>

//           <div className="w-full flex flex-col md:flex-row  items-center justify-between gap-[1%] text-xs lg:text-sm">
//             <div className="w-full flex flex-col md:w-[50%] gap-y-1">
//               <label className="" htmlFor="">
//                 Email
//               </label>
//               <input
//                 className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 placeholder="Email Address"
//                 type="text"
//               />
//             </div>

//             <div className="w-full flex flex-col md:w-[50%] gap-y-1">
//               <label htmlFor="">Phone</label>
//               <input
//                 className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
//                 placeholder="Phone number"
//                 type="text"
//               />
//             </div>
//           </div>

//           <div className="w-full flex flex-row items-center justify-start gap-2 text-xs lg:text-sm">
//             <input type="checkbox" name="" id="" />
//             <label htmlFor="">Ship to a different address</label>
//           </div>
//         </form>
//         <div className=" flex flex-col gap-[10px] pt-[20px] ">
//           <h2 className="font-bold tracking-wide text-green-950 text-[18px]">
//             Additional Info
//           </h2>
//           <div>
//             <label htmlFor="" className="text-xs lg:text-sm">
//               Order Notes (Optional)
//             </label>
//             <textarea
//               name=""
//               id=""
//               placeholder="Notes about your order, e.g. special notes for delivery"
//               className="w-full border border-[#e1dfdf] rounded-md text-xs p-2 lg:text-sm"
//             ></textarea>
//           </div>
//         </div>
//       </div>

//       <OrderSummery />
//     </div>
//   );
// }

// export default CheckoutSection;
"use client";

import Button from "../Button/Button";
import OrderSummery from "../OrderSummery/OrderSummery";
import { useForm } from "react-hook-form";

import React, { useState, useMemo } from "react";
import Select, { SingleValue, StylesConfig } from "react-select";
import countryList from "react-select-country-list";


type userInfoDataType = {
  company: string;
  email: string;
  lastName: string;
  name: string;
  phone: string;
  state: string;
  street: string;
  zip: string;
  country: string;
};




















function CheckoutSection() {
  const { register, handleSubmit } = useForm<userInfoDataType>();
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [selectedCountry, setSelectedCountry] =
    useState<SingleValue<{ value: string; label: string }>>(null);

    const changeHandler = (
      value: SingleValue<{ value: string; label: string }>
    ) => {
      setSelectedCountry(value);
    };

    const onSubmit = (data: userInfoDataType) => {
      data.country = selectedCountry?.value || "";
      console.log(data);
    };

  // const onSubmit = (data: userInfoDataType) => {
  //   console.log(data);
  // };

  return (
    <div className=" w-full flex flex-col gap-[30px] flex-grow items-start  mt-8 mb-10 md:gap-[1%] md:flex-row">
      <div className="w-full left-side  flex flex-col gap-[20px]">
        <h1 className="font-bold tracking-wide text-green-950 text-[32px]">
          Billing Information
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4 md:flex-row "
        >
          <div className="flex flex-col  w-full md:w-[70%]">
            <div className="w-full flex flex-col gap-4 border-b border-b-[#e1dfdf] pb-[20px] ">
              <div className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row items-center md:gap-[1%] text-xs lg:text-sm">
                <div className="w-full flex flex-col md:w-[33%] gap-y-1 ">
                  <label className="" htmlFor="">
                    First name
                  </label>
                  <input
                    className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                    placeholder="Your First name"
                    type="text"
                    {...register("name")}
                  />
                </div>

                <div className="w-full flex flex-col md:w-[33%] gap-y-1">
                  <label htmlFor="">Last name</label>
                  <input
                    className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                    placeholder="Your last name"
                    type="text"
                    {...register("lastName")}
                  />
                </div>

                <div className="w-full flex flex-col md:w-[33%] gap-y-1">
                  <label htmlFor="">Company Name (optional)</label>
                  <input
                    className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
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
                  
                    className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                    placeholder="Street Address"
                    type="text"
                    {...register("street")}
                  />
                </div>
              </div>




              <div className="w-full flex space-y-2 md:space-y-0 flex-col md:flex-row  items-center md:gap-[1%] text-xs lg:text-sm">

                
                <div className="w-full flex flex-col md:w-[33%] gap-y-1">
                  <label htmlFor="">Country / Region</label>

                  <div className="border border-[#e1dfdf] py-[5px] rounded-md bg-transparent">
                  <Select
                   styles={{
                    control: (provided, state) => ({
                      ...provided,
                      border: "none",
                      boxShadow: "none",
                      background: 'transparent'
                      // paddingTop: '8px',
                      // paddingBottom: '8px'
                    })
                  }}
                    options={options}
                    value={selectedCountry}
                    onChange={changeHandler}
                    className="border-none  "
                    // {...register('country')}
                  />


                  </div>
                
                  {/* <Select options={options} value={value} onChange={changeHandler} className="border-none"/> */}

                  {/* <input
                    className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                    type="text"
                    placeholder="Country / Region"
                  /> */}
                </div>

                <div className="w-full flex flex-col md:w-[33%] gap-y-1">
                  <label htmlFor="">States</label>
                  <input
                    className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                    type="text"
                    placeholder="States"
                    {...register("state")}
                  />
                </div>

                <div className="w-full flex flex-col md:w-[33%] gap-y-1">
                  <label htmlFor="">Zip Code</label>
                  <input
                    className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                    placeholder="Zip Code"
                    type="text"
                    {...register("zip")}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row  items-center justify-between md:gap-[1%] text-xs lg:text-sm">
                <div className="w-full flex flex-col md:w-[50%] gap-y-1">
                  <label className="" htmlFor="">
                    Email
                  </label>
                  <input
                    className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                    placeholder="Email Address"
                    type="text"
                    {...register("email")}
                  />
                </div>

                <div className="w-full flex flex-col md:w-[50%] gap-y-1">
                  <label htmlFor="">Phone</label>
                  <input
                    className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                    placeholder="Phone number"
                    type="text"
                    {...register("phone")}
                  />
                </div>
              </div>

              <div className="w-full flex flex-row items-center justify-start gap-2 text-xs lg:text-sm">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Ship to a different address</label>
              </div>
            </div>

            <div className=" flex flex-col gap-[10px] pt-[20px] ">
              <h2 className="font-bold tracking-wide text-green-950 text-[18px]">
                Additional Info
              </h2>
              <div>
                <label htmlFor="" className="text-xs lg:text-sm">
                  Order Notes (Optional)
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  className="w-full border border-[#e1dfdf] rounded-md text-xs p-2 lg:text-sm outline-none"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[30%]">
            <OrderSummery />
          </div>
        </form>

        {/* <div className=" flex flex-col gap-[10px] pt-[20px] ">
          <h2 className="font-bold tracking-wide text-green-950 text-[18px]">
            Additional Info
          </h2>
          <div>
            <label htmlFor="" className="text-xs lg:text-sm">
              Order Notes (Optional)
            </label>
            <textarea
              name=""
              id=""
              placeholder="Notes about your order, e.g. special notes for delivery"
              className="w-full border border-[#e1dfdf] rounded-md text-xs p-2 lg:text-sm"
            ></textarea>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CheckoutSection;
function setSelectedCountry(
  value: SingleValue<{ value: string; label: string }>
) {
  throw new Error("Function not implemented.");
}
