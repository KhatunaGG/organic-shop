import { Hero, Intro, Nav, FavoritesSection } from "@/app/components";

export default function page() {
  return (
    <div>
      <Intro />
      <Nav />
      <Hero />
      <div className="w-full px-[3%] lg:px-[7%]">
        <FavoritesSection />
      </div>
    </div>
  );
}
