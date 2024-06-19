"use client";

import { ClobalContext } from "@/app/context/Context";
import Link from "next/link";
import React, { useContext } from "react";
import { BagIcon, HeartIcon } from "../_atoms";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
// import { useRouter } from "next/navigation";



const Intro = () => {

    const context = useContext(ClobalContext);
    const [currentUser] = useAuthState(auth);

    if (!context) return null;
    
    const { totalPrice, totalCount, favorites, loggedInUser } = context;
    let userSession = null;

    if (currentUser) {
        userSession = sessionStorage.getItem("user");
    }
  
  return (
    <section className="w-full h-[15vh] md:h-[8vh] bg-green-950 flex flex-row items-center flex-grow justify-between px-[3%] lg:px-[7%] ">
    <div className="w-full flex flex-row ">
      <div className="w-[10%] md:w-0 md:hidden bg-pink-200 flex items-center justify-center">
        ddd
      </div>

      <div className="w-[90%] md:w-full  flex flex-col items-center md:justify-between md:flex-row gap-1 ms:gap-0">
        <div className="w-full md:w-[50%] flex flex-row justify-end md:justify-start gap-4">
          <div className="relative">
            <HeartIcon width="w-6" hight="h-6" />
            <div className="w-5 h-5 rounded-full bg-[#ffffff65] absolute top-[-2px] right-[-9px] flex items-center justify-center text-red-600 font-bold text-sm ">
              {favorites.length}
            </div>
          </div>

          <div className="line w-[1px] h-[25px] bg-[#706d6d]"></div>
          <div className="relative">
            <BagIcon width={"w-6"} hight={"h-6"} />
            <div className="w-5 h-5 rounded-full bg-[#ffffff65] absolute top-[-2px] right-[-9px] flex items-center justify-center text-red-600 font-bold text-sm ">
              {totalCount ? totalCount : 0}
            </div>
          </div>

          <div className="flex flex-row space-x-2 items-center  whitespace-nowrap">
            <p className="text-[14px] text-[#898787] text-sm">
              Shopping cart:
            </p>
            <p className="text-[13px] text-[#898787] font-bold text-base  ">
              $ {totalPrice ? totalPrice.toFixed(2) : 0.0}
            </p>
          </div>
        </div>

        <div className="w-full md:w-[50%] flex justify-end">
          <div className="sign flex flex-row items-center gap-2 ">
            <Link href={"/pages/signin"}>
              <button className="text-gray-400 text-[13px]">
              {/* Sign In */}
                {currentUser?.email ? currentUser?.email : 'Sign In'}
              </button>
            </Link>
            <span className="text-gray-400 text-[13px]">/</span>
            <Link href={"/pages/signup"}>
              <button
                onClick={() => {
                  if(currentUser?.email) {
                        signOut(auth);
                  sessionStorage.removeItem("user");
                  }
              
                }}
                className="text-gray-400 text-[13px]"
              >
                {/* Sign Up */}
                {currentUser?.email ? 'Logout' : 'Sign Up'}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Intro


// "use client";

// import { ClobalContext } from "@/app/context/Context";
// import Link from "next/link";
// import React, { useContext, useEffect, useState } from "react";
// import { BagIcon, HeartIcon } from "../_atoms";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { signOut } from "firebase/auth";
// import { auth } from "@/app/firebase/config";

// const Intro: React.FC = () => {
//     const [currentUser] = useAuthState(auth);
//     const [userSession, setUserSession] = useState<string | null>(null);

//     const context = useContext(ClobalContext);
//     if (!context) return null; // Handle the case where context is not available
//     const { totalPrice, totalCount, favorites } = context;

//     useEffect(() => {
//         if (currentUser) {
//             setUserSession(sessionStorage.getItem("user"));
//         }
//     }, [currentUser]);

//     return (
//         <section className="w-full h-[15vh] md:h-[8vh] bg-green-950 flex flex-row items-center flex-grow justify-between px-[3%] lg:px-[7%] ">
//             <div className="w-full flex flex-row ">
//                 <div className="w-[10%] md:w-0 md:hidden bg-pink-200 flex items-center justify-center">
//                     ddd
//                 </div>

//                 <div className="w-[90%] md:w-full flex flex-col items-center md:justify-between md:flex-row gap-1 ms:gap-0">
//                     <div className="w-full md:w-[50%] flex flex-row justify-end md:justify-start gap-4">
//                         <div className="relative">
//                             <HeartIcon width="w-6" hight="h-6" />
//                             <div className="w-5 h-5 rounded-full bg-[#ffffff65] absolute top-[-2px] right-[-9px] flex items-center justify-center text-red-600 font-bold text-sm ">
//                                 {favorites.length}
//                             </div>
//                         </div>

//                         <div className="line w-[1px] h-[25px] bg-[#706d6d]"></div>
//                         <div className="relative">
//                             <BagIcon width={"w-6"} hight={"h-6"} />
//                             <div className="w-5 h-5 rounded-full bg-[#ffffff65] absolute top-[-2px] right-[-9px] flex items-center justify-center text-red-600 font-bold text-sm ">
//                                 {totalCount ? totalCount : 0}
//                             </div>
//                         </div>

//                         <div className="flex flex-row space-x-2 items-center whitespace-nowrap">
//                             <p className="text-[14px] text-[#898787] text-sm">Shopping cart:</p>
//                             <p className="text-[13px] text-[#898787] font-bold text-base">$ {totalPrice ? totalPrice.toFixed(2) : 0.0}</p>
//                         </div>
//                     </div>

//                     <div className="w-full md:w-[50%] flex justify-end">
//                         <div className="sign flex flex-row items-center gap-2 ">
//                             <Link href={"/pages/signin"}>
//                                 <button className="text-gray-400 text-[13px]">
//                                     {currentUser?.email ? currentUser?.email : 'Sign In'}
//                                 </button>
//                             </Link>
//                             <span className="text-gray-400 text-[13px]">/</span>
//                             <Link href={"/pages/signup"}>
//                                 <button
//                                     onClick={() => {
//                                         if (currentUser?.email) {
//                                             signOut(auth);
//                                             sessionStorage.removeItem("user");
//                                         }
//                                     }}
//                                     className="text-gray-400 text-[13px]"
//                                 >
//                                     {currentUser?.email ? 'Logout' : 'Sign Up'}
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Intro;

