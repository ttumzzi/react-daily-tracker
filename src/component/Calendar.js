import React, { Component } from "react";
import "./Calendar.css";
import moment, { months } from "moment";

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

function Date() {
  const date = [];
  const firstDayInMonth = moment()
    .startOf("month")
    .get("day");
  const daysInMonth = moment().daysInMonth();

  for (let i = 0; i < firstDayInMonth; i++) date.push(0);
  for (let i = 0; i < daysInMonth; i++) date.push(i + 1);
  return (
    <div className="dates">
      {date.map((date, index) => (
        <div className="date" key={index}>
          {date === 0 ? "" : date}
        </div>
      ))}
    </div>
  );
}

class Calendar extends Component {
  render() {
    return (
      <div className="calendar-root">
        <Day />
        <Date />
      </div>
    );
  }
}

export default Calendar;
