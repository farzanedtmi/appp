import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.main.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
    });
    setReady(true);
  }
  function search() {
    const apiKey = "4f5068bbd16732ce96de6092c37d504d";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    event.preventDefault();
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
          <input type="submit" value="Search" class="btn btn-success" />
        </form>
        <br></br>
        <div className="Weather ">
          <div className="row">
            <div className="col-4">
              <ul>
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
                <li>
                  <span>
                    <WeatherTemperature celsius={weatherData.temperature} />{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-4">
              {" "}
              <ul>
                <li className="city">
                  <WeatherInfo data={weatherData} />
                </li>
                <li>
                  <WeatherIcon code={weatherData.iconUrl} size={52} />
                </li>
                <li> {weatherData.description}</li>
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
        </div>{" "}
        <WeatherForecast coordinates={weatherData.coordinates} />{" "}
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
