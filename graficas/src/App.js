import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import DashboardElement  from "./components/DashboardElement";

function App() {
  var revenue = {
    Title: "Revenue",
    Total: 200000,
    Detail: [
      {Name: "Tablet", Percent: 60, Quantity: 120000, Color: "#89D042", StylizedClass:"text-color-green" },
      {Name: "Smartphone", Percent: 40, Quantity: 300000, Color: "#3B690C", StylizedClass:"text-color-green-s" }
    ],
    Currency: "€"
  };

  var impresions = {
    Title: "Impresions",
    Total: 50000000,
    Detail: [
      {Name: "Tablet", Percent: 40, Quantity: 20000000, Color: "#73C5E0", StylizedClass:"text-color-blue" },
      {Name: "Smartphone", Percent: 60, Quantity: 3000000, Color: "#2D4F61", StylizedClass:"text-color-blue-s" }
    ],
    Currency: ""
  };
  
  var visits = {
    Title: "Visits",
    Total: 60000000,
    Detail: [
      {Name: "Tablet", Percent: 80, Quantity: 480000000, Color: "#ECC027", StylizedClass:"text-color-yellow" },
      {Name: "Smartphone", Percent: 20, Quantity: 120000000, Color: "#BA5524", StylizedClass:"text-color-yellow-s" }
    ],
    Currency: ""
  };


  return (
    <div className="App container-fluid">
      <div className="row">
        <DashboardElement info={revenue}/>
        <DashboardElement info={impresions}/>
        <DashboardElement info={visits}/>
      </div>
    </div>
  );
}

export default App;
