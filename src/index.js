import React from "react";
import ReactDOM from "react-dom";
import Cars from "./Cars";

const [honda, tesla] = Cars;
// const honda = Cars[1];

//destructuring the Cars.js file
const teslaTopSpeed = tesla.speedStats.topSpeed;
const teslaTopColour = tesla.coloursByPopularity[0];

const hondaTopSpeed = honda.speedStats.topSpeed;
const hondaTopColour = honda.coloursByPopularity[0];

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
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
