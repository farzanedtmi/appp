import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather city="Hamedan" />
      </div>
      This is coded by farzan {""}
      <a
        className="Git-link"
        href="https://github.com/farzanedtmi/appp"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-source on github
      </a>
    </div>
  );
}
