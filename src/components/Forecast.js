import React from 'react'

const Forecast = (props) => {

    
    return (
        <div className="forecast-container">
            <p>Date: {props.date}</p>
            <p>Weather Temperature: {props.temperature} °C</p>
            <p>Weather Feels Like: {props.feelslike} °C</p>
            <p>Sunrise Time: {props.sunrises}</p>
            <p>Sunset Time: {props.sunset}</p>
            {props.description.map(desc => (              
                <p key={desc.id}>Weather Description: {desc.description}</p>
                
            ))}

            {props.description.map(des => (
                <img src={'http://openweathermap.org/img/wn/'+ des.icon + '@2x.png'} 
                key={des.id} alt="weather-img">
                </img>
            ))}
            
        </div>
    )
}

export default Forecast
