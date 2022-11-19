import React from "react";
import "./Contact.css";
import HeadingIntro from "./HeadingIntro.js";
import whatsappIcon from "../assets/icons/Whatsapp.svg";

export default function Contact() {
  return (
    <section>
      <HeadingIntro heading="Contact Us" subheading="our contact" />

      <div className="contact">
        <div className="contact--form-container">
          <h4>get in touch</h4>

          <form>
            <div className="contact--input">
              <input type="text" placeholder="Name*" required />
            </div>

            <div className="contact--input">
              <input type="email" placeholder="Email*" required />
            </div>

            <div className="contact--message">
              <textarea placeholder="Message" rows="8" required />
            </div>

            <input type="submit" value="Send" className="contact--submit-btn" />
          </form>
        </div>

        <div className="contact--whatsapp">
          <p>07437997054</p>

          <div className="contact-whatsapp-link">
            <a
              href="https://api.whatsapp.com/send/?phone=07437997054&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsappIcon} />
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
