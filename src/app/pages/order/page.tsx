import { Intro, OrderSection } from "@/app/components";

export default function page() {
  return (
    <div>
      <Intro />
      <div className="w-full px-[3%] lg:px-[7%]">
        <OrderSection />
      </div>
    </div>
  );
}
