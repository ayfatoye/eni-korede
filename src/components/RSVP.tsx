import { useState } from "react";
import axios from "axios";

type formData = {
    name: string;
    email: string;
    attending: boolean; // if attending, I need everything else except phone provider
    phoneProvider: string; // dropdown of phone providers
    phoneNumber: string; // no country code either 10 digit phone number or 11 digit phone number
    invitorName?: string; // the name of the person who invited them
}

function RSVP(){
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    } 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try{
            axios.post("/api/rsvp", formData)
                .then(response => {
                    console.log("RSVP submitted successfully:", response.data);
                })
        }
        catch (error) {
            console.error("Error submitting RSVP:", error);
        }
    }

    const [formData, setFormData] = useState<formData>({
        name: "",
        email: "",
        attending: false,
        phoneNumber: "",
        phoneProvider: "",
        invitorName: ""
    });

    return(
        <>
            <div >
                <p>Please fill out the form below. Note that we are not allowing plus ones at this time, thank you for coming to our wedding :)</p>

                <div>
                    <form>

                    </form>
                </div>
            </div>
        </>
    )

}

export default RSVP;