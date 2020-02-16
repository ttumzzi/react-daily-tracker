import React from "react";
import moment from "moment";
import "./Date.css";

// coloring if the date is checked.
function DateElem(props) {
  const { month, date, index, checkDates, startDate, id, handleCheck } = props;
  const curDate = `${month}.${date}`;
  const classNames = require("classnames");
  let classArr = ["date"];

  if (moment().format("YYYY.M.D") === curDate) {
    classArr.push("today");
  } else if (startDate === curDate) {
    classArr.push("start-date");
  }
  if (checkDates.includes(date)) {
    classArr.push("checked-date");
  }
  return (
    <div
      className={classNames(classArr)}
      onClick={() => handleCheck(id, date)}
      key={`${date}-${index}`}
    >
      <b>{date === 0 ? "" : date}</b>
    </div>
  );
}

function Date(props) {
  const { month, checkDates, startDate, id, handleCheck } = props;
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
        {date.slice(week * 7, week * 7 + 7).map((date, index) => (
          <DateElem
            key={`${date}_${index}`}
            month={month}
            date={date}
            index={index}
            checkDates={checkDates}
            startDate={startDate}
            id={id}
            handleCheck={handleCheck}
          />
        ))}
      </div>
    );
  }

  return calendar;
}

export default Date;
