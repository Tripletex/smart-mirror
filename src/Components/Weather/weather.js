import * as React from 'react';


export default class Weather extends React.Component {

	render() {
		return (
			<a class="weatherwidget-io" href="https://forecast7.com/en/59d9110d75/oslo/" data-label_1="OSLO"
			   data-label_2="WEATHER" data-theme="dark" data-accent="#000000" data-textcolor="#ffffff"
			   data-lowcolor="#ffffff" data-mooncolor="#ffffff" data-cloudfill="#000000">OSLO WEATHER</a>
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