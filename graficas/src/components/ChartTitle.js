import React from 'react';

class ChartTitle extends React.Component {
  render() {
    return (
        <div className="row chart-title-box">
            <div className="col-12 font-weight-light">{this.props.title.toUpperCase()}</div>
            <div className="col-12 font-weight-bolder">{this.props.total}</div>
        </div>
    )
  }
}

export default ChartTitle;
