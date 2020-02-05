import React, { Component } from "react";
import "./App.css";
import TrackerList from "./component/TrackerList";
import moment from "moment";
import Month from "./component/Month";
import Direction from "./component/Direction";

class App extends Component {
  constructor() {
    super();
    const thisMonth = moment().format("YYYY.M");
    // get Data from local storage
    const savedDataString = this.handleLoadData(thisMonth);
    const savedDataArray = JSON.parse(savedDataString);
    this.state = {
      month: thisMonth,
      data: savedDataArray === null ? [] : savedDataArray
    };
  }

  handleLoadData = month => {
    return localStorage.getItem(month);
  };

  handleSaveData = newItem => {
    localStorage.setItem(this.state.month, JSON.stringify(newItem));
  };

  handleAddItem = () => {
    const newItem = prompt("Add new habit to traking 😊");
    const shortid = require("shortid");
    if (newItem !== "" && newItem !== null) {
      const data = this.state.data;
      this.setState(
        {
          data: data.concat({
            id: shortid.generate(),
            title: newItem,
            checkDates: [],
            startDate: moment().format("YYYY.M.D")
          })
        },
        // using updated state right after setState
        () => {
          this.handleSaveData(this.state.data);
        }
      );
    }
  };

  handleCheck = id => {
    const todayDate = moment().date();
    const data = this.state.data;

    this.setState(
      {
        data: data.map(item =>
          item.id === id
            ? {
                id: item.id,
                title: item.title,
                checkDates: item.checkDates.concat(todayDate),
                startDate: moment().format("YYYY.M.D")
              }
            : item
        )
      },
      () => {
        this.handleSaveData(this.state.data);
      }
    );
  };

  handleMonth = direction => {
    const yearMonth = this.state.month;
    const year = parseInt(yearMonth.split(".")[0]);
    const month = parseInt(yearMonth.split(".")[1]);

    let newMonth = "";
    if (direction === "+")
      newMonth = month === 12 ? `${year + 1}.1` : `${year}.${month + 1}`;
    else newMonth = month === 1 ? `${year - 1}.12` : `${year}.${month - 1}`;

    const newData = this.handleLoadData(newMonth);
    let newDataObjForm = JSON.parse(newData);
    newDataObjForm = newDataObjForm === null ? [] : newDataObjForm;

    this.setState({
      month: newMonth,
      data: this.state.data.slice(0, 0).concat(newDataObjForm)
    });
  };

  handleEdit = id => {
    const newTitle = prompt("Write your new title. 😀");
    const data = this.state.data;
    if (newTitle !== "" && newTitle !== null) {
      this.setState(
        {
          data: data.map(item =>
            item.id === id
              ? {
                  ...item,
                  title: newTitle
                }
              : item
          )
        },
        () => {
          this.handleSaveData(this.state.data);
        }
      );
    }
  };

  handleDelete = id => {
    const data = this.state.data;
    const askingDelete = window.confirm(
      "Do you really want to delete this habit?😂"
    );
    if (askingDelete) {
      this.setState(
        {
          data: data.filter(item => (item.id !== id ? true : false))
        },
        () => {
          this.handleSaveData(this.state.data);
        }
      );
    }
  };

  render() {
    return (
      <div className="full-page">
        <Direction />
        <div className="header">
          <h1 className="app-title">Daily tracker</h1>
          {this.state.month === moment().format("YYYY.M") && (
            <button className="add-item-button" onClick={this.handleAddItem}>
              ✔ Add item
            </button>
          )}
        </div>
        <Month month={this.state.month} handleMonth={this.handleMonth} />
        <div className="tracker">
          <TrackerList
            month={this.state.month}
            data={this.state.data}
            handleCheck={this.handleCheck}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
