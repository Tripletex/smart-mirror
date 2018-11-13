import React from "react";
import ReactDOM from "react-dom";

import './Common/style.css'
import Clock from './Components/Clock/clock'
import EnTur from './Components/EnTur/EnTur'
import Weather from "./Components/Weather/weather";

const Index = () => {
  return (
	  <div>
		<EnTur />
		<Clock />
		 <Weather/>
	  </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"));