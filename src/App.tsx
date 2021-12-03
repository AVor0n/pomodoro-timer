import { useReducer } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/Home";
import SettingsPage from "./pages/Settings/Settings";
import context from "./ts/context";
import { reducer } from "./ts/reducer";
import { initialState } from "./ts/state";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const bgAppColor = !state.timerId ? "#ffffff" : state.mode === "work" ? "#ff9204" : "#1d1e20";
  return (
    <context.Provider value={[state, dispatch]}>
      <div className="app" style={{ backgroundColor: bgAppColor }}>
        <div className="app__wrapper">
          <Header />
          {state.isSettingsOpen ? <SettingsPage /> : <HomePage />}
        </div>
      </div>
    </context.Provider>
  );
}

export default App;
