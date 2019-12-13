import React, { Component } from 'react'
import moment from 'moment'
const startDate = moment().year(2019).month(11).date(16);
const endDate = moment(startDate).add(12, "weeks").subtract(1, "day");

class Calendar extends Component {
  state = {
    dateObject: moment(),
    allMonths: moment.months()
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
    let currentWateringDay = new moment(startDate);
    let dayToWaterList = [];
    dayToWaterList.push(currentWateringDay.format("ddd DD"));
    while (currentWateringDay.isBefore(endDate)) {
      currentWateringDay = currentWateringDay.add(3, "days");
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
    return dayToWaterList;
  };

  weekdaysDisplay = () => {
    let displayDay = new moment(startDate);
    let weekday = [];
    weekday.push(displayDay.format("MMM ddd DD"));
    while (displayDay.isBefore(endDate)) {
      displayDay = displayDay.add(1, "day");
      if (displayDay.isoWeekday() !== 6 && displayDay.isoWeekday() !== 7) {
        weekday.push(displayDay.format("MMM ddd DD"));
      }
    }
    return weekday;
  }
  
  render() {
    return (
      <div>
        <div>{this.weekdaysDisplay().map((weekday, dayIndex) => (
          <h2 key={dayIndex}>{weekday}</h2>))}
        </div>
        <ul>{this.wateringDay().map((day, calendarIndex) => (
          <li key={calendarIndex}>{day}</li>))}
        </ul>
      </div>
    );
  }
}

export default Calendar
