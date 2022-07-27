import { useState } from "react";

function GameCounters() {
  const [programCount, setProgramCount] = useState(0);
  const [winCount, setWinCount] = useState(0);
  const [winPercent, setWinPercent] = useState(0);

  return (
    <div className="row mt-5 align-items-center text-center">
      <div className="col-sm">
        <h1>{programCount}</h1>
        <h1>Program Counter</h1>
      </div>
      <div className="col-sm">
        <h1>{winCount}</h1>
        <h1>Win Counter</h1>
      </div>
      <div className="col-sm">
        <h1>{`${winPercent}%`}</h1>
        <h1>Win Percentage</h1>
      </div>
    </div>
  );
}

export default GameCounters;
