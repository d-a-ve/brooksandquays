import React from "react";
import "./About.css";
import HeadingIntro from "./HeadingIntro";
import aboutImg1 from "../assets/images/about-us-img1.png";
import aboutImg2 from "../assets/images/about-us-img2.png";
import aboutImg3 from "../assets/images/our-division-img.png";

export default function About() {
  return (
    <section className="about">
      <div className="about--main">
        <HeadingIntro heading="About Us" subheading="about" />

        <div className="about--content">
          <div className="about--content-data">
            <h3>Experienced Professionals</h3>

            <div className="about--content-data-img">
              <img src={aboutImg1} alt="People showcasing their experience" />
            </div>

            <p>
              As a staffing agency that helps great companies hire dependable
              employees from the refugee workforce. After nearly ten years in
              staffing experienced professionals staff we are more convinced
              than ever that hiring refugees is not only a socially responsible
              decision, but also a profitable decision for your company.
            </p>
          </div>

          <div className="about--content-data">
            <h3>Why to Choose</h3>

            <div className="about--content-data-img">
              <img
                src={aboutImg2}
                alt="man extending his hand for a handshake"
              />
            </div>

            <p>
              We diligently strive to ensure that all employees are qualified
              and experienced to exceed your company expectations. tests and
              background checks are completed on each applicant to provide you
              with a e-verified workforce. Additionally, reliable transportation
              and English fluency are a must. While other staffing agencies are
              sourcing tal Show More.
            </p>
          </div>

          <div className="about--content-data">
            <h3>Our Team</h3>

            <div className="about--content-data-img">
              <img
                src={aboutImg3}
                alt="A group of people laughing and working"
              />
            </div>

            <p>
              We take pride in providing top notch employees to companies across
              the Uk in industries including, but not limited to: light
              industrial work, Health care, hospitality, and construction,
              warehouses. Feel free to contact us about your specific industry,
              and we'll be happy to determine and assure to meet your needs. Our
              Senior Team are rec Show More.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
