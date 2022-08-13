import GetRandomNumber from "../common/random";

const CreateBoxes = (boxCount: number): string[] => {
    let boxes: string[] = [];
    const prize_box = GetRandomNumber(boxCount);

    for (var i = 1; i < boxCount + 1; i++) {
      boxes.push("💀");
    }

    boxes[prize_box] = "🔥";
    return boxes;
  };

const GetRevealBoxes = (chosenBoxIndex: number, gameBoxes: string[], boxCount: number): number[] => {
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

const GetSwitchBoxIndex = (boxesToReveal: number[], boxCount: number): number => {
    for (let i = 0; i < boxCount; i++) {
        if (!boxesToReveal.includes(i)) {
        return i;
        }
    }
    return 0;
};

export const GetMontyHall = (boxCount: number, runCount: number): number => {
    let gameWinCount = 0;
    let gameCount = 0;

    while (gameCount < runCount) {
      const gameBoxes: string[] = CreateBoxes(boxCount);
      const chosenBoxIndex: number = GetRandomNumber(boxCount);
      const boxesToReveal: number[] = GetRevealBoxes(chosenBoxIndex, gameBoxes, boxCount);
      const switchBoxIndex: number = GetSwitchBoxIndex(boxesToReveal, boxCount);

      if (gameBoxes[switchBoxIndex] === "🔥") {
        gameWinCount++;
      }
      gameCount++;
    }

    return gameWinCount;
};