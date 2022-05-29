import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity}) => {
  console.log('cities:', cities);
  
  return (
    <div className='weather-btn'>
       <Button variant="light">Current Location</Button>

       {cities.map((item,index)=>(
         <Button 
          variant='light' 
          key={index} 
          onClick={() =>  setCity(item)}
          >
            {item}
         </Button> 
         ))}
    </div>
  )
}

export default WeatherButton;