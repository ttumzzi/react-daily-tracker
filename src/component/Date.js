import React from "react";
import moment from "moment";
import "./Date.css";

// coloring if the date is checked.
function DateElem(props) {
  const { month, n, i, checkDates, startDate } = props;
  const curDate = `${month}.${n}`;
  if (moment().format("YYYY.M.D") === curDate) {
    return (
      <div className="date checked-date today" key={`${n}-${i}`}>
        <b>{n === 0 ? "" : n}</b>
      </div>
    );
  } else if (startDate === curDate) {
    return (
      <div className="date checked-date start-date" key={`${n}-${i}`}>
        <b>{n === 0 ? "" : n}</b>
      </div>
    );
  } else if (!checkDates.includes(n)) {
    return (
      <div className="date" key={`${n}-${i}`}>
        {n === 0 ? "" : n}
      </div>
    );
  } else {
    return (
      <div className="date checked-date" key={`${n}-${i}`}>
        {n === 0 ? "" : n}
      </div>
    );
  }
}

function Date(props) {
  const { month, checkDates, startDate } = props;
  const date = [];
  const firstDayInMonth = moment()
    .startOf("month")
    .get("day");
  const daysInMonth = moment().daysInMonth();

  for (let i = 0; i < firstDayInMonth; i++) date.push(0);
  for (let i = 0; i < daysInMonth; i++) date.push(i + 1);

  let calendar = [];
  for (let week = 0; week < date.length / 7; week++) {
    calendar.push(
      <div className="calendar-row" key={week}>
        {date.slice(week * 7, week * 7 + 7).map((n, i) => (
          <DateElem
            key={`${n}_${i}`}
            month={month}
            n={n}
            i={i}
            checkDates={checkDates}
            startDate={startDate}
          />
        ))}
      </div>
    );
  }

  return calendar;
}

export default Date;
