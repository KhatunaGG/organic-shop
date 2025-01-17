import { Hero, Intro, Productdescription } from "@/app/components";

type ParamsType = {
  params: {
    id: string;
  };
};

export default function page({ params }: ParamsType) {
  return (
    <div className="relative">
      <Intro />
      <Hero />
      <div className="w-full px-[5%] lg:px-[7%] ">
        <Productdescription params={params.id} />
      </div>
    </div>
  );
}
