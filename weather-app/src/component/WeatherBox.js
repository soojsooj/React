import React from 'react'

const WeatherBox = ({weather}) => {
  console.log(weather)
  return (
    <div className='weather-box'>
        <h4>{weather?.name}</h4>
        <h1>{weather?.main.temp}°</h1>
        <h3>{weather?.weather[0].description}</h3>
        <h4>H:{weather?.main.temp_max}° L:{weather?.main.temp_min}°</h4>
    </div>
  )
}
 
export default WeatherBox