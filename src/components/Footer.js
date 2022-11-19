import React from "react";
import logo from "../assets/icons/logo.svg";
import phone from "../assets/icons/phone.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer--container">
        <div className="footer--logo-copy">
          <a href="#">
            <img src={logo} />
          </a>
          <p>Copyright &copy; 2022 ER - All Rights Reserved.</p>
        </div>

        <nav className="footer--nav">
          <div>
            <ul className="footer--nav-links">
              <li>
                <a
                  href="#"
                  className="footer--nav-link footer--nav-link-heading"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <img src={phone} /> 07437997054
              </li>
            </ul>
          </div>

          <div>
            <ul className="footer--nav-links">
              <li>
                <a
                  href="#"
                  className="footer--nav-link footer--nav-link-heading"
                >
                  Our Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="footer--nav-links">
              <li>
                <a
                  href="#"
                  className="footer--nav-link footer--nav-link-heading"
                >
                  About Us
                </a>
              </li>
              <li>About</li>
            </ul>
          </div>

          <div className="social-links">
            <a href="#">
              <img src={instagram} />
            </a>
            <a href="#">
              <img src={facebook} />
            </a>
            <a href="#">
              <img src={twitter} />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
