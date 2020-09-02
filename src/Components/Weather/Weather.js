import React, { Component } from 'react';
import './Weather.css';

const Row = (props) => {
	return (
		<div className="weather-row">
			<div className="temp">
				{props.temp}
			</div>
			<div className="carbon">
				{props.carbon}ppm
			</div>
			<div className="humidity">
				{props.humidity}%
			</div>
		</div>
	)
}


const WeatherStation = (props) => (
	<div className={"weather-station"}>
		<div className="weather-station-title">{props.name}</div>
		<Row temp={props.temp}  carbon={props.carbon} humidity={props.humidity} />
	</div>
)

const Weather = () => {
	const data = [
		{
			name: "Ute",
			temp: 20,
			carbon: 412,
			humidity: 50,
		},
		{
			name: "Inne",
			temp: 23.5,
			carbon: 635,
			humidity: 45,
		},
	]

	return (
		<div className="weather">
			{
				data.map((station) => (
					<WeatherStation name={station.name} temp={station.temp}  carbon={station.carbon} humidity={station.humidity}/>
				))
			}
		</div>
	);
}

export default Weather;
