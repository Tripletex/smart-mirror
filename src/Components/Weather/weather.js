import * as React from 'react';
import './weather.css';


export default class Weather extends React.Component {

	render() {
		return (
			<div className="weather">
				<div className="weather-current">
					<a class="weatherwidget-io" href="https://forecast7.com/en/59d9110d75/oslo/" data-icons="Iconvault"
					   data-mode="Current" data-days="3" data-theme="dark" data-accent="#000000"
					   data-textcolor="#ffffff" data-suncolor="#ff8022"
					   data-lowcolor="#ffffff" data-mooncolor="#ffffff" data-cloudfill="#000000">Oslo, Norway</a>
				</div>
				<div className="weather-forecast">
					<a class="weatherwidget-io" href="https://forecast7.com/en/59d9110d75/oslo/" data-mode="Forecast"
					   data-days="3" data-theme="dark" data-accent="#000000" data-textcolor="#ffffff"
					   data-suncolor="#ff8022"
					   data-lowcolor="#ffffff" data-mooncolor="#ffffff" data-cloudfill="#000000">Oslo, Norway</a>
				</div>
			</div>


		)
	}


	componentDidMount() {
		!function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (!d.getElementById(id)) {
				js = d.createElement(s);
				js.id = id;
				js.src = 'https://weatherwidget.io/js/widget.min.js';
				fjs.parentNode.insertBefore(js, fjs);
			}
		}(document, 'script', 'weatherwidget-io-js');
	}
}