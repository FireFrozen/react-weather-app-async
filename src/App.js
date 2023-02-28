
import './App.css';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import {WEATHER_KEY} from './keys.js';
import { useState } from 'react';

function App() {

  const stateInit = {
    temperature: '',
    description: '',
    himidity:'',
    wind_speed:'',
    city:'',
    country:'',
    icon:'',
    recuperado:false,
    loading:false,
    error: null
  };

  const [state,setState] = useState(stateInit)

  function getWeather(e){
    e.preventDefault();
    
    const {city, country} = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    if (cityValue && countryValue){
      
      setState({
        loading: true
      })

      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
      const response = fetch(API_URL);
      const data = response.json();

      console.log(data);

      //const iconLink = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

      setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        icon: data.weather[0].icon,
        recuperado: true,
        loading: false,
        error: null
      })
    } else{
        setState({error:'Please enter a city and country'})
    }
  }

  return (
      <div className = "container p-4"> 
      <div className='row'>
        <div className='col-md-6 mx-auto'>
          <WeatherForm getWeather={getWeather}/>
          <WeatherInfo {...state}/>
        </div>
      </div>

    </div>


  );
}

export default App;
