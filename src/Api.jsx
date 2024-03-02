import React, { useState } from 'react';
import axios from 'axios';
import './Api.css'

function Api() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  console.log(weatherData);

  const baseKey = 'a2e9598efeed1ffda20eb3001bc7f53b';
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  const getWeatherData = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          q: city,
          appid: baseKey,

        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className='main text-center p-5'>

      <div className='d-flex'>
      <input  style={{ marginLeft: '40%' ,height:'30px'}} type="text" className='form-control w-25 mt-5 ' placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={getWeatherData} className='btn btn-primary p-1 border-radius-5 m-5'><i class="fa-solid fa-magnifying-glass mx-2"></i></button>
     
      </div>
      {weatherData && (
        <div>
          <h2 className='text-white'>{weatherData.name}, {weatherData.sys.country}</h2>
          <p className='text-white'>Temperature: {(weatherData.main.temp - 273.15).toFixed(0)} °C</p>
          <p className='text-white'>Weather: {weatherData.weather[0].description}</p>

        </div>
      )}

    </div>
  )
}

export default Api
