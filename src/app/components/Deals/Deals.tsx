import SecondaryButton from "../SecondaryButton/SecondaryButton";

const Deals = () => {
  return (
    <div
      className="hidden md:flex w-full md:min-h-[320px] lg:min-h-[420px] justify-center md:mt-10 lg:mt-12 rounded-lg "
      style={{
        backgroundImage: "url('/assets/banner2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white uppercase pt-[5%] flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs font-thin text-green-500">Best Deals</div>
          <h2 className="uppercase">Sale of the Day</h2>
        </div>
        <SecondaryButton text={'Shop Now'} location={'deals'} />
      </div>
    </div>
  );
};

export default Deals;
