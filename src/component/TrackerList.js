import React, { Component } from "react";
import Tracker from "./Tracker";

class TrackerList extends Component {
  static defaultProps = {
    data: []
  };
  render() {
    const { data, handleCheck } = this.props;
    return (
      <div>
        {data.map((content, index) => (
          <Tracker
            key={index}
            title={content.title}
            check={content.check}
            handleCheck={handleCheck}
          />
        ))}
      </div>
    );
  }
}

export default TrackerList;
