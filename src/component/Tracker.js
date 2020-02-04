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
        <span role="img" aria-label="check">
          ✔️
        </span>
      </button>
    );
  } else {
    return null;
  }
}

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingOpen: false
    };
  }

  render() {
    const { title, checkDates, handleCheck } = this.props;
    const settingOpen = this.state.settingOpen;
    return (
      <div className="tracker-box">
        {!settingOpen ? (
          <div>
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
        ) : null}
      </div>
    );
  }
}

export default Tracker;
