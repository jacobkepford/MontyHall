function MainForm() {
  return (
    <form>
      <div className="form-group mb-3">
        <label htmlFor="numberOfBoxes">How many boxes?</label>
        <input
          type="number"
          min={3}
          max={10}
          className="form-control"
          id="numberOfBoxes"
        />
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
  );
}

export default MainForm;
