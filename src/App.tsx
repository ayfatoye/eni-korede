import "./App.css";
import Home from "./components/Home";
import RSVP from "./components/RSVP";
import { useState } from "react";

function Hamburger({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-2xl"
    >
      <img
        src="/icons8-hamburger-menu.svg"
        alt="Menu"
        className="w-5 h-5"
      />
    </button>
  );
}

function App() {
  const [selected, setSelected] = useState<string | null>("home");

  return (
    <div className="relative">
      <div className="flex md:hidden absolute top-4 right-4 z-20">
        <Hamburger />
      </div>
      <div className="hidden md:flex flex-col items-center justify-between h-[25vh] w-[100vw] mb-[10px] max-h-[175px] bg-white">
        <h3 className="text-5xl text-[#717769] font-medium mt-2">
          ENIOLA & AKOREDE
        </h3>

        <ul className="flex flex-row list-none space-x-4 mb-2 text-[#717769] font-normal text-2xl">
          <li
            onClick={() => setSelected("home")}
            className={`${selected === "home" ? "underline" : ""} hover:underline underline-offset-[8px]`}
          >
            <a href="#">Home</a>
          </li>
          <li
            onClick={() => setSelected("schedule")}
            className={`${selected === "schedule" ? "underline" : ""} hover:underline underline-offset-[8px]`}
          >
            <a href="#">Schedule</a>
          </li>
          <li
            onClick={() => setSelected("registry")}
            className={`${selected === "registry" ? "underline" : ""} hover:underline underline-offset-[8px]`}
          >
            <a href="#">Registry</a>
          </li>
          <li
            onClick={() => setSelected("rsvp")}
            className={`${selected === "rsvp" ? "underline" : ""} hover:underline underline-offset-[8px]`}
          >
            <a href="#">RSVP</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        {selected === "home" && <Home />}
        {selected === "rsvp" && <RSVP />}
      </div>
    </div>
  );
}

export default App;
