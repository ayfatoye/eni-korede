import { useState } from "react";
import seatChartData from "./seatChart.json";

interface Guest {
  fName: string;
  lName: string;
  // phoneNumber: string;
  seatNumber: string;
}

// cast imported JSON to a typed array of guests
const seatChart = seatChartData as Guest[];



type formData = {
  fName: string;
  lName: string;
  // phoneNumber: string; // should only be 10 digits, e.g: 8328450811 or 8162548259
  // countryCode: string; // e.g: +1 for US, +234 for Nigeria
};

function CheckIn() {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // console.log("WHAT THE FUCK!!")
    e.preventDefault();
    const {
      fName,
      lName,
      // phoneNumber,
      // countryCode,
    } = formData;

    if (
      !fName.trim() ||
      !lName.trim() 
      // !phoneNumber.trim() ||
      // !countryCode.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    // const phoneRegex = /^\d{10}$/;
    // if (!phoneRegex.test(phoneNumber)) {
    //   alert("Please enter 10 digits. For NGA numbers, use 8162548259 instead of 08162548259, for example.");
    //   return;
    // }

    const match = seatChart.find((g) =>
      g.fName.trim().toLowerCase() === fName.trim().toLowerCase() &&
      g.lName.trim().toLowerCase() === lName.trim().toLowerCase()
    );

    if (match) {
      alert(`Season Greetings, ${fName} ${lName}! Your table number is ${match.seatNumber} :)`);
      return;
    }

    alert("No matching reservation found. Please check with the ushers at the check-in desk.");
    return;

  };

  const [formData, setFormData] = useState<formData>({
    lName: "",
    fName: "",
    // phoneNumber: "",
    // countryCode: "+1"
  });

  // const [loading, setLoading] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* {loading && (
        <div className="fixed inset-0 z-30 flex items-center justify-center">

          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

          <div className="relative w-[200px] h-[200px] bg-white text-black text-2xl flex items-center justify-center rounded-md shadow-md z-40">
            Submitting...
          </div>
        </div>
      )} */}

      <div className="flex justify-center items-center mt-[75px] max-h-[325px]:mt-[120px] md:mt-8 mb-[35px] min-w-[320px] w-[90vw] md:w-[736px] text-[#717769]">
        <img
          src="/eni-kore-3.jpeg"
          alt="the bride and groom"
          className="w-4/5 h-[120vh] object-cover object-[30%_55%]"
        />
      </div>

      <div className="flex flex-col rounded-2xl mt-[25px] max-h-[325px]:mt-[120px] md:mt-0 mb-[35px] min-w-[320px] w-[90vw] md:w-[736px] py-8 px-4 text-[#717769] bg-[#71776914]">
        <p className="">
          Please fill out the form below to check in and receive your seat number for the wedding.
        </p>

        <div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              name="fName"
              placeholder="First Name"
              value={formData.fName}
              onChange={handleChange}
              className="pl-2 font-bold placeholder:font-semibold border bg-white py-2 my-2 text-[#717769]"
            />
            <input
              type="text"
              name="lName"
              placeholder="Last Name/Surname"
              value={formData.lName}
              onChange={handleChange}
              className="pl-2 font-bold placeholder:font-semibold border bg-white py-2 my-2"
            />

            {/* <div className="flex gap-2 items-center my-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="border py-2 px-2"
              >
                <option value="+1">US (+1)</option>
                <option value="+234">NGA (+234)</option>
              </select>

              <input
                type="text"
                name="phoneNumber"
                placeholder="e.g: 8328450812 or 8162548259"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="pl-2 font-bold placeholder:font-semibold border bg-white py-2 flex-1 my-2"
              />
            </div> */}

            <div>
              <button
                type="submit"
                className="appearance-none bg-[#717769] hover:bg-[#44473F] active:bg-[#44473F] text-black w-[200px] mt-6 rounded-md text-lg py-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckIn;
