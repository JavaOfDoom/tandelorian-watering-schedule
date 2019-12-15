import React, { Component } from 'react';
import Calendar from './components/Calendar';
import Plants from './components/Plants'
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Tandelorian Watering Schedule</h1>
        <Calendar />
        <Plants />
      </div>
    );
  }
}

export default App;

