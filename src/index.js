import React from "react";
import ReactDOM from "react-dom";

import './Common/style.css'
import Clock from './Components/Clock/clock'
import Weather from './Components/Weather/Weather';
import Calendar from './Components/Calendar/Calendar';

const Index = () => {
  return (
	  <div>
		  <Clock />
		  <Weather />
		  <Calendar />
	  </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"));
