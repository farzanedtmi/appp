import React from "react";

export default function WeatherInfo(props) {
  return <div className="WeatherInfo">{props.data.city} </div>;
}
