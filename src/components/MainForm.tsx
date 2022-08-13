import { useState } from "react";
import { GetMontyHall } from "../data/GetMontyHall";

type MainFormProps = {
  sendProgramCount: Function;
  sendWinCount: Function;
};

const MainForm = (props: MainFormProps) => {
  const [runCount, setRunCount] = useState("");
  const [boxCount, setBoxCount] = useState("");

  const ClearForm = () => {
    setRunCount("");
    setBoxCount("");
  };

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const boxValue = parseInt(boxCount);
    const runValue = parseInt(runCount);

    ClearForm();

    const winCount = GetMontyHall(boxValue, runValue);

    props.sendProgramCount(runCount);
    props.sendWinCount(winCount);
  };

  return (
    <form onSubmit={HandleSubmit} className="text-light">
      <div className="form-group mb-3">
        <label htmlFor="numberOfBoxes">How many boxes?</label>
        <input
          type="number"
          min={3}
          max={10}
          className="form-control"
          id="numberOfBoxes"
          onChange={(event) => setBoxCount(event.target.value)}
          value={boxCount}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="numberOfRuns">
          How many times should the program run?
        </label>
        <input
          type="number"
          className="form-control"
          id="numberOfRuns"
          onChange={(event) => setRunCount(event.target.value)}
          value={runCount}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Run Monty Hall Problem
      </button>
    </form>
  );
};

export default MainForm;
