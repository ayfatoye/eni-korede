function CenterPageNames() {
  return (
    <div className="flex flex-row w-full justify-center pt-[65px] pb-[65px] pl-4 pr-8">
      <img
        src="/wreath-2.jpg"
        alt="hero"
        className="w-3xs h-3xs hidden md:block"
      />

      <div className="text-[#717769] flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-6xl font-normal md:font-semibold mt-2">
          ENIOLA FATOYE
        </h2>
        <p className="text-lg md:text-4xl font-light md:font-medium py-6 md:py-12">
          and
        </p>
        <h2 className="text-4xl md:text-6xl font-normal md:font-semibold mt-2">
          AKOREDE OLADIGBO
        </h2>
      </div>

      <img
        src="/wreath-2.jpg"
        alt="hero"
        className="w-3xs h-3xs scale-x-[-1] hidden md:block"
      />
    </div>
  );
}

function Home() {
  return (
    <div className="w-full">
      <img
        src="/eni-kore-1.jpg"
        alt="the bride and groom"
        className="w-full h-[120vh] object-cover object-[10%_35%]"
      />
      <CenterPageNames />
    </div>
  );
}

export default Home;
