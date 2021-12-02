export type State = {
  isSettingsOpen: boolean;
  timerId: number | undefined;
  min: number;
  sec: number;
  sesionLength: number;
  breakLength: number;
};

export const initialState: State = {
  isSettingsOpen: false,
  timerId: undefined,
  sesionLength: 25,
  breakLength: 5,
  min: 25,
  sec: 0,
};
