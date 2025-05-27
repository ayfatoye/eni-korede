import { useState } from "react";
import axios from "axios";

type formData = {
  name: string;
  email: string;
  attending: boolean; // if attending, I need everything else except phone provider
  phoneProvider: string; // dropdown of phone providers
  phoneNumber: string; // no country code either 10 digit phone number or 11 digit phone number
  countryCode: string; // e.g: +1 for US, +234 for Nigeria
  invitorName?: string; // the name of the person who invited them
};

function RSVP() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:3000/api/rsvp", formData)
        .then((response) => {
          console.log("RSVP submitted successfully:", response.data);
        });
    } catch (error) {
      console.error("Error submitting RSVP:", error);
    }
  };

  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    attending: true,
    phoneNumber: "",
    phoneProvider: "",
    countryCode: "+1", 
    invitorName: ""
  });

  return (
    <>
      <div className="flex flex-col w-[736px] py-8 px-4 text-[#717769] bg-[#71776914]">
        <p className="">
          Please fill out the form below. Note that we are not allowing plus
          ones at this time, thank you for coming to our wedding :)
        </p>

        <div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="FirstName LastName"
              value={formData.name}
              onChange={handleChange}
              className="pl-2 placeholder:font-semibold border bg-white py-2 my-2 text-[#717769]"
            />
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="pl-2 placeholder:font-semibold border bg-white py-2 my-2"
            />

            <label>
              Attending?
              <select
                name="attending"
                value={formData.attending ? "yes" : "no"}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    attending: e.target.value === "yes",
                  }))
                }
                className="pl-2 placeholder:font-semibold border bg-white py-2 mx-2 my-2"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            <div className="flex gap-2 items-center my-2">
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
                placeholder="e.g: 8328450812 or 08162548259"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="pl-2 placeholder:font-semibold border bg-white py-2 flex-1 my-2"
              />
            </div>

             <input
                type="text"
                name="phoneProvider"
                placeholder="e.g: ATT, MTN"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="pl-2 placeholder:font-semibold border bg-white py-2 flex-1 my-2"
              />

               <input
                type="text"
                name="invitorName"
                placeholder="e.g: Name of person who invited you"
                value={formData.invitorName}
                onChange={handleChange}
                className="pl-2 placeholder:font-semibold border bg-white py-2 flex-1 my-2"
              />

          </form>
        </div>
      </div>
    </>
  );
}

export default RSVP;
