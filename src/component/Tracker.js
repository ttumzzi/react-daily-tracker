import React, { Component } from "react";
import "./Tracker.css";
import moment from "moment";
import Calendar from "./Calendar";

function CheckButton(props) {
  const { title, checkDates, handleCheck } = props;
  const today = moment().date();
  if (!checkDates.includes(today)) {
    return (
      <button className="item-check-button" onClick={() => handleCheck(title)}>
        <span>✔️</span>
      </button>
    );
  } else {
    return null;
  }
}

class Tracker extends Component {
  render() {
    const { title, checkDates, checkToday, handleCheck } = this.props;
    return (
      <div className="tracker-box">
        <div className="item-header">
          <h2>{title}</h2>
          <CheckButton
            title={title}
            checkDates={checkDates}
            handleCheck={handleCheck}
          />
        </div>
        <div className="item-calendar">
          <Calendar checkDates={checkDates} />
        </div>
      </div>
    );
  }
}

export default Tracker;
