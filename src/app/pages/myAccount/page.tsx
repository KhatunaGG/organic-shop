import { Intro, MyAccountSection } from "@/app/components";

export default function page() {
  return (
    <main className="h-screen max-h-full">
      <Intro />
      <section className="max-w-screen-xl  mx-auto  px-[3%] lg:px-[7%] ">
        <MyAccountSection />
      </section>
    </main>
  );
}
