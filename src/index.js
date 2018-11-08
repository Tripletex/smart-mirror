import React from "react";
import ReactDOM from "react-dom";

import './Common/style.css'
import Clock from './Components/Clock/clock'

const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Clock />, document.getElementById("index"));