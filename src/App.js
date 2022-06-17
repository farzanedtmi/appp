import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      This is coded by farzan {""}
      <a
        className="App-link"
        href="https://github.com/farzanedtmi/appp"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-source on github
      </a>
      <Weather />
    </div>
  );
}
