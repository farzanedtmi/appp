import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.main.name,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div>
        <form>
          <input
            type="search"
            autoFocus="on"
            placeholder="Enter a City "
            className="search"
          />{" "}
          <input type="submit" value="Search" class="btn btn-primary" />
        </form>
        <br></br>
        <div className="Weather ">
          <div className="row">
            <div className="col-4">
              <ul>
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
                <li>{Math.round(weatherData.temperature)} ℃</li>
              </ul>
            </div>
            <div className="col-4">
              {" "}
              <ul>
                <li>{weatherData.city}</li>
                <li>
                  {" "}
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                    alt="aks"
                  ></img>
                </li>
              </ul>
            </div>
            <div className="col-4">
              {" "}
              <ul>
                <li>Precipitation:0% </li>
                <li> Humidity:{weatherData.humidity}</li>
                <li> Wind:{weatherData.speed} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0b121fa36f264f094fd0196401db2f00";
    let City = "Tehran";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
