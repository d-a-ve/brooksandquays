import React from "react";
import Services from "./Services.js";
import Welcome from "./Welcome.js";
import "./ServiceWelcome.css";

export default function ServiceWelcome() {
  return (
    <div className="service-welcome--container">
      <div className="overlay"></div>
      <Services />
      <Welcome />
    </div>
  );
}
