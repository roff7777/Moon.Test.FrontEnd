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
          <div className="col-12 col-md-6 col-lg-4 card shadow p-3 mb-5 bg-white rounded">
            <Dona info={this.props.info}></Dona>
            <Detail info={this.props.info}></Detail>
          </div>
        )};

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default DashboardElement;
