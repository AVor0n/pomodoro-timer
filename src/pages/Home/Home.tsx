import "./home.css";
import TomatoContainer from "./../../components/TomatoContainer/TomatoContainer";
import Timer from "./../../components/Timer/Timer";
import Button from "../../components/Button/Button";
import { useContext, useEffect } from "react";
import {
  setMinutes,
  setSeconds,
  startTimer,
  stopTimer,
} from "../../ts/actionCreators";
import context from "../../ts/context";

function Home() {
  const [state, dispatch] = useContext(context);

  let min: number = state.min;
  let sec: number = state.sec;
  // timerTick() не работает, если использовать state.min и state.sec без промежуточных переменных
  function timerTick() {
    if (sec !== 0) {
      dispatch(setSeconds((sec -= 1)));
    } else if (min !== 0) {
      clearInterval(state.timerId);
      dispatch(setMinutes((min -= 1)));
      dispatch(setSeconds((sec = 59)));
    } else {
      dispatch(stopTimer());
      timerBeep();
    }
  }

  useEffect(() => {
    return function () {
      if (state.timerId) {
        clearInterval(state.timerId);
      }
    };
  }, [state.timerId]);

  function timerBeep() {
    console.log("Beeeeeeep!");
  }

  const btnStartClick = () => {
    const timerId = setInterval(() => timerTick(), 100);
    dispatch(startTimer(timerId));
  };

  const btnStopClick = () => {
    clearInterval(state.timerId);
    dispatch(stopTimer());
  };

  const btnResetClick = () => {
    const defaultMin = state.sesionLength;
    dispatch(setMinutes(defaultMin));
    dispatch(setSeconds(0));
  };

  return (
    <div className="home__wrapper">
      <h2 className="home__title">Get Ready</h2>

      <TomatoContainer>
        <Timer min={state.min} sec={state.sec} />
      </TomatoContainer>

      <div className="buttons">
        <Button primary action={state.timerId ? btnStopClick : btnStartClick}>
          {state.timerId ? "⏸" : "🞂"}
        </Button>
        <Button primary action={btnResetClick}>
          🗘
        </Button>
      </div>
    </div>
  );
}

export default Home;
