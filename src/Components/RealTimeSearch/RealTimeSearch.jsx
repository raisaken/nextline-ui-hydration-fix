import React, { useState } from "react";
import { Data } from "./dataRealTimeSearch";
import "./RealTimeSearch.css";

function RealTimeSearch() {
  const [list, setList] = useState("");

  return (
    <div className="text-center my-5">
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => {
          setList(event.target.value);
        }}
      />
      <div className="main">
        {Data.filter((item) => {
          if (list === "") {
            return item;
          } else if (item.name.includes(list)) {
            return item;
          }
        }).map((item) => (
          <div key={item.id}>
            <p className="items">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RealTimeSearch;
