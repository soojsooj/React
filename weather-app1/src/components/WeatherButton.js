import React from 'react'
import { Button } from 'react-bootstrap';


const WeatherButton = () => {
  return (
    <div>
        <Button variant="dark">Current Location</Button>
        <Button variant="dark">New York</Button>
        <Button variant="dark">Milano</Button>
    </div>
  )
}

export default WeatherButton