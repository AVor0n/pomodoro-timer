import { useReducer } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/Home";
import context from "./ts/context";
import { reducer } from "./ts/reducer";
import { initialState } from "./ts/state";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider value={[state, dispatch]}>
      <div className="app">
        <Header />
        <HomePage />
      </div>
    </context.Provider>
  );
}

export default App;
