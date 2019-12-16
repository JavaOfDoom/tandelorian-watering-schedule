import moment from 'moment';
import plantData from './Apprentice_WeGrowInTandem_Data.json';
const startDate = moment().year(2019).month(11).date(16);
const endDate = moment(startDate).add(12, "weeks").subtract(1, "day");
export const plantWateringData = [];

plantData.forEach((plant, index) => {
  let eachPlantData = {};
  plant.water_after = plant.water_after.split(" ");
  plant.water_after = parseInt(plant.water_after[0]);
  eachPlantData.water_after = plant.water_after;
  eachPlantData.plantIndex = (plant.name.split(" ").join("-") + "-" + index);
  eachPlantData.name = plant.name;
  
  let currentWateringDay = new moment(startDate);
  let dayToWaterList = [];
  dayToWaterList.push(currentWateringDay.format("dddd MMMM DD YYYY"));
  while (currentWateringDay.isBefore(endDate)) {
    let currentPlant = plant.water_after;
    currentWateringDay = currentWateringDay.add(currentPlant, "days");
    if (currentWateringDay.isoWeekday() === 6) {
      currentWateringDay.subtract(1, "day");
      dayToWaterList.push(currentWateringDay.format("dddd MMMM DD YYYY"));
    } else if (currentWateringDay.isoWeekday() === 7) {
      currentWateringDay.add(1, "day");
      dayToWaterList.push(currentWateringDay.format("dddd MMMM DD YYYY"));
    } else if (currentWateringDay.isAfter(endDate)) {
      break;
    } else {
      dayToWaterList.push(currentWateringDay.format("dddd MMMM DD YYYY"));
    }
  }
  eachPlantData.waterSchedule = dayToWaterList;
  plantWateringData.push(eachPlantData);
});
