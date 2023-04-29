import React, { useEffect, useState } from "react";
import axios from "axios";

const Layout = () => {
  const [temp, setTemp] = useState("loading...");
  const [temp_max, setTemp_Max] = useState("loading...");
  const [temp_min, setTemp_Min] = useState("loading...");
  const [pressure, setPressure] = useState("loading...");
  const [humidity, setHumidity] = useState("loading...");
  const [speed, setSpeed] = useState("loading...");
  const [feel, setFeel] = useState("loading...");
  const [city, setCity] = useState("New Delhi");
  const [search, setSearch] = useState("New Delhi");

  const kelvinToCelsius = (temp) => {
    return Math.round(temp - 273.15);
  };

  // Update the state variables with the converted temperature values

  const state = encodeURIComponent(city);
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setSearch(city);
    }
  };

  useEffect(() => {
    const apiKey = "e42d8edddf785d1fd71a927b109ab4b1";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=e42d8edddf785d1fd71a927b109ab4b1`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);
        setTemp(kelvinToCelsius(response.data.main.temp));
        setTemp_Max(kelvinToCelsius(response.data.main.temp_max));
        setTemp_Min(kelvinToCelsius(response.data.main.temp_min));
        setFeel(kelvinToCelsius(response.data.main.feels_like));

        setPressure(response.data.main.pressure);
        setHumidity(response.data.main.humidity);
        setSpeed(response.data.wind.speed);
        // setFeel(response.data.main.feels_like);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [search]);

  return (
    <div className="container mx-auto mt-[100px] px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Weather of city</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter city"
            className="rounded-l-lg py-2 px-4 bg-gray-100 focus:outline-none focus:shadow-outline w-64"
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r-lg"
            onClick={() => setSearch(city)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl w-[100%] border border-gray-100 p-8">
          <h2 className="text-xl font-bold mb-4">{search.toUpperCase()} </h2>
          <div className="flex items-center mb-4">
            <div className="text-2xl font-bold text-gray-900">{temp}&deg;C</div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-gray-700">Feels Like:</p>
              <p className="text-lg font-bold">{feel}&deg;C</p>
            </div>
            <div>
              <p className="text-gray-700">Wind Speed :</p>
              <p className="text-lg font-bold">{speed} kmps </p>
            </div>
            <div>
              <p className="text-gray-700">Humidity:</p>
              <p className="text-lg font-bold">{humidity}%</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-gray-700">Temperature Range:</p>
              <p className="text-lg font-bold">
                {temp_min}&deg;C - {temp_max}&deg;C
              </p>
            </div>
            <div>
              <p className="text-gray-700">Pressure :</p>
              <p className="text-lg font-bold">{pressure} Pa </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
