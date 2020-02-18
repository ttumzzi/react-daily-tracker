import React, { Component } from "react";
import Tracker from "./Tracker";
import "./TrackerList.css";

class TrackerList extends Component {
  render() {
    const { month, data, handleCheck, handleEdit, handleDelete } = this.props;
    return (
      <div className="tracker-list">
        {data.map(content => (
          <Tracker
            key={content.id}
            month={month}
            title={content.title}
            id={content.id}
            checkDates={content.checkDates}
            handleCheck={handleCheck}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default TrackerList;
