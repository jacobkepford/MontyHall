import { useState } from "react";

type MainFormProps = {
  setRuns: Function;
  setBoxes: Function;
};

const MainForm = (props: MainFormProps) => {
  const [boxCount, setBoxCount] = useState(NaN);
  const [runCount, setRunCount] = useState(NaN);

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setBoxes(boxCount);
    props.setRuns(runCount);
    setBoxCount(NaN);
    setRunCount(NaN);
  };

  return (
    <form onSubmit={HandleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="numberOfBoxes">How many boxes?</label>
        <input
          type="number"
          min={3}
          max={10}
          className="form-control"
          id="numberOfBoxes"
          onChange={(event) => setBoxCount(parseInt(event.target.value))}
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
          onChange={(event) => setRunCount(parseInt(event.target.value))}
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
