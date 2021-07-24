import React, {useEffect, useState} from 'react';
import Country from './Country';
import Forecast from './Forecast';
import '../App.css'

const API_KEY = 'ca01d0a48305d933ddc756062be418ab';
//const URL = 'api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}';
//const URL2 = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';


function App(){
    const [weathers, setWeather] = useState([]);
    const [name, setName] = useState("");
    const [search, setSearch] = useState("Singapore");

    const [forecast, setForecast] = useState([]);
    const [date, setDate] = useState("");

    

    useEffect(()=>{
        getData();
       // getLocation();
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        setDate(today);
    },[search]);

    function getChange(evt){
        console.log(evt.target.value);
        setName(evt.target.value);
    }

    async function getData()
    {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`);
        const data = await res.json();
        console.log([data]);
        setWeather([data]);

        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly&appid=${API_KEY}&units=metric`);
        const secdata = await response.json();
        console.log(secdata);
        setForecast(secdata.daily);
        
        // console.log(data.coord.lon);
        // setLat(data.coord.lat);
        // setLon(data.coord.lon);
         
    }

    function getSearch(evt){
        evt.preventDefault();
        setName("");
        setSearch(name);

    }
    


    return <div className="weather">
        <h3>Enter country/city name to search weather for</h3>
        <form onSubmit={getSearch} className="weatherform">
        <input type="text" placeholder="Country Name" className="search-input" onChange={getChange} value={name}></input>
        <button className="search-btn">Search</button>
        <h4>{date}</h4>
        </form>    
            {weathers.map(card => (
            <Country 
                key = {card.id}
                name = {card.name}
                temperature = {card.main.temp}
                feelslike = {card.main.feels_like}
                description = {card.weather[0].description}
                wind = {card.wind.speed}
                sunrise = {new Date(card.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
                sunset = {new Date(card.sys.sunset * 1000).toLocaleTimeString('en-IN')}
            />
            ))}
            <div className="forecast-section">
            {forecast.map(cast => (
                <Forecast
                    key = {cast.dt}
                    date = {new Date(cast.dt * 1000).toLocaleDateString('en-US')}
                    temperature = {cast.temp.day}
                    feelslike = {cast.feels_like.day}
                    description = {cast.weather}
                    sunrises = {new Date(cast.sunrise * 1000).toLocaleTimeString('en-IN')}
                    sunset = {new Date(cast.sunset * 1000).toLocaleTimeString('en-IN')}
                />
            ))}
            </div>
        
    </div>
}

export default App;