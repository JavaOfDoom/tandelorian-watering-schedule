import React, { Component } from 'react'
import moment from 'moment'
const startDate = moment().year(2019).month(11).date(16);
const endDate = moment(startDate).add(12, "weeks");

class Calendar extends Component {
  state = {
    dateObject: moment(),
    allMonths: moment.months(),
    dayWatering: this.wateringDay
  };

  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };
  year = () => {
    return this.state.dateObject.format("Y");
  };
  currentDay = () => {
    return this.state.dateObject.format("D");
  };
  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d");
    return firstDay;
  };
  month = () => {
    return this.state.dateObject.format("MMMM");
  };
  startingDate = () => {
    return startDate.format("MM ddd DD YYYY")
  };
  endingDate = () => {
    return endDate.format("MM ddd DD YYYY")
  };

  wateringDay = () => {
    let currentWateringDay = startDate;
    console.log(currentWateringDay.format("ddd DD"));
    let dayToWaterList = [];
    while (currentWateringDay.isSameOrBefore(endDate)) {
      currentWateringDay = currentWateringDay.add(3, "days");
      dayToWaterList.push(currentWateringDay.format("ddd DD"));
      console.log(currentWateringDay.format("ddd DD"));
    }
    console.log(dayToWaterList);
    return dayToWaterList;
  }
  
  

  render() {
    return (
      <div>
        <ul>{this.wateringDay().map((day, index) => (
          <li key={index}>{day}</li>
        ))}
        </ul>
        <p>{this.startingDate()}</p>
        <p>{this.endingDate()}</p>
      </div>
    );
  }
}

export default Calendar
