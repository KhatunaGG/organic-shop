"use client";
// import { ClobalContext } from "@/app/context/Context";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import React, {  useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // const context = useContext(ClobalContext);
  // if (!context) return;
  // const { setLoggedInUser } = context;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await signInWithEmailAndPassword(email, password);
      if (res?.user) {
        sessionStorage.setItem("user", "exist");
        router.push("/");
        // setLoggedInUser(res.user.email || "");
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
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Email"
            type="text"
            required
          />
        </div>

        <div className="w-full flex flex-col  gap-y-1">
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#e1dfdf] py-[14px] rounded-md pl-2"
            placeholder="Password"
            type="password"
            required
          />
        </div>

        <button type="submit" className="w-full bg-gray-200">
          Sign in
        </button>
      </form>

      <div className="w-full flex flex-row items-center justify-start gap-2 text-xs lg:text-sm">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">
          Do not have an account?
          <span className="font-bold text-green-950"> Sign up </span>
        </label>
      </div>
    </div>
  );
};

export default Login;
