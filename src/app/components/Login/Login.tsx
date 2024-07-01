"use client";
import { ClobalContext } from "@/app/context/Context";
// import { ClobalContext } from "@/app/context/Context";
import { auth } from "@/app/firebase/config";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser] = useAuthState(auth);
  const router = useRouter();
  const path = usePathname();
  const context = useContext(ClobalContext);
  if (!context) return;
  const { handleChange, isChecked, setIsChecked } = context;


console.log(currentUser, 'currentuser')


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await signInWithEmailAndPassword(email, password);
      if (res?.user) {
        sessionStorage.setItem("user", "exist");
        router.push("/pages/checkout");
        // setLoggedInUser(res.user.email || "");
        // setLoggedInUser(currentUser?.email || "");
      }
      setEmail("");
      setPassword("");
      console.log(res, "response");
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div className="w-full md:w-[50%] flex flex-col gap-8 p-6 rounded-md shadow-md">
      <h1 className="font-bold tracking-wide text-green-950 text-[18px]">
        Sign In
      </h1>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2 outline-none"
            placeholder="Email"
            type="text"
            required
          />
        </div>

        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
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
            onClick={() => {
              if (isChecked === path) {
                router.push("/pages/signup");
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
    </div>
  );
};

export default Login;
