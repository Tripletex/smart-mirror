import React from "react";
import ReactDOM from "react-dom";

import './Common/style.css'
import Clock from './Components/Clock/clock'
import EnTur from './Components/EnTur/EnTur'

const Index = () => {
  return (
	  <div>
		<EnTur />
		<Clock />
	  </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"));