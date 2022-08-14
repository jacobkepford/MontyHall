import { useState } from "react";
import { GetMontyHall } from "../data/GetMontyHall";

type MainFormProps = {
  sendProgramCount: (programCount: number) => void;
  sendWinCount: (winCount: number) => void;
};

type Error = {
  runCountError: string;
  boxCountError: string;
};

const MainForm = (props: MainFormProps) => {
  const [runCount, setRunCount] = useState("");
  const [boxCount, setBoxCount] = useState("");
  const [errors, setErrors] = useState<Error>({
    runCountError: "",
    boxCountError: "",
  });

  const ClearForm = () => {
    setRunCount("");
    setBoxCount("");
  };

  const ValidateForm = (boxValue: number, runValue: number) => {
    let formIsValid = true;

    if (boxValue < 3 || !boxValue) {
      formIsValid = false;
      setErrors((errors) => ({
        ...errors,
        boxCountError: "Minimum of 3 boxes required",
      }));
    }

    if (!runValue) {
      formIsValid = false;
      setErrors((errors) => ({ ...errors, runCountError: "Required" }));
    }

    return formIsValid;
  };

  const ClearValidation = () => {
    setErrors((errors) => ({
      ...errors,
      runCountError: "",
      boxCountError: "",
    }));
  };

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const boxValue = parseInt(boxCount);
    const runValue = parseInt(runCount);

    const formIsValid = ValidateForm(boxValue, runValue);

    if (!formIsValid) {
      return;
    }

    ClearForm();
    ClearValidation();

    const winCount = GetMontyHall(boxValue, runValue);

    props.sendProgramCount(runValue);
    props.sendWinCount(winCount);
  };

  return (
    <form onSubmit={HandleSubmit} className="text-light ms-3">
      <div className="form-group mb-3 w-25">
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
        <span style={{ color: "red" }}>{errors.boxCountError}</span>
      </div>
      <div className="form-group mb-3 w-25">
        <label htmlFor="numberOfRuns">
          How many times should the program run?
        </label>
        <input
          type="number"
          className="form-control col-xs-3"
          id="numberOfRuns"
          onChange={(event) => setRunCount(event.target.value)}
          value={runCount}
        />
        <span style={{ color: "red" }}>{errors.runCountError}</span>
      </div>
      <button type="submit" className="btn btn-primary">
        Run Monty Hall Problem
      </button>
    </form>
  );
};

export default MainForm;
