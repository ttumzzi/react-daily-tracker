import React, { Component } from "react";
import Tracker from "./Tracker";

class TrackerList extends Component {
  static defaultProps = {
    data: []
  };
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map(content => (
          <Tracker title={content.title} check={content.check} />
        ))}
      </div>
    );
  }
}

export default TrackerList;
