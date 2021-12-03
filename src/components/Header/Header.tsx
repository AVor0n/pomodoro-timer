import { useContext } from "react";
import {
  closeSettings,
  openSettings,
  setMinutes,
  setSeconds,
  setTimerMode,
} from "../../ts/actionCreators";
import context from "../../ts/context";
import Button from "../Button/Button";
import "./header.css";
import settingsSvg from "../../assets/settings.svg";
import backSvg from "../../assets/back.svg";

function Header() {
  const [state, dispatch] = useContext(context);

  function openSettingsPage() {
    dispatch(openSettings());
  }

  function closeSettingsPage() {
    dispatch(closeSettings());

    dispatch(setMinutes(state.sesionLength));
    dispatch(setSeconds(0));
    dispatch(setTimerMode("work"));
  }

  return (
    <header className="header">
      <Button
        action={state.isSettingsOpen ? closeSettingsPage : openSettingsPage}
        disable={!!state.timerId}
      >
        <img src={state.isSettingsOpen ? backSvg : settingsSvg} />
      </Button>
    </header>
  );
}

export default Header;
