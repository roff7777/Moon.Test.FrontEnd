import React from 'react';
import Chart from "react-google-charts";

class Dona extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
    console.log(this.props);
  }

  render() {
    return (
        <div>
            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={[["Dispositivo", "Percent"],[this.props.info.Detail[0].Name, this.props.info.Detail[0].Percent],[this.props.info.Detail[1].Name, this.props.info.Detail[1].Percent]]}
              options={{pieHole:.8
                       ,legend: "none" 
                       ,colors: [this.props.info.Detail[0].Color,this.props.info.Detail[1].Color]
                       ,enableInteractivity:false
                       ,pieSliceText:false
                      }}
            />
        </div>
    );
  }



  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Dona;
