import React, { useState, useEffect } from 'react'
import './App.css'
import { fetchData } from './FETCHDATA'


export const App = () => {
  const [query, setquery] = useState('')
  const [weather, setWeather] = useState([])
  useEffect(() => {
    const getData = async () => {
      const weather_data = await fetchData("Islamabad")
      setWeather(weather_data) 
    }
    getData()
  }, [])

  const search = async (e) => {
    if (e.key === 'Enter') {
      const weather_data = await fetchData(query)
      setWeather(weather_data)
      setquery('')
      console.log(weather_data)
    }
  }

  return (
    <div className='main-container'>
      <div className='search-container' id='container'>
        <input className='search' placeholder='search' value={query} onChange={e => setquery(e.target.value)} onKeyPress={search} />
        {weather.main ? (<div className='result_box' id='result'>
          <h2> <span>{weather.name}</span> <sup className='supr'>{weather.sys.country}</sup></h2>
          <div>
            <div><h1>{weather.main.temp}<sup>&deg;</sup>C</h1></div>
          </div>
          <div className="info">
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>

          <div><span>Feels like:</span> <span>{weather.main.feels_like}<sup>&deg;</sup>C</span></div>
          <div><span> Maximum temp:</span> <span>{weather.main.temp_max}<sup>&deg;</sup>C</span></div>
          <div><span> Minimum temp:</span> <span>{weather.main.temp_min}<sup>&deg;</sup>C</span></div>
        </div>) : <div className='result_box' id='result'>{weather} </div>}
      </div>
    </div>

  )

}
export default App
