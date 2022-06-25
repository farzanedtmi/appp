import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.main.speed,
      city: response.data.main.name,
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
            class="search"
          />{" "}
          <input type="submit" value="Search" class="btn btn-primary" />
        </form>
        <br></br>
        <div class="Weather ">
          <div class="row">
            <div class="col-4">
              <ul>
                <li>2 AM </li>
                <li>{Math.Round(weatherData.temperature)} ℃</li>
              </ul>
            </div>
            <div class="col-4">
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
            <div class="col-4">
              {" "}
              <ul>
                <li>Precipitation:0% </li>
                <li> Humidity:{weatherData.humidity}</li>
                <li>Wind: {weatherData.speed} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0b121fa36f264f094fd0196401db2f00";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
