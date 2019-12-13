import React, { Component } from 'react';
import WateringSchedule from './components/WateringSchedule';
import Calendar from './components/Calendar';
import plantData from './components/Apprentice_WeGrowInTandem_Data.json';
import './App.css';

class App extends Component {
  state = {
    plants: plantData
  }

  render() {
    return (
      <div className="App">
        <h1>Tandelorian Watering Schedule</h1>
        <WateringSchedule plants={this.state.plants} />
        <Calendar />
      </div>
    );
  }
}

export default App;

