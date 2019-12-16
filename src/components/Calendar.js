import React, { Component } from 'react'
import moment from 'moment'
import { plantWateringData } from './Plants'
import '../App.css';
const startDate = moment().year(2019).month(11).date(16);
const endDate = moment(startDate).add(12, "weeks").subtract(1, "day");
let weekday = [];

let displayDay = new moment(startDate);
weekday.push(displayDay.format("dddd MMMM DD YYYY"));
while (displayDay.isBefore(endDate)) {
  displayDay = displayDay.add(1, "day");
  if (displayDay.isoWeekday() !== 6 && displayDay.isoWeekday() !== 7) {
    weekday.push(displayDay.format("dddd MMMM DD YYYY"));
  }
}

const weekdayReplacer = [];
weekday.forEach((day) => {
  const newWeekday = {};
  const newWeekdaySchedule = [];
  newWeekday.day = day

  plantWateringData.forEach((plant) => {

    for (let i = 0; i < plant.waterSchedule.length; i++) {
      if (plant.waterSchedule[i] === day) {
        newWeekdaySchedule.push(plant.name)
        newWeekday.plantNames = newWeekdaySchedule;
      }
    }
    
  })
  if (newWeekdaySchedule === undefined || newWeekdaySchedule.length === 0) {
    newWeekdaySchedule.push("No plants to water today");
    newWeekday.plantNames = newWeekdaySchedule;
  }
  weekdayReplacer.push(newWeekday)
})
weekday = weekdayReplacer

class Calendar extends Component {

  render() {
    return (
      <div>{weekday.map((days, index) => (
        <div key={index}>
          <h3 className="weekdayName">{days.day}</h3>
          <div className="plantFlex">{days.plantNames.map((name, index) => (
            <p className="plantCards" key={name + index}>{name}</p>
          ))}</div>
          
        </div>))}
      </div>
    );
  }
}

export default Calendar
