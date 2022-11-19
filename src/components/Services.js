import React from "react";
import HeadingIntro from "./HeadingIntro.js";
import ServiceImg1 from "../assets/images/services-img1.png";
import ServiceImg2 from "../assets/images/services-img2.png";
import ServiceImg3 from "../assets/images/services-img3.png";
import ServiceImg4 from "../assets/images/services-img4.png";
import "./Services.css";

export default function Services() {
  return (
    <section>
      <div className="services--container">
        <HeadingIntro
          heading="Services"
          subheading="our services for clients"
        />

        <div className="services--content">
          <div className="services--data">
            <div className="services--img-container">
              <img src={ServiceImg1} alt="People in office working" />
            </div>

            <h3>permanent recruitment</h3>

            <p>
              We provide the highest caliber of staff at competitive prices with
              a service that is friendly, professional, and efficient Nurse
              Recruitment Employment Agency.
            </p>
          </div>

          <div className="services--data">
            <div className="services--img-container">
              <img src={ServiceImg2} alt="People in office working" />
            </div>

            <h3>temporary recruitment</h3>

            <p>
              Need to cover an absence, or have a new project/team to implement,
              we have the specialist knowledge to supply qualified staff as per
              requirements Nurse Recruitment all bands Candidates available at
              Employment Agency Brooks and Quays Recruitment.
            </p>
          </div>

          <div className="services--data">
            <div className="services--img-container">
              <img src={ServiceImg3} alt="People in office working" />
            </div>

            <h3>strategic planning</h3>

            <p>
              From targeted candidate sourcing to assessment and management, if
              you have important projects to Recruitment staff up we can find
              you the right teams.
            </p>
          </div>

          <div className="services--data">
            <div className="services--img-container">
              <img src={ServiceImg4} alt="People in office working" />
            </div>

            <h3>recruitment process outsourcing</h3>

            <p>
              Let us take the responsibility of your permanent recruitment by
              transferring all or part of your recruitment function to Brooks
              and Quays Transatlantic Ltd with an RPO agreement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
