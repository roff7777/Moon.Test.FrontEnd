import React from 'react';
import './App.css';
import DashboardElement  from "./components/DashboardElement";

function App() {
  var revenue = {
    Title: "Revenue",
    Total: 200000,
    Detail: [
      {Name: "Tablet", Percent: 60, Quantity: 120000, Color: "#89D042" },
      {Name: "Smartphone", Percent: 40, Quantity: 300000, Color: "#3B690C" }
    ],
    currency: "€"
  };
  
  return (
    <div className="App">
      <DashboardElement info={revenue}/>
    </div>
  );
}

export default App;
