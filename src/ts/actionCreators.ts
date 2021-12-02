export const startTimer = (id: number) =>
  <const>{
    type: "START_TIMER",
    timerId: id,
  };

export const stopTimer = () =>
  <const>{
    type: "STOP_TIMER",
  };

export const setMinutes = (min: number) =>
  <const>{
    type: "SET_MINUTES",
    min: min,
  };

export const setSeconds = (sec: number) =>
  <const>{
    type: "SET_SECONDS",
    sec: sec,
  };

export const setSessionLength = (sessionLength: number) =>
  <const>{
    type: "SET_SESSION_LENGTH",
    sesionLength: sessionLength,
  };

export const setBreakLength = (breakLength: number) =>
  <const>{
    type: "SET_BREAK_LENGTH",
    breakLength: breakLength,
  };
