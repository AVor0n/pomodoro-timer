import "./home.css";
import TomatoContainer from "./../../components/TomatoContainer/TomatoContainer";
import Timer from "./../../components/Timer/Timer";
import Button from "../../components/Button/Button";
import { useContext, useEffect } from "react";
import {
  setMinutes,
  setSeconds,
  setTimerMode,
  startTimer,
  stopTimer,
} from "../../ts/actionCreators";
import context from "../../ts/context";
import soundUrl from "../../assets/Beep.mp3";

function Home() {
  const [state, dispatch] = useContext(context);
  const audio = new Audio(soundUrl);

  let min: number = state.min;
  let sec: number = state.sec;
  let mode: "work" | "break" = state.mode;

  // timerTick() не работает, если использовать state.min и state.sec без промежуточных переменных
  function timerTick() {
    if (sec !== 0) {
      dispatch(setSeconds((sec -= 1)));
    } else if (min !== 0) {
      clearInterval(state.timerId);
      dispatch(setMinutes((min -= 1)));
      dispatch(setSeconds((sec = 59)));
    } else {
      // dispatch(stopTimer());
      timerSwitchMode();
      timerBeep();
    }
  }

  // useEffect(() => {
  //   return function () {
  //     if (state.timerId) {
  //       clearInterval(state.timerId);
  //     }
  //   };
  // }, [state.timerId]);

  function timerBeep() {
    audio.play();
  }
  function timerSwitchMode() {
    if (mode === "work") {
      min = state.breakLength;
      mode = "break";
      dispatch(setTimerMode(mode));
    } else {
      min = state.sesionLength;
      mode = "work";
      dispatch(setTimerMode(mode));
    }
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
    dispatch(setTimerMode("work"));
  };

  let title = !state.timerId
    ? state.sec === 0 && state.min === state.sesionLength
      ? "Get Ready"
      : "Pause"
    : state.mode;

  let titleColor = title === "break" ? "#fff" : "#000";

  return (
    <div className="home__wrapper">
      <h2 className="home__title" style={{ color: titleColor }}>
        {title}
      </h2>

      <TomatoContainer>
        <Timer min={state.min} sec={state.sec} />
      </TomatoContainer>

      <div className="buttons">
        <Button primary action={state.timerId ? btnStopClick : btnStartClick}>
          {state.timerId ? "⏸" : "🞂"}
        </Button>

        {title === "Pause" ? (
          <Button primary action={btnResetClick}>
            🗘
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
