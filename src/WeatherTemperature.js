import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
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
        <span className="temperature"> {Math.round(props.celsuis)}</span>
        <span className="unit">
          {" "}
          ℃ /{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  }
   else
    {
    return (
let fahrenheit =  (props.celsuis * 9) / 5 + 32;
      <div className="WeatherTemperature">
        <span className="temperature"> {Math.round(props.fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            ℃
          </a>
        </span>{" "}
        <span>/ °F</span>
      </div>
    );
  }
}
