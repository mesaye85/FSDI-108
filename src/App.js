import React from "react";

import "./App.css";
import NavBar from './components/navBar';
import QuantitiyPicker from "./components/QuantitiyPicker";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>

      <NavBar></NavBar>
      <div className="App container-fluid">
        <h1>Hello React1</h1>
    <QuantitiyPicker></QuantitiyPicker>
    </div>

    <footer>
    </footer>
    </React.Fragment>
  );
}

export default App;
