import React, { Component } from "react";
import "./Tracker.css";

class Tracker extends Component {
  render() {
    const { title, check, handleCheck } = this.props;
    return (
      <div className="tracker-box">
        <h2>{title}</h2>
        <div className="calendar">
          {check.map((i, index) => (
            <div className="date" key={index}>
              {i}
            </div>
          ))}
          <div>
            <button onClick={handleCheck}>check today!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Tracker;
