import React, { Component } from 'react';
import './App.css';
import Calendar from './components/calendar/calendar.js';
import Clock from './components/clock/clock.js';
import Weather from './components/weather/weather.js';
import Tlx from './components/tlx/tlx.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
		<Clock />
		<Weather />
		<Tlx />
      </div>
    );
  }
}

export default App;
