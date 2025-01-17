import { Nav, SaleBanner, SalesSection } from "@/app/components";

export default function page() {
  return (
    <div>
      <Nav />
      <SaleBanner />
      <div className="w-full px-[3%] lg:px-[7%]">
        <SalesSection />
      </div>
    </div>
  );
}
