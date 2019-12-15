import React, { Component } from 'react'
import moment from 'moment';
import plantData from './Apprentice_WeGrowInTandem_Data.json';
const startDate = moment().year(2019).month(11).date(16);
const endDate = moment(startDate).add(12, "weeks").subtract(1, "day");
const plantWateringData = [];

plantData.forEach((plant, index) => {
  let eachPlantData = {};
  plant.water_after = plant.water_after.split(" ");
  plant.water_after = parseInt(plant.water_after[0]);
  eachPlantData.water_after = plant.water_after;
  eachPlantData.plantIndex = (plant.name.split(" ").join("-") + "-" + index);
  
  let currentWateringDay = new moment(startDate);
  let dayToWaterList = [];
  dayToWaterList.push(currentWateringDay.format("ddd DD"));
  while (currentWateringDay.isBefore(endDate)) {
    let currentPlant = plant.water_after;
    currentWateringDay = currentWateringDay.add(currentPlant, "days");
    if (currentWateringDay.isoWeekday() === 6) {
      currentWateringDay.subtract(1, "day");
      dayToWaterList.push(currentWateringDay.format("ddd DD"));
    } else if (currentWateringDay.isoWeekday() === 7) {
      currentWateringDay.add(1, "day");
      dayToWaterList.push(currentWateringDay.format("ddd DD"));
    } else if (currentWateringDay.isAfter(endDate)) {
      break;
    } else {
      dayToWaterList.push(currentWateringDay.format("ddd DD"));
    }
  }
  eachPlantData.waterSchedule = dayToWaterList;
  plantWateringData.push(eachPlantData);
});

class Plants extends Component {

  render() {
    console.log(plantWateringData);
    return (
      <div>
        <div>{plantWateringData.map((plant) => (
          <div key={plant.plantIndex}>
            <h3>{plant.plantIndex}</h3>
            <div>{plant.waterSchedule.map((day) => (
              <p>{day}</p>
            ))}</div>
            <h4>{plant.water_after}</h4>
          </div>))}
        </div>
      </div>
    )
  }
}

export default Plants
