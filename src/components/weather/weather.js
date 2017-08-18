import React, { Component } from 'react';
import './weather.css';


class Weather extends Component {

  
  render() {
    return (
		<div className="forcats">
			<div className="weather">
				&#9728;
			</div>
			<div className="temp">
				18 &#8451;
			</div>

		</div>
    );
  }
}

export default Weather;
