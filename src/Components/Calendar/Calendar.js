import React, { Component } from 'react';
import './Calendar.css';

const CalendarRow = (props) => {
	return (
		<div className="calendar-row">
			<div className={"calendar-row-title"}>{props.title}</div>
			<div className={"calendar-row-time"}>{props.time}</div>
			<div className={"calendar-row-description"}>{props.description}</div>
		</div>
	)
}


const Calendar = () => {
	const data = [
		{
			title: "Test",
			time: "18:00",
			description: "this is a test"
		},
		{
			title: "Test2",
			time: "19:00",
			description: "this is another test"
		}
	]

	return(
		<div className={"calendar"}>
			{
				data.map((i) => (
					<div>
						<CalendarRow title={i.title}  time={i.time} description={i.description} />
					</div>
				))
			}
		</div>
	)


}

export default Calendar;
