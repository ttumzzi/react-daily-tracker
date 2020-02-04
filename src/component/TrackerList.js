import React, { Component } from "react";
import Tracker from "./Tracker";
import "./TrackerList.css";

class TrackerList extends Component {
  render() {
    const { data, handleCheck, handleEdit, handleDelete } = this.props;
    return (
      <div className="tracker-list">
        {data.map(content => (
          <Tracker
            key={content.id}
            title={content.title}
            id={content.id}
            checkDates={content.checkDates}
            checkToday={content.checkToday}
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
