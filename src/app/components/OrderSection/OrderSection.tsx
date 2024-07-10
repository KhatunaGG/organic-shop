// "use client";
// import Image from "next/image";
// import React, { useContext, useState } from "react";
// import CheckIcon from "../_atoms/CheckIcon/CheckIcon";
// import { ClobalContext } from "@/app/context/Context";

// const OrderSection = () => {
//   const [show, setShow] = useState(false);
//   const [arrLength, setArrLengh] = useState(1);
//   const context = useContext(ClobalContext);
//   if (!context) return;
//   const {
//     shoppingCartItems,
//     totalPrice,
//     totalCount,
//     setShoppingCartItems,
//     handleRadioChange,
//     isRadioChecked,
//   } = context;

//   return (
//     <div className="w-full flex items-center justify-center min-h-[calc(100vh-8vh)]">
//       <div className="h-full flex flex-row items-start rounded-xl overflow-hidden bg-slate-200 shadow-xl">
//         <div className=" p-4 min-w-[250px] flex flex-col gap-6">
//           <div className="w-full flex flex-row items-center justify-between">
//             <div className="w-8 h-8 border-4 border-green-700 border-double rounded-md shadow-md flex items-center justify-center">
//               <CheckIcon />
//             </div>
//             <h2 className="text-sm text-green-700">THANK YOU FOR YOUR ORDER</h2>
//           </div>

//           <div className="flex flex-col rounded-lg overflow-hidden  bg-white">
//             {shoppingCartItems.slice(0, arrLength).map((item, i) => (
//               <div key={i} className="flex flex-col items-start  p-2 ">
//                 <div className="w-full flex flex-row items-center justify-between border border-green-950 rounded-md pl-1 pr-2">
//                   <Image src={item.image} alt={""} width={50} height={50} />
//                   {/* <img className="w-[50px] h-[50px]" src="" alt="" /> */}
//                   <p className="inline-block text-xs">{item.title}</p>
//                   <p className="inline-block text-xs font-bold">{item.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={() => {
//               setShow(!show);
//               if (!show) {
//                 setArrLengh(shoppingCartItems.length);
//               } else {
//                 setArrLengh(1);
//               }
//             }}
//             className="text-sx flex items-center justify-center"
//           >
//             and {shoppingCartItems.length ? shoppingCartItems.length - 1 : 0}{" "}
//             other item(s)
//           </button>
//         </div>

//         <div className="w-full  bg-black p-4 flex flex-col items-center justify-between ">
//           <div className="relative w-200 h-210">
//             <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
//             <Image
//               src={"/assets/order-img.png"}
//               alt={""}
//               className="object-cover w-full h-full"
//               width={200}
//               height={210}
//             />
//           </div>

//           <div className="w-full h-full bg-black p-4 flex flex-col flex-grow items-center justify-between">
//             <span className="font-bold text-green-600">
//               Total: <span className="font-bold text-red-600"> $ {totalPrice.toFixed(2)}</span>{" "}
//             </span>
//             <span className="text-green-600 text-xs">Back to shop</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderSection;


"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import CheckIcon from "../_atoms/CheckIcon/CheckIcon";
import { ClobalContext } from "@/app/context/Context";
import { useRouter } from "next/navigation";

const OrderSection = () => {
  const [show, setShow] = useState(false);
  const [arrLength, setArrLengh] = useState(1);
  const router = useRouter()
  const context = useContext(ClobalContext);
  if (!context) return;
  const {
    shoppingCartItems,
    totalPrice,
    totalCount,
    setShoppingCartItems,
    handleRadioChange,
    isRadioChecked,
    setTotalPrice
  } = context;

  console.log(shoppingCartItems, 'shoppingCartItems')

  return (
    <div className="w-full flex items-center justify-center min-h-[calc(100vh-8vh)] py-8  md:py-0">
      <div className="h-full w-full flex flex-col  md:max-w-[500px] md:flex-row items-start rounded-xl overflow-hidden bg-slate-200 shadow-xl">
        <div className="w-full p-4 md:min-w-[250px] flex flex-col gap-6 ">
          <div className="w-full flex flex-row items-center gap-4">
            <div className="w-8 h-8 border-4 border-green-700 border-double rounded-md shadow-md flex items-center justify-center">
              <CheckIcon />
            </div>
            <h2 className="text-sm text-green-700">THANK YOU FOR YOUR ORDER</h2>
          </div>

          <div className="flex flex-col rounded-lg overflow-hidden  bg-white">
            {shoppingCartItems.slice(0, arrLength).map((item, i) => (
              <div key={i} className="flex flex-col items-start  p-2 ">
                <div className="w-full flex flex-row items-center justify-between border border-green-950 rounded-md pl-1 pr-2">
                  <Image src={item.image} alt={""} width={50} height={50} />
                  <p className="inline-block text-xs">{item.title}</p>
                  <p className="inline-block text-xs font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setShow(!show);
              if (!show) {
                setArrLengh(shoppingCartItems.length);
              } else {
                setArrLengh(1);
              }
            }}
            className="text-xs flex items-center justify-center"
          >
            {arrLength === 1 ? `and ${shoppingCartItems.length ? shoppingCartItems.length - 1 : 0} other item(s)` : 'View less'}
          </button>
        </div>

        <div className="w-full bg-black p-4 flex flex-col items-center justify-between gap-y-8  ">
          <div className="relative w-200 h-210">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
            <Image
              src={"/assets/order-img.png"}
              alt={""}
              className="object-cover w-full h-full"
              width={200}
              height={210}
            />
          </div>

          <div className="w-full h-full bg-black space-y-4 flex flex-col items-center justify-between">
            <span className="font-bold text-white">
              Total: <span className="font-bold text-red-500 text-lg"> $ {totalPrice.toFixed(2)}</span>{" "}
            </span>
            <button
            onClick={() => {
                router.push('/')
                setTotalPrice(0)
                setShoppingCartItems([])
            }}
             className="text-white text-xs cursor-pointer">Back to <span className="uppercase font-bold text-green-500 text-xs">Ecobazar</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
