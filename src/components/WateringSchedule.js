import React, { Component } from 'react'

class WateringSchedule extends Component {
  render() {
    return this.props.plants.map((plants, plantIndex) => (
      <React.Fragment key={plantIndex}>
        <h3>{ plants.name }</h3>
        <h4>{ plants.water_after }</h4>
      </React.Fragment>
    ))
  }
}

export default WateringSchedule
