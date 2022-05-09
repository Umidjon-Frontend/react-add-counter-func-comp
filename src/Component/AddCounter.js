import React, { useState } from "react";
import "./AddCounter.css";

function AddCounter() {
  const [arrCount, setArrCount] = useState([]);

  function onAddCounter() {
    arrCount.push(0);

    setArrCount([...arrCount]);
  }

  function onCounterClick(index, num) {
    arrCount[index] = arrCount[index] + num;
    
    setArrCount([...arrCount]);
  }

  return (
    <div className="add-counter">
      <button className="btn" onClick={onAddCounter}>
        Add Counter
      </button>
      <div className="counter-items">
        {arrCount.map((count, index) => (
          <div key={index} className="item">
            <button className="btn" onClick={() => onCounterClick(index, -1)}>
              -
            </button>
            <h1>{count}</h1>
            <button className="btn" onClick={() => onCounterClick(index, 1)}>
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddCounter;
