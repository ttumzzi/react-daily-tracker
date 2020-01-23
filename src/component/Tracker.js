import React, { Component } from "react";
import "./Tracker.css";

class Tracker extends Component {
  render() {
    const { title, check } = this.props;
    return (
      <div className="tracker-box">
        <h2>{title}</h2>
        <div className="calendar">
          {check.map(i => (
            <div className="date">{i}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Tracker;
