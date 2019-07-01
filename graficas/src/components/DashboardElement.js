import React from 'react';
import Dona from "./Dona";
import Detail from "./Detail";

class DashboardElement extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <div>
            <Dona info={this.props.info}></Dona>
            <Detail info={this.props.info}></Detail>
        </div>)};

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default DashboardElement;
