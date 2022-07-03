import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.main.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setReady(true);
  }
  function search() {
    const apiKey = "0b121fa36f264f094fd0196401db2f00";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus="on"
            placeholder="Enter a City "
            className="search"
            onChange={handleCityChange}
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
                <li>{city}</li>
                <li> {weatherData.iconUrl}</li>
                <li>{weatherData.description}</li>
              </ul>
            </div>
            <div className="col-4">
              {" "}
              <ul>
                <li>Precipitation:0% </li>
                <li> Humidity:{weatherData.humidity}</li>
                <li> Wind:{Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
