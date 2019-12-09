import React, { Component } from 'react';
import WateringSchedule from './components/WateringSchedule';
import plantData from './components/Apprentice_WeGrowInTandem_Data.json';
import './App.css';

class App extends Component {
  state = {
    plants: plantData
  }

  render() {
    console.log(this.state.plants)
    return (
      <div className="App">
        <WateringSchedule plants={this.state.plants} />
      </div>
    );
  }
}

export default App;

