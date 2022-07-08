import React from "react";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "0b121fa36f264f094fd0196401db2f00";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForcast">
      <div className="row">
        <div className="col">
          <div className="WeatherForcast-day">Fri </div> <div> img </div>{" "}
          <div className="WeatherForcast-temperature">
            <span className="WeatherForcast-temperature-min">10 ℃</span>{" "}
            <span className="WeatherForcast-temperature-max">19℃</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
