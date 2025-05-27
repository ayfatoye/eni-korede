import "./App.css";
import Home from "./components/Home";
import RSVP from "./components/RSVP";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState<string | null>("home");

  return (
    <>
      <div className="flex flex-col items-center justify-between h-[20vh] w-[100vw] bg-white">
        {/* <h3 className="text-3xl text-[#717769] font-bold mt-2">ENIOLA & AKOREDE</h3> */}
        <h3 className="text-5xl text-[#717769] font-medium mt-2">
          ENIOLA & AKOREDE
        </h3>

        <ul className="flex flex-row list-none space-x-4 mb-2 text-[#717769] font-normal text-2xl">
          <li
            onClick={() => setSelected("home")}
            className="hover:underline underline-offset-[8px]"
          >
            <a href="#">Home</a>
          </li>
          <li
            onClick={() => setSelected("schedule")}
            className="hover:underline underline-offset-[8px]"
          >
            <a href="#">Schedule</a>
          </li>
          <li
            onClick={() => setSelected("registry")}
            className="hover:underline underline-offset-[8px]"
          >
            <a href="#">Registry</a>
          </li>
          <li
            onClick={() => setSelected("rsvp")}
            className="hover:underline underline-offset-[8px]"
          >
            <a href="#">RSVP</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        {selected === "home" && <Home />}
        {selected === "rsvp" && <RSVP />}
      </div>
    </>
  );
}

export default App;
