import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainForm from "./components/MainForm";
import GameCounters from "./components/GameCounters";

function App() {
  return (
    <div className="App">
      <MainForm />
      <GameCounters />
    </div>
  );
}

export default App;
