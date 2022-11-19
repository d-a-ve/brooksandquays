import React from "react";
import "./Welcome.css";

export default function Welcome() {
  return (
    <section className="welcome--container">
      <p className="welcome--greeting">Hello</p>
      <h3>Welcome</h3>
      <p className="welcome--content">
        There's much to see here. So, take your time, look around, and learn all
        there is to know about us . We hope you enjoy our site and take a moment
        to drop us a line.
      </p>

      <div className="welcome--link-container">
        <a
          href="https://brooksandquays.co.uk/"
          target="_blank"
          rel="noreferrer"
          className="welcome--link"
        >
          Find Out More
        </a>
      </div>
    </section>
  );
}
