import React from "react";
import { ActionTypes } from "./reducer";
import { initialState, State } from "./state";

const context = React.createContext<[State, React.Dispatch<ActionTypes>]>([
  initialState,
  () => {},
]);

export default context;
