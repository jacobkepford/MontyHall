import { useState } from "react";
import GetRandomNumber from "../common/random";

type GameCountersProps = {
  boxCount: number;
  runCount: number;
};

let gameCount = 0;

function GameCounters(props: GameCountersProps) {
  const [programCount, setProgramCount] = useState(0);
  const [winCount, setWinCount] = useState(0);
  const [winPercent, setWinPercent] = useState(0);

  const CreateBoxes = (boxCount: number) => {
    let boxes: string[] = [];
    const prize_box = GetRandomNumber(boxCount);

    for (var i = 1; i < boxCount + 1; i++) {
      boxes.push("💀");
    }

    boxes[prize_box] = "🔥";
    return boxes;
  };

  const GetRevealBoxes = (
    chosenBoxIndex: number,
    gameBoxes: string[],
    boxCount: number
  ) => {
    const boxesToReveal: number[] = [];
    boxesToReveal.push(chosenBoxIndex);

    const revealTotal = boxCount - 2;
    let count = 0;

    while (count < revealTotal) {
      //Get a box to open
      let boxToReveal = GetRandomNumber(boxCount);
      if (
        //Make sure reveal box is not the chosen box, winning box, or already set to reveal
        gameBoxes[boxToReveal] === "💀" &&
        !boxesToReveal.includes(boxToReveal)
      ) {
        //Add box to return array
        boxesToReveal.push(boxToReveal);
        count++;
      }
    }

    return boxesToReveal;
  };

  const GetSwitchBoxIndex = (
    boxesToReveal: number[],
    boxCount: number
  ): number => {
    for (let i = 0; i < boxCount; i++) {
      if (!boxesToReveal.includes(i)) {
        return i;
      }
    }
    return 0;
  };

  const PlayMontyHall = (boxCount: number, runCount: number) => {
    while (gameCount < runCount) {
      const gameBoxes: string[] = CreateBoxes(boxCount);
      const chosenBoxIndex: number = GetRandomNumber(boxCount);
      const boxesToReveal: number[] = GetRevealBoxes(
        chosenBoxIndex,
        gameBoxes,
        boxCount
      );
      const switchBoxIndex: number = GetSwitchBoxIndex(boxesToReveal, boxCount);

      if (gameBoxes[switchBoxIndex] === "🔥") {
        setWinCount(winCount + 1);
      }
      gameCount++;
    }
  };

  if (props.boxCount > 0 && props.runCount > 0) {
    PlayMontyHall(props.boxCount, props.runCount);
  }

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
