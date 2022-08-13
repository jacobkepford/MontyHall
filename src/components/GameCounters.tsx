type GameCountersProps = {
  programCount: number;
  winCount: number;
};

function GameCounters(props: GameCountersProps) {
  //Initial value will be NaN so default to 0 if so
  let winPercentage = Math.floor((props.winCount / props.programCount) * 100);
  winPercentage = winPercentage ? winPercentage : 0;

  return (
    <div className="row mt-5 align-items-center text-center text-light">
      <div className="col-sm">
        <h1>{props.programCount}</h1>
        <h1>Runs</h1>
      </div>
      <div className="col-sm">
        <h1>{props.winCount}</h1>
        <h1>Win Counter</h1>
      </div>
      <div className="col-sm">
        <h1>{`${winPercentage}%`}</h1>
        <h1>Win Percentage</h1>
      </div>
    </div>
  );
}

export default GameCounters;
