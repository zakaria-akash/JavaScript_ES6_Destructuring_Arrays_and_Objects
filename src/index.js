import React from "react";
import ReactDOM from "react-dom";
import Cars from "./Cars";

const [honda, tesla] = Cars;
// const honda = Cars[1];

//destructuring the Cars.js file
// const teslaTopSpeed = tesla.speedStats.topSpeed;
// const teslaTopColour = tesla.coloursByPopularity[0];

// const hondaTopSpeed = honda.speedStats.topSpeed;
// const hondaTopColour = honda.coloursByPopularity[0];

//destructuring the Cars.js file: complex way
const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

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
