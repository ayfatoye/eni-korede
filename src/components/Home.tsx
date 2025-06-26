import Countdown from "./Countdown";

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

function Home({ onRSVPClick }: { onRSVPClick: () => void; }) {
  return (
    <div className="w-screen">
      <img
        src="/eni-kore-2.jpeg"
        alt="the bride and groom"
        className="w-full h-[120vh] object-cover object-[30%_55%]"
      />
      <CenterPageNames />
      <div>
        <p className="text-[#717769] text-lg md:text-2xl font-light md:font-medium py-6 md:py-12">
          #EniKorede2025
        </p>
        <h2 className="text-[#717769] text-4xl md:text-6xl font-normal md:font-medium mt-2">
          December 20, 2025
        </h2>
        <p className="text-[#717769] text-lg md:text-2xl font-light md:font-medium py-6 md:pt-12 md:pb-4">
          Houston, TX
        </p>
        <Countdown />
        <button
          onClick={onRSVPClick}
          className="appearance-none bg-[#717769] hover:bg-[#44473F] active:bg-[#44473F] text-black min-w- w-[250px] my-6 mb-1 rounded-md text-3xl font-bold py-2 pr-1"
        >
          RSVP
        </button>


        <button
          onClick={() => {
            window.open("https://www.amazon.com/wedding/share/eni-korede", "_blank");
          }}
          className="appearance-none bg-[#717769] hover:bg-[#44473F] active:bg-[#44473F] text-black w-[250px] my-6 mb-10 rounded-md text-3xl font-bold py-2 pl-1"
        >
          Registry
        </button>



        <div className="text-[#717769] w-3/4 mx-auto text-lg md:text-2xl font-light md:font-medium pb-6 pt-3 md:pb-12 md:pt-4">
          <p>
            PLEASE NOTE: {/*pink color hexcode: FAC1C2 or FDBFC1. Green: A19451 */}
          </p>
          <p className="py-2">The colours of the day are <span className="font-bold text-[#f8c3ec]">PINK</span> and <span className="font-bold text-[#b6d7a8]">GREEN</span></p>
          <p className="py-2">While we love our children, this is an <span className="font-bold text-[#ff0000]">ADULTS-ONLY</span> event</p>
          <p className="py-2">Have questions? Feel free to reach out to Event Coordinators Yippee Celebrations (832 679-4576), or Abisola Oladigbo (773 964-9462) and Bolu Fatoye (832 845 0815). We're happy to help!</p>
        </div>

      </div>
    </div>
  );
}

export default Home;
