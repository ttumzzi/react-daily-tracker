import React from "react";
import moment from "moment";
import "./Date.css";

// coloring if the date is checked.
function DateElem(props) {
  const { month, date, index, checkDates, id, handleCheck } = props;
  const curDate = `${month}.${date}`;
  const classNames = require("classnames");
  let classArr = ["date"];

  if (moment().format("YYYY.M.D") === curDate) classArr.push("today");

  if (date > 0 && moment(curDate).isAfter(moment())) {
    classArr.push("invalid-date");
  }

  if (checkDates.includes(date)) classArr.push("checked-date");

  return (
    <button
      className={classNames(classArr)}
      onClick={() => handleCheck(id, date)}
      key={`${date}-${index}`}
    >
      <b>{date === 0 ? "" : date}</b>
    </button>
  );
}

function Date(props) {
  const { month, checkDates, id, handleCheck } = props;
  const date = [];
  const m = moment(month, "YYYY.M");
  const firstDayInMonth = m.startOf("month").get("day");
  const daysInMonth = m.daysInMonth();
  const lastDayInMOnth = m.endOf("month").get("day");

  for (let i = 0; i < firstDayInMonth; i++) date.push(0);
  for (let i = 0; i < daysInMonth; i++) date.push(i + 1);
  for (let i = 0; i < 6 - lastDayInMOnth; i++) date.push(0);

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
