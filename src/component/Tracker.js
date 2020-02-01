import React, { Component } from "react";
import "./Tracker.css";

class Tracker extends Component {
  render() {
    const { title, check, handleCheck } = this.props;
    return (
      <div className="tracker-box">
        <div className="item-header">
          <h2>{title}</h2>
          <button className="item-check-button" onClick={handleCheck}>
            <span>✔️</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Tracker;
