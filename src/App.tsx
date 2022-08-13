import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainForm from "./components/MainForm";
import GameCounters from "./components/GameCounters";
import { useState } from "react";

const App = () => {
  document.body.style.backgroundColor = "#162c35";
  const [programCount, setProgramCount] = useState(0);
  const [winCount, setWinCount] = useState(0);

  const sendProgramCount = (runCount: number) => setProgramCount(runCount);
  const sendWinCount = (winCount: number) => setWinCount(winCount);

  return (
    <div className="App">
      <MainForm
        sendProgramCount={sendProgramCount}
        sendWinCount={sendWinCount}
      />
      <GameCounters programCount={programCount} winCount={winCount} />
    </div>
  );
};

export default App;
