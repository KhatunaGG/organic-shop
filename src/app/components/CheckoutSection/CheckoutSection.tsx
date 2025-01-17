"use client";
import OrderSummery from "../OrderSummery/OrderSummery";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState, useMemo, useContext } from "react";
import Select, { SingleValue } from "react-select";
import countryList from "react-select-country-list";
import { usePathname, useRouter } from "next/navigation";
import { ClobalContext, InfoType } from "@/app/context/Context";
import { axiosInstance } from "@/app/libs/axiosinstance";
import { AxiosError } from "axios";
import { usePriceCalculation } from "@/app/hooks/usePriceCalculation";
import BackLink from "../_atoms/BackLink";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name cannot be empty")
    .matches(/^[A-Za-z]+$/, "Letters only"),
  lastName: yup
    .string()
    .required("Last name cannot be empty")
    .matches(/^[A-Za-z]+$/, "Letters only"),
  street: yup.string().required("Street cannot be empty"),
  postCode: yup.string().required("Post Code cannot be empty"),
  email: yup.string().required().email(),
  phone: yup
    .string()
    .required("Phone Number cannot be empty")
    .matches(/^\+\d+$/, "+ & Numbers only {+000000000}")
    .min(9, "Min Length 9"),
});

export type userInfoDataType = {
  name: string;
  lastName: string;
  company?: string;
  street: string;
  country?: string | null;
  state?: string;
  postCode: string;
  email: string;
  phone: string;
};

