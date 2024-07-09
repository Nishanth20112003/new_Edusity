import React from "react";
import msg_icon from "./assets/msg-icon.png";
import mail_icon from "./assets/mail-icon.png";
import phone_icon from "./assets/phone-icon.png";
import location_icon from "./assets/location-icon.png";
import white_arrow from "./assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "344939a3-cecd-4d77-887b-9e05ed5b11e3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="contact text-black flex gap-10 p-2 justify-center">
        <div className="contact-col">
          <h3 className="inline-flex items-center font-semibold text-lg">
            Send us a message{" "}
            <img src={msg_icon} className="w-[35px] ml-[10px]" />
          </h3>
          <p className="max-w-[450px]">
            Answer Feel free to reach out through any of the following channels:
            our convenient online contact form, a direct email to our dedicated
            support team, or a phone call to our friendly representatives who
            are available 24/7 to assist you with any questions or concerns you
            may have about our innovative online learning platform.
          </p>
          <ul>
            <li>
              <img src={mail_icon} className="w-[25px] mr-[10px] mt-1" />
              nishanth20112003@gmail.com
            </li>
            <li>
              <img src={phone_icon} className="w-[25px] mr-[10px] mt-1" />
              +91 6269032386
            </li>
            <li>
              <img src={location_icon} className="w-[25px] mr-[10px] mt-1" />
              Street: 87 Peters Road, City: Chennai <br />
              State/Province: Tamil Nadu <br />
              Zip Code: 600014
            </li>
          </ul>
        </div>
        <div className="contact-col sm:w-[50%]">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-[100%]"
            />
            <label>Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <label>Write your message here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <div className="flex gap-5 items-center">
            <button
              className="btn dark-btn px-5 py-1 inline-flex gap-2 items-center rounded-full"
              type="submit"
            >
              Submit <img src={white_arrow} className="w-[20px] mt-1" />
            </button>
          <span className="block mt-[20px] mb-[20px] mr-0 ml-0">{result}</span>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
