import React, { Component } from "react";
import "./Tracker.css";
import Calendar from "./Calendar";

function TrackerNormal(props) {
  const {
    id,
    month,
    title,
    checkDates,
    handleCheck,
    handleSettingOpen
  } = props;
  return (
    <div>
      <div className="item-header">
        <h2>{title}</h2>
        <button className="setting-button" onClick={handleSettingOpen}>
          <img
            className="setting-button-img"
            src={"./img/setting.png"}
            alt="setting"
          />
        </button>
      </div>
      <div className="item-calendar">
        <Calendar
          month={month}
          checkDates={checkDates}
          id={id}
          handleCheck={handleCheck}
        />
      </div>
    </div>
  );
}

function Setting(props) {
  const { id, handleEdit, handleDelete, handleSettingOpen } = props;
  const handleItemEdit = () => {
    handleEdit(id);
  };
  const handleItemDelete = () => {
    handleDelete(id);
  };
  return (
    <div className="setting" onClick={handleSettingOpen}>
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
      handleCheck,
      handleEdit,
      handleDelete
    } = this.props;
    const settingOpen = this.state.settingOpen;
    return (
      <div className="tracker-box">
        {!settingOpen ? (
          <TrackerNormal
            id={id}
            month={month}
            title={title}
            checkDates={checkDates}
            handleCheck={handleCheck}
            handleSettingOpen={this.handleSettingOpen}
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
