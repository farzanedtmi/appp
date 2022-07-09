import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForcast-day">{day()}</div>{" "}
      <WeatherIcon code={props.data.weather[0].icon} size={35} />
      <div className="WeatherForcast-temperature">
        <span className="WeatherForcast-temperature-min">
          {" "}
          {Math.round(props.data.temp.min)}℃
        </span>{" "}
        <span className="WeatherForcast-temperature-max">
          {Math.round(props.data.temp.max)}℃
        </span>{" "}
      </div>
    </div>
  );
}
