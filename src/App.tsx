import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainForm from "./components/MainForm";
import GameCounters from "./components/GameCounters";
import { useState } from "react";

const App = () => {
  const [programRuns, setProgramRuns] = useState(0);
  const [boxCount, setBoxCount] = useState(0);

  const setRuns = (runCount: number) => setProgramRuns(runCount);
  const setBoxes = (boxTotal: number) => setBoxCount(boxTotal);

  return (
    <div className="App">
      <MainForm setRuns={setRuns} setBoxes={setBoxes} />
      <GameCounters />
    </div>
  );
};

export default App;
