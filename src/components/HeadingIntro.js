import React from "react";
import "./HeadingIntro.css";

export default function HeadingIntro(props) {
  return (
    <div>
      <div className="heading--container">
        <div className="heading--line"></div>
        <h2 className="heading">{props.heading}</h2>
        <div className="heading--line"></div>
      </div>
      <p className="subheading">{props.subheading}</p>
    </div>
  );
}
