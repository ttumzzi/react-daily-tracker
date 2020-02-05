import React, { Component } from "react";
import "./Tracker.css";
import moment from "moment";
import Calendar from "./Calendar";

function CheckButton(props) {
  const { id, checkDates, handleCheck } = props;
  const today = moment().date();
  if (!checkDates.includes(today)) {
    return (
      <button className="item-check-button" onClick={() => handleCheck(id)}>
        <span role="img" aria-label="check">
          ✔️
        </span>
      </button>
    );
  } else {
    return null;
  }
}

function TrackerNormal(props) {
  const { id, month, title, checkDates, startDate, handleCheck } = props;
  return (
    <div>
      <div className="item-header">
        <h2>{title}</h2>
        <CheckButton
          id={id}
          checkDates={checkDates}
          handleCheck={handleCheck}
        />
      </div>
      <div className="item-calendar">
        <Calendar month={month} checkDates={checkDates} startDate={startDate} />
      </div>
    </div>
  );
}

function Setting(props) {
  const { id, handleEdit, handleDelete, handleSettingOpen } = props;
  const handleItemEdit = () => {
    handleEdit(id);
    handleSettingOpen();
  };
  const handleItemDelete = () => {
    handleDelete(id);
    handleSettingOpen();
  };
  return (
    <div className="setting">
      <button onClick={handleItemEdit}>
        edit title{" "}
        <span role="img" aria-label="edit">
          ✏️
        </span>
      </button>
      <button onClick={handleItemDelete}>
        delete{" "}
        <span role="img" aria-label="edit">
          🗑️
        </span>
      </button>
    </div>
  );
}

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingOpen: false
    };
  }

  handleSettingOpen = () => {
    const settingOpen = this.state.settingOpen;
    this.setState({
      settingOpen: !settingOpen
    });
  };

  render() {
    const {
      id,
      month,
      title,
      checkDates,
      startDate,
      handleCheck,
      handleEdit,
      handleDelete
    } = this.props;
    const settingOpen = this.state.settingOpen;
    return (
      <div className="tracker-box" onDoubleClick={this.handleSettingOpen}>
        {!settingOpen ? (
          <TrackerNormal
            id={id}
            month={month}
            title={title}
            checkDates={checkDates}
            startDate={startDate}
            handleCheck={handleCheck}
          />
        ) : (
          <Setting
            id={id}
            handleEdit={handleEdit}
            handleSettingOpen={this.handleSettingOpen}
            handleDelete={handleDelete}
          />
        )}
      </div>
    );
  }
}

export default Tracker;
