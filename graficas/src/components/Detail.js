import React from 'react';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return <div className="row">
      <div className="col-6">
        <div className="row">
          <div className="col text-left">
            <span className={"font-weight-bolder " + this.props.info.Detail[0].StylizedClass}>{this.props.info.Detail[0].Name}</span>
          </div>
        </div>

        <div className="row mx-lg-n1">
          <div className="col text-left px-lg-0">
            <span className="font-weight-bold">{this.props.info.Detail[0].Percent}%</span>
          </div>
          <div className="col text-right px-lg-0">
            <span>{this.props.info.Detail[0].Quantity} {this.props.info.Currency} </span>
          </div>
        </div>
      </div>

      <div className="col-6">
        <div className="row">
          <div className="col text-left">
            <span className={"font-weight-bolder " + this.props.info.Detail[1].StylizedClass}>{this.props.info.Detail[0].Name}</span>
          </div>
        </div>

        <div className="row mx-lg-n1">
          <div className="col text-left px-lg-0">
            <span className="font-weight-bold">{this.props.info.Detail[1].Percent}%</span>
          </div>
          <div className="col text-right px-lg-0">
            <span>{this.props.info.Detail[1].Quantity} {this.props.info.Currency} </span>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Detail;
