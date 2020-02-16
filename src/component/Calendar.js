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
    const { month, checkDates, startDate, id, handleCheck } = this.props;
    return (
      <div className="calendar-root">
        <Day />
        <Date
          month={month}
          checkDates={checkDates}
          startDate={startDate}
          id={id}
          handleCheck={handleCheck}
        />
      </div>
    );
  }
}

export default Calendar;
