import React, { Component } from "react";
import moment from "moment";
import "./Month.css";

class Month extends Component {
  render() {
    const { month, handleMonth } = this.props;
    return (
      <div className="month">
        <button onClick={() => handleMonth("-")}>
          <h2>{"<"}</h2>
        </button>
        <h2>{month}</h2>
        {month !== moment().format("YYYY.M") && (
          <button onClick={() => handleMonth("+")}>
            <h2>{">"}</h2>
          </button>
        )}
      </div>
    );
  }
}

export default Month;
