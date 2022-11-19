import React from "react";
import HeaderImg from "../assets/images/brooks-and-quays-header.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="menu">
        <div className="menu--line"></div>
        <div className="menu--line"></div>
        <div className="menu--line"></div>
      </div>

      <nav className="nav">
        <ul className="nav--links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Candidates</a>
          </li>
        </ul>
      </nav>

      <img src={HeaderImg} className="header-img" />
    </header>
  );
}
