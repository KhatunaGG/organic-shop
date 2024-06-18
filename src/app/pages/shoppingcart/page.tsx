import React from "react";
import { Cart, Hero, Intro } from "../../components";

export default function SoppingCart() {
  return (
    <>
      {/* <SignSection /> */}
      <Intro />
      <Hero />
      <div className="max-w-screen-xl w-full px-[5%] lg:px-[7%] mx-auto">
        <Cart />
      </div>
    </>
  );
}
