import React from 'react';

const Country = (props) => {

    return (
        <div>
            <p>Country Name: {props.name}</p>
            <p>Current Temperature: {props.temperature} °C</p>
            <p>Feels like: {props.feelslike} °C</p>
            <p>Weather Description: {props.description}</p>
            <p>Wind Speed: {props.wind} m/s</p>
            <p>Sunrise Time: {props.sunrise}</p>
            <p>Sunset Time: {props.sunset}</p>
        </div>
    )
}

export default Country;
