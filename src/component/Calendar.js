import React, { Component } from "react";
import "./Calendar.css";
import Date from "./Date";

function Day() {
  const day = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="days">
      {day.map((day, index) => (
        <div className="day" key={index}>
          {day}
        </div>
      ))}
    </div>
  );
}

class Calendar extends Component {
  render() {
    const checkDates = this.props.checkDates;
    return (
      <div className="calendar-root">
        <Day />
        <Date checkDates={checkDates} />
      </div>
    );
  }
}

export default Calendar;
