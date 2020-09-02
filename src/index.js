import React from "react";
import ReactDOM from "react-dom";

import './Common/style.css'
import Clock from './Components/Clock/clock'

const Index = () => {
  return (
	  <div>
		  <Clock />
	  </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"));
