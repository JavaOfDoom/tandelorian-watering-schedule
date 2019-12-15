import React, { Component } from 'react';
import Calendar from './components/Calendar';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Tandelorian Watering Schedule</h1>
        <Calendar />
      </div>
    );
  }
}

export default App;

