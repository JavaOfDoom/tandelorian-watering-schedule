import React, { Component } from 'react'
import moment from 'moment'
import { plantWateringData } from './Plants'
import Bell_Pepper from '../assets/Bell_Pepper.jpg';
import Birds_Nest_Fern from '../assets/Birds_Nest_Fern.jpg';
import Croton from '../assets/Croton.jpg';
import Dracaena from '../assets/Dracaena.jpg';
import Fiddle_Leaf_Fig from '../assets/Fiddle_Leaf_Fig.jpg';
import Jade from '../assets/Jade.jpg';
import Money_Tree from '../assets/Money_Tree.jpg';
import No_Plants from '../assets/No_Plants.png';
import Snake_Plant from '../assets/Snake_Plant.jpg';
import Spider_Plant from '../assets/Spider_Plant.jpg';
import Strawberry_Plant from '../assets/Strawberry_Plant.jpg';
import Wavy_Fern from '../assets/Wavy_Fern.jpg';
import '../App.css';

let plantImages = [
  Bell_Pepper,
  Birds_Nest_Fern,
  Croton,
  Dracaena,
  Fiddle_Leaf_Fig,
  Jade,
  Money_Tree,
  No_Plants,
  Snake_Plant,
  Spider_Plant,
  Strawberry_Plant,
  Wavy_Fern
];

let plantImageNames = [
  "Bell Pepper Plant",
  "Bird's Nest Fern",
  "Croton",
  "Dracaena",
  "Fiddle Leaf Fig",
  "Jade",
  "Money Tree",
  "No plants to water today",
  "Snake Plant",
  "Spider Plant",
  "Strawberry Plant",
  "Wavy Fern"
];

plantImages.forEach((image, index) => {
  plantImages[plantImageNames[index]] = image;
});

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
        newWeekdaySchedule.push(plant.name);
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
const now = moment().format("dddd MMMM DD YYYY");
class Calendar extends Component {

  render() {

    return (
      <div>{weekday.map((days, dayIndex) => (
        <div key={dayIndex}>
          <h3 className="weekdayName" 
              style={(days.day === now) 
                ? { border: "solid 5px #FF6753"} 
                : { border: "solid 1px #869B8D"}}>
            {days.day}
          </h3>
          <div className="plantDayContainer">  
            <div className="plantFlex">{days.plantNames.map((name, plantIndex) => (
              <div className="plantCards" key={name + plantIndex}>
                <img className="plantImage" src={plantImages[name]} alt={name}></img>
                <p>{name}</p>
              </div>
            ))}</div>
          </div>
        </div>))}
      </div>
    );
  }
}

export default Calendar
