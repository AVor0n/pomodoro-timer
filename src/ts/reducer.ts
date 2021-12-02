import { State } from "./state";
import * as actionCreators from "./actionCreators";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionTypes = ReturnType<InferValueTypes<typeof actionCreators>>;

export function reducer(state: State, action: ActionTypes): State {
  switch (action.type) {
    case "OPEN_SETTINGS":
      return { ...state, isSettingsOpen: true };

    case "CLOSE_SETTINGS":
      return { ...state, isSettingsOpen: false };

    case "START_TIMER":
      return { ...state, timerId: action.timerId };

    case "STOP_TIMER":
      return { ...state, timerId: undefined };

    case "SET_BREAK_LENGTH":
      return { ...state, breakLength: action.breakLength };

    case "SET_SESSION_LENGTH":
      return { ...state, sesionLength: action.sesionLength };

    case "SET_MINUTES":
      return { ...state, min: action.min };

    case "SET_SECONDS":
      return { ...state, sec: action.sec };

    default:
      return state;
  }
}
