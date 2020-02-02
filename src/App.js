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

  handleSaveData = newItem => {
    console.log(this.state.data);
    console.log(newItem);
    localStorage.setItem(this.state.month, JSON.stringify(this.state.data));
  };

  handleAddItem = () => {
    console.log(this.state.data);
    const newItem = prompt("트래킹할 습관을 추가하세요 😊");
    if (newItem !== "" && newItem !== null) {
      const data = this.state.data;
      this.setState({
        data: data.concat({
          title: newItem,
          check: []
        })
      });
      this.handleSaveData(newItem);
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
