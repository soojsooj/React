import { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';

//1. 앱이 실행되자마자 현재위치기반 날씨가 보임. 
//2. 현재도시, 섭씨/화씨, 날씨 상태.
//3. 버튼이 다섯개. (한개는 현재 위치 4개는 다른도시)
//4. 도시버튼 누를 때마다 도시별 날씨가 나온다. 
//5. 현재위치 버튼을 누르면 다시 현재위치기반 날씨 보임.
//6. 데이터를 들고오는 동안 로딩스피너.

function App() {

  const [weather, setWeather] = useState(null)  
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position) => { 
      let lat =  position.coords.latitude 
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url =` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f55ef913def7fd590e32472448405a31&units=metric& units=imperial`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data); 
  }
  useEffect (() => {
    getCurrentLocation()
  }, [])
  return (
    <div>
      <div className='container'>
        <WeatherBox weather= {weather} />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
