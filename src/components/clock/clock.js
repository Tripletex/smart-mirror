import React, { Component } from 'react';
import './clock.css';


class Clock extends Component {
	
	
	constructor(props) {
		super(props);
		this.monthNames = ["januar", "februar", "mars", "april", "may", "juni",
			"juli", "agust", "september", "oktober", "november", "mars"
		];
		var date = new Date();

		
		this.state = {
			time : '00:00',
			day : date.getDate(),
			month : this.monthNames[date.getMonth()],
			year : date.getFullYear()
		};
	}
	componentDidMount () {
		const addZero = n => n < 10 ? "0" +  n : n;

		setInterval(() => {
			let date, t, minutes, hours, s;
			date = new Date();
			
			minutes = addZero(date.getMinutes());
			hours = addZero(date.getHours());
			
			t = `${hours}:${minutes}`;
			this.setState({
				time: t,
				day : date.getDate(),
				month : this.monthNames[date.getMonth()],
				year : date.getFullYear()
			});
		}, 1000);
	}

  render() {
    return (
	<div className="clock">
		<div className="time">
			{this.state.time}
		</div>
		<div className="date">
			<div className="day-and-month"> {this.state.day}. {this.state.month} </div>
			<div className="year"> {this.state.year}</div>
		</div>
	</div>
    );
  }
}

export default Clock;
