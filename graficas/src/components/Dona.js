import React from 'react';
import Chart from "react-google-charts";
import ChartTitle from './ChartTitle'

class Dona extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
    console.log(this.props);
  }

  render() {
    return (
      <div className="chart-box">
            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={[["Dispositivo", "Percent"],[this.props.info.Detail[0].Name, this.props.info.Detail[0].Percent],[this.props.info.Detail[1].Name, this.props.info.Detail[1].Percent]]}
              options={{pieHole:.8
                ,legend: "none" 
                ,colors: [this.props.info.Detail[0].Color,this.props.info.Detail[1].Color]
                ,enableInteractivity:false
                ,pieSliceText:"none"
                ,height:300
              }}
            />
            <ChartTitle title={this.props.info.Title} total={this.props.info.Total}/>
        </div>
    );
  }
}

export default Dona;
