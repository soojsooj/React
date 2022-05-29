import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'; 
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

//1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다.
//2. 날씨정보에는 도시, 섭씨 화씨 날씨상태
//3. 5개의 버튼 (1개는 현재위치, 4개는 다른 도시들)
//4. 도시버튼을 클릭할 때마다 도시별 날씨가 나온다. 

//5. 현재위치 버튼을 누르면 다시 현재위치날씨 나옴. 
//6. 데이터를 들고오는 동안 로딩 스피너.

function App() {
  const [weather, setWeather]= useState(null);
  const [city, setCity] = useState('')
  const cities = ['New York', 'Milano', 'Seoul', 'Shanghai'];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat,lon)
    })   
  }

    const getWeatherByCurrentLocation = async(lat, lon) => {
      let url = ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=be501e1d4ca75770e91bdee669ed50d4&units=metric`
      let response = await fetch(url)
      let data = await response.json();
      setWeather(data);
    }
   
    const getWeatherByCity= async() => {
      let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be501e1d4ca75770e91bdee669ed50d4&units=metric`
      let response = await fetch(url)
      let data = await response.json()
      console.log('data는', data);
      setWeather(data);
    }

  useEffect(() => {
    if(city === ''){
      getCurrentLocation() 
    } else{
      getWeatherByCity()
    }
  }, [city])

  // useEffect(() => {
  //   getWeatherByCity()
  // },[city])

  //useEffect는 두 개면 안돼. 한번만 실행. 그니께 하나로 합쳐주자. 

  return (
    <div>
      <div className="container">
        <WeatherBox weather = {weather} />
        <WeatherButton cities={cities} setCity={setCity} />
      </div>
    </div>
  );
}

export default App;
