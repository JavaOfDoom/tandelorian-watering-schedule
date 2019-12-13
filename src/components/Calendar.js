import React, { Component } from 'react'
import moment from 'moment'

class Calendar extends Component {
  state = {
    dateObject: moment(),
    allMonths: moment.months(),
    startDate: moment().year(2019).month(11).date(16)
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
    return this.state.startDate.format("MM ddd DD YYYY")
  };
  

  render() {
    
    return (
      <div>
        <p>{this.startingDate()}</p>
      </div>
    );
  }
}

export default Calendar
