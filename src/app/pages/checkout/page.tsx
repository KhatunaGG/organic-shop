import { CheckoutSection, Hero, Intro } from "@/app/components";

export default function page() {
  return (
    <main>
      <Intro />
      <Hero />
      <section className="max-w-screen-xl  mx-auto  px-[3%] lg:px-[7%] ">
        <CheckoutSection />
      </section>
    </main>
  );
}
