import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForeCast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForeCast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForcast">
        <div className="row">
          <div className="col">
            <div className="WeatherForcast-day">Fri </div>{" "}
            <WeatherIcon code="01d" size={35} />
            <div className="WeatherForcast-temperature">
              <span className="WeatherForcast-temperature-min">10 ℃</span>{" "}
              <span className="WeatherForcast-temperature-max">19℃</span>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "0b121fa36f264f094fd0196401db2f00";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
