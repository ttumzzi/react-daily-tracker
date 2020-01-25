import React, { Component } from "react";
import "./App.css";
import TrackerList from "./component/TrackerList";
import moment from "moment";

class App extends Component {
  constructor() {
    super();
    this.state = {
      month: moment().format("YYYY.MM"),
      data: [],
      adding: false,
      addingTitle: ""
    };
  }

  handleSaveData = () => {
    localStorage.setItem(this.state.month, JSON.stringify(this.state.data));
  };

  handleToggleItemInput = () => {
    const adding = this.state.adding;
    this.setState({
      adding: !adding
    });
  };

  handleAddItem = () => {
    const addingTitle = this.state.addingTitle;
    const data = this.state.data;
    const thisMonthDateLen = moment().daysInMonth();
    const newArray = new Array(thisMonthDateLen).fill(0);
    this.setState(
      {
        data: [
          ...data,
          {
            title: addingTitle,
            check: newArray
          }
        ]
      },
      function() {
        console.log(data);
      }
    );
    this.handleSaveData();
  };

  handleChange = e => {
    this.setState({
      addingTitle: e.target.value
    });
  };

  handleCheck = title => {
    const todayDate = moment().dates();
    this.setState({});
  };

  render() {
    return (
      <div>
        <h1>Daily tracker</h1>
        <h2>{this.state.month}</h2>
        <button onClick={this.handleToggleItemInput}>
          Add Tracking items!
        </button>
        {this.state.adding && (
          <div>
            <input onChange={this.handleChange} />
            <button onClick={this.handleAddItem}>
              <span>✔️</span>
            </button>
          </div>
        )}
        <TrackerList data={this.state.data} handleCheck={this.handleCheck} />
      </div>
    );
  }
}

export default App;
