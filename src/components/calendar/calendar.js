import React, { Component } from 'react';
import './calendar.css';


class Calendar extends Component {
  
  render() {
    return (
		<div className="calendar">
			Google Kalender intergasjon
			<table>
				<tbody>
					<tr>
						<td>&#9873;</td>
						<td>21.08</td>
						<td>09:00</td>
						<td>Hackaton demo</td>
					</tr>
					<tr>
						<td>&#9873;</td>
						<td>21.08</td>
						<td>11:00</td>
						<td>lunch</td>
					</tr>
					<tr>
						<td>&#9873;</td>
						<td>21.08</td>
						<td>11:30</td>
						<td>Hackaton demo del 2</td>
					</tr>
				</tbody>
			</table>
		</div>
    );
  }
}

export default Calendar;
