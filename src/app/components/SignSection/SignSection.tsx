"use client";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import Link from "next/link";
import { ClobalContext } from "@/app/context/Context";

const SignSection = () => {
  const [currentUser] = useAuthState(auth);
  // const context = useContext(ClobalContext);
  // if (!context) return;
  // const { setLoggedInUser } = context;
  let userSession = null;



  if (currentUser) {
    userSession = sessionStorage.getItem("user");
  }

  return (
    <div className="w-full md:w-[50%] flex justify-end">
      <div className="sign flex flex-row items-center gap-2 ">
        <Link href={"/pages/signin"}>
          <button className="text-gray-400 text-[13px]">
            {/* Sign In */}
            {currentUser?.email ? currentUser?.email : "Sign In"}
          </button>
        </Link>
        <span className="text-gray-400 text-[13px]">/</span>
        <Link href={"/pages/signup"}>
          <button
            onClick={() => {
              if (currentUser?.email) {
                signOut(auth);
                sessionStorage.removeItem("user");
                // setLoggedInUser(currentUser.email)
              }
            }}
            className="text-gray-400 text-[13px]"
          >
            {/* Sign Up */}
            {currentUser?.email ? "Logout" : "Sign Up"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignSection;
