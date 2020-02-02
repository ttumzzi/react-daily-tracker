import React, { Component } from "react";
import "./App.css";
import TrackerList from "./component/TrackerList";
import moment from "moment";

class App extends Component {
  constructor() {
    super();
    this.state = {
      month: moment().format("YYYY.MM"),
      data: []
    };
  }

  handleSaveData = () => {
    localStorage.setItem(this.state.month, JSON.stringify(this.state.data));
  };

  // adding -> true: check item 추가하는 input란이 보임
  // adding -> false: check item 추가하는 input란이 안 보임
  handleToggleItemInput = () => {
    const adding = this.state.adding;
    this.setState({
      adding: !adding
    });
  };

  handleAddItem = () => {
    const newItem = prompt("트래킹할 습관을 추가하세요 😊");
    if (newItem !== "" && newItem !== null) {
      const data = this.state.data;
      const thisMonthDateLen = moment().daysInMonth();
      const newArray = new Array(thisMonthDateLen).fill(0);
      this.setState({
        data: [
          ...data,
          {
            title: newItem,
            check: newArray
          }
        ]
      });
      this.handleSaveData();
    }
  };

  handleCheck = title => {
    const todayDate = moment().dates();
    this.setState({});
  };

  render() {
    return (
      <div>
        <div className="header">
          <h1 className="app-title">Daily tracker</h1>
          <button className="add-item-button" onClick={this.handleAddItem}>
            +
          </button>
        </div>
        <h2>{this.state.month}</h2>
        <div className="tracker">
          <TrackerList data={this.state.data} handleCheck={this.handleCheck} />
        </div>
      </div>
    );
  }
}

export default App;
