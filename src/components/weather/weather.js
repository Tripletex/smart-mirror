import React, { Component } from 'react';
import './weather.css';


class Weather extends Component {

	constructor(props) {
		super(props);
		this.forcastTypes = {
			sun :'"&#9728;"',
			clouds :'&#9729;',
			rain :'&#9730;	',
		};
		this.state = {
			forcast : ''
		};
		setTimeout(() => this.setState({forcast: this.forcastTypes.sun}), 1000)
	}


  
  render() {
    return (
		<div className="forcats">
			<div className="weather">
				
				&#9729;
			</div>
			<div className="temp">
				18 &#8451;
			</div>

		</div>
    );
  }
}

export default Weather;
