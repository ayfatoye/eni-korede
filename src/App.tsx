import "./App.css";
import Home from "./components/Home";
// import RSVP from "./components/RSVP";
import { useState, useEffect } from "react";
import Schedule from "./components/Schedule";
import CheckIn from "./components/CheckIn";

function Hamburger({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-2xl"
    >
      <img src="/icons8-hamburger-menu.svg" alt="Menu" className="w-5 h-5" />
    </button>
  );
}

function App() {
  const [selected, setSelected] = useState<string | null>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // map pathname to selected key
  const pathToSelected = (p: string | null) => {
    if (!p) return "home";
    const path = p.replace(/\/$/, ""); // strip trailing slash
    switch (path.toLowerCase()) {
      case "":
      case "/":
      case "/home":
        return "home";
      case "/schedule":
        return "schedule";
      case "/check-in":
      case "/checkin":
        return "check-in";
      case "/registry":
        return "registry";
      default:
        return "home";
    }
  };

  // navigate without full page reload and keep URL in sync
  const navigateTo = (key: string, url: string) => {
    setSelected(key);
    try {
      window.history.pushState({}, "", url);
    } catch (e) {
      // fallback: full navigation
      window.location.href = url;
    }
  };

  // initialize selected from current URL and handle back/forward
  useEffect(() => {
    setSelected(pathToSelected(window.location.pathname));
    const onPop = () => setSelected(pathToSelected(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <div className="relative min-h-[556px]">
      {menuOpen == true && (
        <>
          <div className="fixed md:hidden inset-0 w-full h-full bg-gray-900 opacity-50 z-30" onClick={() => setMenuOpen(false)} />
          <div className="fixed md:hidden flex flex-col top-0 right-0 z-50 bg-white w-[220px] h-[100vh] px-[40px] py-[50px] opacity-100 text-left">
            <div className="border-b-1 border-black mb-4 pb-4">
              <button onClick={() => setMenuOpen(false)}>
                <img
                  src="icons8-cancel.svg"
                  alt="Cancel button"
                  className="fixed top-4 right-3 z-50 w-6 h-6"
                />
              </button>
              <p className="text-black text-lg font-bold">Eniola & Akorede</p>
              <p className="text-[#767676] font-semibold">December 20, 2025</p>
              <p className="text-[#767676] font-semibold">Houston, TX</p>
            </div>
            <div className="flex flex-col h-[240px] justify-between text-black text-center">
              <ul className="flex flex-col h-full text-2xl justify-between">
                <li
                  // onClick={() => setSelected("home")}
                  onClick={() => navigateTo("home", "/home")}
                  className={`${selected === "home" ? "underline" : ""
                    } hover:underline underline-offset-[8px]`}
                >
                  <a href="#">Home</a>
                </li>
                <li
                  // onClick={() => setSelected("schedule")}
                  onClick={() => navigateTo("schedule", "/schedule")}
                  className={`${selected === "schedule" ? "underline" : ""
                    } hover:underline underline-offset-[8px]`}
                >
                  <a href="#">Schedule</a>
                </li>
                <li
                  // onClick={() => {
                  //   setSelected("registry");
                  // }}
                  onClick={() => navigateTo("registry", "/registry")}
                  className={`${selected === "registry" ? "underline" : ""
                    } hover:underline underline-offset-[8px]`}
                >
                  <a href="https://www.amazon.com/wedding/share/eni-korede" target="_blank" rel="noopener noreferrer">Registry</a>
                </li>
                {/* <li
                  onClick={() => setSelected("rsvp")}
                  className={`${selected === "rsvp" ? "underline" : ""
                    } hover:underline underline-offset-[8px]`}
                >
                  <a href="#">RSVP</a>
                </li> */}
                <li
                  // onClick={() => setSelected("check-in")}
                  onClick={() => navigateTo("check-in", "/check-in")}
                  className={`${selected === "check-in" ? "underline" : ""
                    } hover:underline underline-offset-[8px]`}
                >
                  <a href="#">Check In</a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      <div className="flex md:hidden fixed top-4 right-4 z-20">
        <Hamburger onClick={() => setMenuOpen((prev) => !prev)} />
      </div>
      <div className="hidden md:flex flex-col items-center justify-between h-[25vh] w-[100vw] mb-[10px] max-h-[175px] bg-white">
        <h3 className="text-5xl text-[#717769] font-medium mt-2">
          ENIOLA & AKOREDE
        </h3>

          <ul className="flex flex-row list-none space-x-4 mb-2 text-[#717769] font-normal text-2xl">
          <li
            // onClick={() => setSelected("home")}
            onClick={() => navigateTo("home", "/home")}
            className={`${selected === "home" ? "underline" : ""
              } hover:underline underline-offset-[8px]`}
          >
            <a href="/" onClick={(e) => e.preventDefault()}>Home</a>
          </li>
          <li
            // onClick={() => setSelected("schedule")}
            onClick={() => navigateTo("schedule", "/schedule")}
            className={`${selected === "schedule" ? "underline" : ""
              } hover:underline underline-offset-[8px]`}
          >
            <a href="/schedule" onClick={(e) => e.preventDefault()}>Schedule</a>
          </li>
          <li
            // onClick={() => {
            //   setSelected("registry");
            // }}
            onClick={() => navigateTo("registry", "/registry")}
            className={`${selected === "registry" ? "underline" : ""
              } hover:underline underline-offset-[8px]`}
          >
            <a href="https://www.amazon.com/wedding/share/eni-korede" target="_blank" rel="noopener noreferrer">Registry</a>
          </li>
          {/* <li
            onClick={() => setSelected("rsvp")}
            className={`${selected === "rsvp" ? "underline" : ""
              } hover:underline underline-offset-[8px]`}
          >
            <a href="#">RSVP</a>e
          </li> */}
          <li
            onClick={() => navigateTo("check-in", "/check-in")}
            className={`${selected === "check-in" ? "underline" : ""
              } hover:underline underline-offset-[8px]`}
          >
            <a href="/check-in" onClick={(e) => e.preventDefault()}>Check In</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        {selected === "home" && (
          // <Home
          //   onRSVPClick={() => setSelected("rsvp")} />
          <Home />
        )}
        {/* {selected === "rsvp" && <RSVP />} */}
        {selected === "check-in" && <CheckIn />}
        {selected === "registry" && (
          <div className="flex flex-col items-center justify-center h-[85vh] md:h-[60vh]">
            <p className="text-[#717769] text-lg md:text-2xl font-light md:font-medium">
              {" "}
              Amazon registry opened in new tab :)
            </p>{" "}
          </div>
        )}
        {selected === "schedule" && <Schedule />}
      </div>
      <div className="w-full flex justify-center">
        <img
          className="w-[175px] mb-10"
          src="/single-wreath.png"
          alt="image of a wedding wreath"
        />
      </div>
    </div>
  );
}

export default App;
