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

export const incrementSessionLength = () =>
  <const>{
    type: "INCREMENT_SESSION_LENGTH",
  };

export const decrementSessionLength = () =>
  <const>{
    type: "DECREMENT_SESSION_LENGTH",
  };

export const incrementBreakLength = () =>
  <const>{
    type: "INCREMENT_BREAK_LENGTH",
  };

export const decrementBreakLength = () =>
  <const>{
    type: "DECREMENT_BREAK_LENGTH",
  };

export const openSettings = () =>
  <const>{
    type: "OPEN_SETTINGS",
  };

export const closeSettings = () =>
  <const>{
    type: "CLOSE_SETTINGS",
  };

export const setTimerMode = (mode: "work" | "break") =>
  <const>{
    type: "SET_TIMER_MODE",
    mode: mode,
  };
