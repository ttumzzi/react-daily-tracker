import React, { Component } from "react";
import "./App.css";
import TrackerList from "./component/TrackerList";
import moment from "moment";

class App extends Component {
  constructor() {
    super();
    const thisMonth = moment().format("YYYY.MM");
    // get Data from local storage
    const savedDataString = localStorage.getItem(thisMonth);
    const savedDataArray = JSON.parse(savedDataString);
    this.state = {
      month: thisMonth,
      data: savedDataArray === null ? [] : savedDataArray
    };
  }

  handleSaveData = newItem => {
    localStorage.setItem(this.state.month, JSON.stringify(newItem));
  };

  handleAddItem = () => {
    const newItem = prompt("Add new habit to traking 😊");
    if (newItem !== "" && newItem !== null) {
      const data = this.state.data;
      this.setState(
        {
          data: data.concat({
            title: newItem,
            checkDates: [],
            checkToday: false
          })
        },
        // using updated state right after setState
        () => {
          this.handleSaveData(this.state.data);
        }
      );
    }
  };

  handleCheck = title => {
    const todayDate = moment().date();
    const data = this.state.data;

    this.setState(
      {
        data: data.map(item =>
          item.title === title
            ? {
                title: title,
                checkDates: item.checkDates.concat(todayDate),
                checkToday: true
              }
            : item
        )
      },
      () => {
        this.handleSaveData(this.state.data);
      }
    );
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
