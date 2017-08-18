import React, { Component } from 'react';
import './tlx.css';



class Tlx extends Component {
	
	
	constructor(props) {
		super(props);
		this.url ='http://localhost:8080';
		// curl -X GET --header 'Accept: application/json' --header 'Authorization: Basic MDo4NGMwZTkyMi0xY2VjLTQ3Y2MtODAyZi05YjViYjNlMWEzZGY=' 'http://localhost/v2/token/session/>whoAmI'

		//http://ec2-52-215-35-234.eu-west-1.compute.amazonaws.com/execute/login


		this.state = {
			today : '38',
			weektotal : '40',
			thisMonth : '157',
			monthTotal : '160',
			vecationDays : '12',
			vecationDaysTotal : '25'
		};
	}
	componentDidMount () {
		let headers = new Headers();
		headers.append('Authorization', 'Basic '+ 'MDo4NGMwZTkyMi0xY2VjLTQ3Y2MtODAyZi05YjViYjNlMWEzZGY=');
		fetch('/v2/timesheet/entry/>totalHours?employeeId=118088&startDate=2017-08-01&endDate=2017-08-30',
			{method:'GET',
			headers: headers

		}).then(function(respons) { // Transform the data into json
			//return respons.json()
			respons.text()

		}).then(function(data) {
			//debugger;
		}).catch(function(error) {
			//debugger;
		});

		/*setInterval(() => {


		}, 60000);*/
	}

  render() {
    return (
	<div className="tlx">
		<div className="info">
			<div className="label">Timer denne uken: </div><div className="value"> {this.state.today} / {this.state.weektotal}</div>
		</div>

		<div className="info">
			<div className="label">Timer denne måneden: </div><div className="value"> {this.state.thisMonth} / {this.state.monthTotal}</div>
		</div>

		<div className="info">
			<div className="label">Ferie dager: </div><div className="value"> {this.state.vecationDays} / {this.state.vecationDaysTotal}</div>
		</div>
	</div>
    );
  }
}

export default Tlx;
