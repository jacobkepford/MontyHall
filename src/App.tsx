import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainForm from "./components/MainForm";
import GameCounters from "./components/GameCounters";
import { useState } from "react";

const App = () => {
  const [runCount, setRuns] = useState(0);
  const [boxCount, setBoxCount] = useState(0);

  const setRunCount = (runCount: number) => setRuns(runCount);
  const setBoxes = (boxTotal: number) => setBoxCount(boxTotal);

  return (
    <div className="App">
      <MainForm setRuns={setRunCount} setBoxes={setBoxes} />
      <GameCounters boxCount={boxCount} runCount={runCount} />
    </div>
  );
};

export default App;
