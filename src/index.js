import React from "react";
import ReactDOM from "react-dom";

import './Common/style.css'
import Clock from './Components/Clock/clock'
import EnTur from './Components/EnTur/EnTur'
import Var from './Components/Var/Var'
import Weather from "./Components/Weather/weather";
import Statuspage from './Components/Statuspage/Statuspage'

const Index = () => {
  return (
	  <div>
		<EnTur />
		<Clock />
		 <Weather/>
		  <Statuspage/>
		  <Var />
	  </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"));