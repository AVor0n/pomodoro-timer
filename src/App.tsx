import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper centered">
        <h2 className="header">Get Ready</h2>
        <div className="tomato">
          <div className="timer">
            <span className="timer__minutes timer__value">25</span>
            <span className="timer__separator">:</span>
            <span className="timer__secunds timer__value">00</span>
          </div>
          <div className="leaf leaf-1"></div>
          <div className="leaf leaf-2"></div>
          <div className="leaf leaf-3"></div>
          <div className="root"></div>
        </div>
        <div className="buttons">
          <button className="btn-start-stop btn">🞂</button>
          <button className="btn-reset btn">🗘</button>
        </div>
      </div>
    </div>
  );
}

export default App;