function CheckoutSection() {







  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userInfoDataType>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const options = useMemo(() => countryList().getData(), []);
  const [value, setValue] = useState<string | undefined>("");

  const [selectedCountry, setSelectedCountry] =
    useState<SingleValue<{ value: string; label: string }>>(null);
    const [countryValidation, setCountryValidation] = useState(false);

  const context = useContext(ClobalContext);
  if (!context) return null;
  const {
    shoppingCartItems,
    setShoppingCartItems,
    isRadioChecked,
    setInfo,
    accessToken,
    invoiceForEdit,
    setIsRadioChecked,
    setInvoiceForEdit,
    calculatedTotalPrice,
    shipping,
    forPayment,
  } = context;

  const changeHandler = (
    selected: SingleValue<{ value: string; label: string }>
  ) => {
    setSelectedCountry(selected);
    setValue(selected?.label || "");

    setCountryValidation(false);
  };

  function generateOrderId(): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetters = Array.from({ length: 2 }, () =>
      letters.charAt(Math.floor(Math.random() * letters.length))
    ).join("");
    const randomNumbers = Math.floor(10000 + Math.random() * 90000);
    return `#${randomLetters}${randomNumbers}`;
  }

  let isCountryAndStateValid;

  const onSubmit = async (data: userInfoDataType) => {
    const updatedData: userInfoDataType = {
      ...data,
      country: selectedCountry ? selectedCountry.value : "",
      state: selectedCountry ? selectedCountry.label : "",
    };

    const isValid = Object.values(updatedData).some(
      (field) => field !== "" && field !== undefined
    );

    isCountryAndStateValid =
      updatedData.country !== "" && updatedData.state !== "";

    if (!isValid || !isCountryAndStateValid) {
      setCountryValidation(true);
      return;
    } else {
      setCountryValidation(true);
    }

    const orderInfo: InfoType = {
      billingInformation: updatedData,
      paymentMethod: isRadioChecked ? String(isRadioChecked) : "",
      orders: invoiceForEdit?.orders.length
        ? invoiceForEdit.orders
        : shoppingCartItems.length > 0
        ? shoppingCartItems
        : [],
      orderTotalPrice: invoiceForEdit
        ? invoiceForEdit.orderTotalPrice
        : Number(calculatedTotalPrice.toFixed(2)),
      shipping: invoiceForEdit ? invoiceForEdit.shipping : shipping,
      forPayment: invoiceForEdit
        ? Number(invoiceForEdit.forPayment.toFixed(2))
        : Number(forPayment.toFixed(2)),
      orderId: invoiceForEdit ? invoiceForEdit.orderId : generateOrderId(),
    };

    setInfo(orderInfo);
    localStorage.setItem("orderInfo", JSON.stringify(orderInfo));

    if (invoiceForEdit) {
      await submitEditedInvoice(orderInfo);
    } else {
      await placeOrder(orderInfo);
    }
  };

  const submitEditedInvoice = async (data: InfoType) => {
    try {
      const editedInvoice = {
        _id: invoiceForEdit?._id,
        ...data,
      };

      const res = await axiosInstance.patch(
        `/purchases/${editedInvoice._id}`,
        editedInvoice,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.status === 200 || res.status === 204) {
        router.push("/pages/order");
        setShoppingCartItems([]);
        setIsRadioChecked(null);
        setInvoiceForEdit(undefined);
        localStorage.removeItem("shoppingCartItems");
      } else {
        console.error("Error updating invoice:", res);
      }
    } catch (error) {
      console.error("Error while submitting edited invoice:", error);
    }
  };

  async function placeOrder(orderInfo: InfoType) {
    try {
      const res = await axiosInstance.post("/purchases", orderInfo, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status === 200 || res.status === 201) {
        router.push("/pages/order");
        setShoppingCartItems([]);
        localStorage.removeItem("shoppingCartItems");
        setIsRadioChecked(null);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response && error.response.status === 401) {
          console.log("Unauthorized - token may have expired.");
        } else {
          console.error("Error sending request:", error);
        }
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  }

  return (
    <>
      <BackLink />
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
                  <div className="w-full flex flex-col md:w-[33%] gap-y-1 relative">
                    <label className="" htmlFor="">
                      First name
                    </label>
                    <input
                      className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                      placeholder="Your First name"
                      type="text"
                      defaultValue={
                        invoiceForEdit
                          ? invoiceForEdit.billingInformation.name
                          : ""
                      }
                      {...register("name")}
                    />
                    {!invoiceForEdit && errors.name && (
                      <span className="text-red-600 text-[9px] absolute left-0 bottom-[-17px]">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="w-full flex flex-col md:w-[33%] gap-y-1 relative">
                    <label htmlFor="">Last name</label>
                    <input
                      className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                      placeholder="Your last name"
                      type="text"
                      defaultValue={
                        invoiceForEdit
                          ? invoiceForEdit.billingInformation.lastName
                          : ""
                      }
                      {...register("lastName")}
                    />
                    {!invoiceForEdit && errors.lastName && (
                      <span className="text-red-600 text-[9px] absolute left-0 bottom-[-17px]">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>

                  <div className="w-full flex flex-col md:w-[33%] gap-y-1 relative">
                    <label htmlFor="">Company Name (optional)</label>
                    <input
                      className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                      placeholder="Company Name"
                      type="text"
                      defaultValue={
                        invoiceForEdit
                          ? invoiceForEdit.billingInformation.company
                          : ""
                      }
                      {...register("company")}
                    />
                    {!invoiceForEdit && errors.company && (
                      <span className="text-red-600 text-[9px] absolute left-0 bottom-[-17px]">
                        {errors.company.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <div className="w-full flex flex-col gap-y-1 text-xs lg:text-sm relative">
                    <label htmlFor="">Street Address</label>
                    <input
                      className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                      placeholder="Street Address"
                      defaultValue={
                        invoiceForEdit
                          ? invoiceForEdit.billingInformation.street
                          : ""
                      }
                      type="text"
                      {...register("street")}
                    />
                    {!invoiceForEdit && errors.street && (
                      <span className="text-red-600 text-[9px] absolute left-0 bottom-[-17px]">
                        {errors.street.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="w-full flex space-y-2 md:space-y-0 flex-col md:flex-row  items-center md:gap-[1%] text-xs lg:text-sm">
                  <div className="w-full flex flex-col md:w-[33%] gap-y-1 relative">
                    <label htmlFor="">Country / Region</label>

                    <div className="border border-[#e1dfdf] py-[5px] rounded-md bg-transparent">
                      <Select
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            border: "none",
                            boxShadow: "none",
                            background: "transparent",
                          }),
                        }}
                        options={options}
                        value={selectedCountry}
                        onChange={changeHandler}
                        className="border-none  "
                      />
                      {countryValidation && (
                        <span className="text-red-600 text-[9px] absolute left-0 bottom-[-17px]">
                          Country cannot be empty
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="w-full flex flex-col md:w-[33%] gap-y-1 relative">
                    <label htmlFor="">States</label>
                    <input
                      className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                      type="text"
                      placeholder="States"
                      {...register("state")}
                      defaultValue={
                        selectedCountry ? selectedCountry.value : ""
                      }
                    />
                  </div>

                  <div className="w-full flex flex-col md:w-[33%] gap-y-1 relative">
                    <label htmlFor="">Post Code</label>
                    <input
                      className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                      placeholder="Post Code"
                      type="text"
                      defaultValue={
                        invoiceForEdit
                          ? invoiceForEdit.billingInformation.postCode
                          : ""
                      }
                      {...register("postCode")}
                    />
                    {!invoiceForEdit && errors.postCode && (
                      <span className="text-red-600 text-[9px] absolute left-0 bottom-[-17px]">
                        {errors.postCode.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row  items-center justify-between md:gap-[1%] text-xs lg:text-sm">
                  <div className="w-full flex flex-col md:w-[50%] gap-y-1 relative">
                    <label className="" htmlFor="">
                      Email
                    </label>
                    <input
                      className=" border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                      placeholder="Email Address"
                      defaultValue={
                        invoiceForEdit
                          ? invoiceForEdit.billingInformation.email
                          : ""
                      }
                      type="text"
                      {...register("email")}
                    />
                    {!invoiceForEdit && errors.email && (
                      <span className="text-red-600 text-[9px] absolute left-0 bottom-[-17px]">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="w-full flex flex-col md:w-[50%] gap-y-1 relative">
                    <label htmlFor="">Phone</label>
                    <input
                      className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
                      placeholder="Phone number"
                      defaultValue={
                        invoiceForEdit
                          ? invoiceForEdit.billingInformation.phone
                          : ""
                      }
                      type="text"
                      {...register("phone")}
                    />
                    {!invoiceForEdit && errors.phone && (
                      <span className="text-red-600 text-[9px] absolute left-0 bottom-[-17px]">
                        {errors.phone.message}
                      </span>
                    )}
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
              <OrderSummery onSubmit={handleSubmit(onSubmit)} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CheckoutSection;

// function setSelectedCountry(
//   value: SingleValue<{ value: string; label: string }>
// ) {
//   throw new Error("Function not implemented.");
// }
