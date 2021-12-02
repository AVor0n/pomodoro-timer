export type State = {
  timerId: number | undefined;
  min: number;
  sec: number;
  sesionLength: number;
  breakLength: number;
};

export const initialState: State = {
  timerId: undefined,
  sesionLength: 25,
  breakLength: 5,
  min: 25,
  sec: 0,
};
