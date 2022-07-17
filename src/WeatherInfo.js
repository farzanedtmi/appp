import React from "react";

export default function WeatherInfo(props) {
  return (
    <h1>
      <div className="WeatherInfo">{props.data.city} </div>
    </h1>
  );
}
