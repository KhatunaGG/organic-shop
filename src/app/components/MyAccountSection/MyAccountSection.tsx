"use client";
import { ClobalContext } from "@/app/context/Context";
import { axiosInstance } from "@/app/libs/axiosinstance";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Minimize, Pencil, X } from "lucide-react";
import BackLink from "../_atoms/BackLink";
import { InfoType } from "@/app/interfaces/interface";

const MyAccountSection = () => {
  const [activeInvoice, stActiveInvoice] = useState<InfoType | null>(null);
  const [active, setActive] = useState(false);
  const router = useRouter();
  const context = useContext(ClobalContext);
   const [error, setError] = useState<string | null>(null);

  if (!context) return null;
  const {
    accessToken,
    edit,
    setEdit,
    editInvoice,
    setAllInvoices,
    allInvoices,
  } = context;


  // const getAllInvoices = async () => {
  //   try {
  //     const res = await axiosInstance.get("/purchases", {
  //       headers: { 
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });

  //     if (res.data && res.data.length === 0) {
  //       setError("You have no purchases yet.");
  //       setAllInvoices([]);
  //     } else {
  //       setAllInvoices(res.data);
  //       setError(null);
  //     }
  //   } catch (error) {
  //     setError("An error occurred while fetching your purchases.");
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllInvoices();
  // }, [accessToken, router]);


  
  const getActiveInvoice = async (id: string) => {
    try {
      const res = await axiosInstance.get(`/purchases/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      stActiveInvoice(res.data);
      setActive(true);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePurchase = async (id: string) => {
    try {
      const res = await axiosInstance.delete(`/purchases/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (res.status === 200 || res.status === 201) {
        setAllInvoices((prevInvoices) =>
          prevInvoices.filter((invoice) => invoice._id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="h-full w-full">
      <BackLink />
      <div className="flex flex-row w-col h-auto">
        <div className="w-full ">
          <p className="font-bold text-2xl">Order ID:</p>

          <ol className="p-4 flex flex-col items-start justify-start gap-2 ">
            {allInvoices?.map((invoice, i) => (
              <div key={i} className="w-full  relative">
                <li
                  onClick={() => getActiveInvoice(invoice._id || "")}
                  key={i}
                  className={`cursor-pointer hover:underline hover:text-green-700 transition-all duration-300 ease-in-out ${
                    activeInvoice?._id === invoice._id && active
                      ? "text-green-700 font-bold"
                      : "text-black font-normal"
                  }`}
                >
                  {invoice.orderId}
                </li>

                {activeInvoice?._id === invoice._id && active && (
                  <div className="absolute top-0 left-[100px] z-10  p-4 rounded-xl shadow-xl">
                    <div className="w-full ">
                      <div className="w-full p-2 flex items-left justify-center flex-col gap-8">
                        <div className="flex flex-row justify-between items-start w-full">
                          <div className="">
                            <h2>Billing Information</h2>
                            <div className="flex flex-col text-xs  ">
                              <p>{`${invoice.billingInformation.name}  ${activeInvoice?.billingInformation.lastName}`}</p>
                              <p>{invoice.billingInformation.email}</p>
                              <p>{invoice.billingInformation.company}</p>
                              <p>{invoice.billingInformation.country}</p>
                              <p>
                                {invoice.billingInformation.state}{" "}
                                {invoice.billingInformation.postCode}
                              </p>
                              <p>{invoice.billingInformation.street} st.</p>
                              <p>{invoice.billingInformation.phone}</p>
                            </div>
                          </div>

                          <div className="flex flex-col text-sm items-end">
                            <div className="flex items-end justify-end w-full  mb-8">
                              <div className="w-full h-auto flex items-center justify-end gap-6">
                                <div
                                  className="relative group"
                                  aria-label="Delete"
                                  role="button"
                                >
                                  <X
                                    onClick={() =>
                                      deletePurchase(
                                        invoice._id ? invoice._id : ""
                                      )
                                    }
                                    className="w-5 h-5 cursor-pointer hover:scale-110 transition-all"
                                  />
                                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full shadow-lg mb-1 text-xs text-black bg-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    Delete
                                  </span>
                                </div>

                                <div
                                  className="relative group"
                                  aria-label="Delete"
                                  role="button"
                                >
                                  <Pencil
                                    onClick={() => {
                                      editInvoice(
                                        invoice._id ? invoice._id : ""
                                      );
                                      setEdit(true);
                                      router.push("/pages/checkout");
                                    }}
                                    className="w-5 h-5 cursor-pointer hover:scale-110 transition-all"
                                  />
                                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full shadow-lg mb-1 text-xs text-black bg-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    Edit
                                  </span>
                                </div>

                                <div
                                  onClick={() => setActive(false)}
                                  className="relative group"
                                  aria-label="Delete"
                                  role="button"
                                >
                                  <Minimize className="w-5 h-5 cursor-pointer hover:scale-110 transition-all" />
                                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full shadow-lg mb-1 text-xs text-black bg-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    Close
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p>
                              Purchase total: $
                              {invoice.orderTotalPrice.toFixed(2)}
                            </p>

                            <p>
                              Shipping:{" "}
                              {invoice.shipping
                                ? "$" + invoice.shipping
                                : "Free"}
                            </p>

                            <p className="capitalize">
                              Payment Method: {invoice.paymentMethod}{" "}
                            </p>
                            <p className="font-bold text-green-800 mt-2">
                              Total: ${invoice.forPayment.toFixed(2)}
                            </p>
                          </div>
                        </div>

                        <div className="w-full flex flex-col gap-2">
                          <h2 className="text-bold mb-2">Order items: </h2>

                          <div className=" flex w-[700px] flex-wrap gap-4 items-start justify-start">
                            {invoice.orders.map((item, i) => (
                              <div
                                key={i}
                                className="flex flex-col items-start gap-2 border border-slate-300 px-2 rounded-lg"
                              >
                                <div className="w-full flex flex-row items-center justify-between gap-1 min-w-[190px] min-h-[50px]">
                                  <Image
                                    src={item.image}
                                    alt={""}
                                    width={50}
                                    height={50}
                                  />
                                  <p className="inline-block text-xs">
                                    {item.title}
                                  </p>
                                  <p className="inline-block text-xs font-bold">
                                    {item.sale
                                      ? "$" + item.sale.toFixed(2)
                                      : "$" + item.price.toFixed(2)}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MyAccountSection;
