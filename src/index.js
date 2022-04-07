// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
const [honda, tesla] = cars;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
// const [ hondaModel, hondaColours, hondaSpeedStats ] = honda;
// const [ teslaModel, teslaColours, teslaSpeedStats ] = tesla;
// console.log(hondaColours);
// console.log(teslaSpeedStats);
// console.log(teslaSpeedStats);
// const {hondaTopSpeed,hondaZeroToSixty}=hondaSpeedStats;
// const {teslaTopSpeed,teslaZeroToSixty}=teslaSpeedStats;
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
