import Image from "next/image";
import { Footer, Header, Intro, Nav, Products } from "./components/index";

export default function Home() {
  return (
    <main className=" w-full h-full flex flex-col ">
      <Intro />
      {/* <SignSection /> */}
      <Nav />
      <Header />
      <section className="max-w-screen-xl  mx-auto  px-[3%] lg:px-[7%] ">
        <Products />
      </section>

      <div className="SALE w-full relative min-h-[200px]">
        <Image 
          src="/assets/discount-bannar.png" 
          alt="Discount Banner" 
          fill 
          className="object-cover"
        />
      </div>

      
     
    </main>
  );
}
