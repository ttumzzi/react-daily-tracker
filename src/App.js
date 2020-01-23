import React, { Component } from "react";
import "./App.css";
import TrackerList from "./component/TrackerList";
import moment from "moment";

class App extends Component {
  constructor() {
    super();
    this.state = {
      month: moment().format("YYYY.MM"),
      data: [
        {
          title: "commit",
          check: new Array(1, 2, 3)
        }
      ],
      adding: false,
      addingTitle: ""
    };
  }

  handleToggleItemInput = () => {
    this.setState({
      adding: true
    });
  };

  handleAddItem = () => {
    const { data, addingTitle } = this.state;
    this.setState({
      data: data.concat({
        title: addingTitle,
        check: ["0", "0"]
      })
    });
    console.log(this.state.data);
  };

  handleChange = e => {
    this.setState({
      addingTitle: e.target.value
    });
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
        <TrackerList data={this.state.data} />
      </div>
    );
  }
}

export default App;
