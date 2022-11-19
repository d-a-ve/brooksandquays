import React from "react";
import HeadingIntro from "./HeadingIntro.js";
import divisionImg from "../assets/images/our-division-img.png";
import "./Division.css";

export default function Division() {
  return (
    <div>
      <HeadingIntro
        heading="Our Division"
        subheading="our division for clients"
      />

      <div className="division--container">
        <div className="division--img">
          <img src={divisionImg} alt="People in our division" />
        </div>
        <div className="division--content">
          <h3>The name you can always trust for Quality and Reliability</h3>
          <div className="division--main-content">
            <p>
              We render our clients with reliable and high-quality Recruitment
              services through efficient quality measures and screenings to meet
              the needs of our clients and enjoy a better standard of service.
            </p>

            <ul>
              <li>Client Satisfaction</li>
              <li>Tailor-Made Staffing Solutions</li>
              <li>Large Database of Quality Candidates</li>
              <li>24x7 Commitment To Service</li>
              <li>Ready-to-Deploy Candidates</li>
              <li>Integrated Model & Methodology</li>
            </ul>
          </div>
          <div className="division--link-container">
            <a
              href="https://brooksandquays.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="division--link"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
