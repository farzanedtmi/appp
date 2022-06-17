import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <form>
        <input
          type="text"
          autofocus="off"
          placeholder="Enter a City "
          class="search"
        />{" "}
        <input type="submit" value="Search" class="btn btn-primary" />
      </form>

      <div class="container">
        <div class="row">
          <div class="col-4">
            <ul>
              <li>2 AM </li>
              <li>10 ℃</li>
            </ul>
          </div>
          <div class="col-4">
            {" "}
            <ul>
              <li>Hamedan</li>
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
              <li>Precipitation: 0% </li>
              <li> Humidity: 22% </li>
              <li>Wind: 8 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
