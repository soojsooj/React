import React from 'react'

const WeatherBox = ({weather}) => {
    console.log('weather는', weather);
  return (
    <div className='weather-box'>
        <div>{weather?.name}</div>
        <h2>{Math.floor(weather?.main.temp)}C°/{Math.floor(weather?.main.temp*1.8+32)}F°</h2>
        <h6>H:{Math.floor(weather?.main.temp_max)}C° L:{Math.floor(weather?.main.temp_min)}C°</h6>
        <h5>{weather?.weather[0].description}</h5>
    </div>
  )
}

export default WeatherBox