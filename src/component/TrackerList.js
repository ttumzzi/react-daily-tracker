import React, { Component } from "react";
import Tracker from "./Tracker";
import "./TrackerList.css";

class TrackerList extends Component {
  render() {
    const { data, handleCheck } = this.props;
    const shortid = require("shortid");
    return (
      <div className="tracker-list">
        {data.map(content => (
          <Tracker
            key={shortid.generate()}
            title={content.title}
            checkDates={content.checkDates}
            checkToday={content.checkToday}
            handleCheck={handleCheck}
          />
        ))}
      </div>
    );
  }
}

export default TrackerList;
