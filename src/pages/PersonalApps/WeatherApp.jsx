import React, { useEffect, useState } from 'react';
import './css/weatherapp.css';

const WeatherApp = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      let key = `bd4ea33ecf905116d12af172e008dbae`;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${key}`;
      const response = await fetch(url);
      const resJson = await response.json();
      //console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search])

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div className="Cont">
        <div className="box">
          <div className="inputData">
            <input type="search" value={search} className="inputField" onChange={(event) => { setSearch(event.target.value) }} />
          </div>

          {!city ? (
            <p className="errorMsg"> No Data Found </p>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">
                  <i className="fas fa-street-view"></i>{search}
                </h2>
                <h1 className="temp">
                  {city.temp}<span>&#176;</span>Cel
                </h1>
                <h3 className="tempmin_max"> Min : {city.temp_min}<span>&#176;</span>Cel | Max : {city.temp_max}<span>&#176;</span> Cel </h3>
              </div>

              <div className="wave-one"></div>
              <div className="wave-two"></div>
              <div className="wave-three"></div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
