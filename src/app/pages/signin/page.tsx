import { Hero, Intro, Login  } from "@/app/components";
import React from "react";

export default function page() {
  return (
    <main>
      <Intro />
      {/* <SignSection /> */}
      <Hero />
      <section className="max-w-screen-xl w-full px-[5%] lg:px-[7%] mx-auto mt-8 mb-10 flex flex-grow items-center justify-center">
        <Login />
      </section>
    </main>
  );
}
