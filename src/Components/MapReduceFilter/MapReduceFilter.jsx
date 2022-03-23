import React from "react";
import { personnel } from "./MapReduceFilterData";

function MapReduceFilter() {
  return (
    <div>
      <p>The result is</p>
      <div>
        {personnel
          .filter((person) => person.isForceUser)
          .map((jedi) => jedi.pilotingScore + jedi.shootingScore)
          .reduce((acc, score) => acc + score, 0)}
      </div>
    </div>
  );
}

export default MapReduceFilter;
