import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <form>
        <div className="form-group mb-3">
          <label htmlFor="numberOfBoxes">How many boxes?</label>
          <input type="number" className="form-control" id="numberOfBoxes" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="numberOfRuns">
            How many times should the program run?
          </label>
          <input type="number" className="form-control" id="numberOfRuns" />
        </div>
        <button type="button" className="btn btn-primary">
          Run Monty Hall Problem
        </button>
      </form>
    </div>
  );
}

export default App;
