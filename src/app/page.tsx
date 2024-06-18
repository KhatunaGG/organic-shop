import { Header, Intro, Nav, Products } from "./components/index";

export default function Home() {
  return (
    <main className=" w-full h-full ">
      <Intro />
      {/* <SignSection /> */}
      <Nav />
      <Header />
      <section className="max-w-screen-xl  mx-auto  px-[3%] lg:px-[7%] ">
        <Products />
      </section>
    </main>
  );
}
