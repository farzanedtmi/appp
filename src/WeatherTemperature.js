import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature"> {Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          ℃ /{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature"> {Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            ℃
          </a>
        </span>{" "}
        <span>/ ℉</span>
      </div>
    );
  }
}
