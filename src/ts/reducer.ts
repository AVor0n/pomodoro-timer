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

    case "INCREMENT_BREAK_LENGTH":
      return {
        ...state,
        breakLength: state.breakLength < 25 ? state.breakLength + 1 : state.breakLength,
      };

    case "DECREMENT_BREAK_LENGTH":
      return {
        ...state,
        breakLength: state.breakLength > 1 ? state.breakLength - 1 : state.breakLength,
      };

    case "INCREMENT_SESSION_LENGTH":
      return {
        ...state,
        sesionLength: state.sesionLength < 25 ? state.sesionLength + 1 : state.sesionLength,
      };

    case "DECREMENT_SESSION_LENGTH":
      return {
        ...state,
        sesionLength: state.sesionLength > 1 ? state.sesionLength - 1 : state.sesionLength,
      };

    case "SET_MINUTES":
      return { ...state, min: action.min };

    case "SET_SECONDS":
      return { ...state, sec: action.sec };

    case "SET_TIMER_MODE":
      return { ...state, mode: action.mode };

    default:
      return state;
  }
}
