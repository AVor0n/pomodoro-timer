import { useContext } from "react";
import { closeSettings, openSettings } from "../../ts/actionCreators";
import context from "../../ts/context";
import Button from "../Button/Button";
import "./header.css";

function Header() {
  const [state, dispatch] = useContext(context);

  function openSettingsPage() {
    dispatch(openSettings());
  }

  function closeSettingsPage() {
    dispatch(closeSettings());
  }

  return (
    <header className="header">
      <Button
        action={state.isSettingsOpen ? closeSettingsPage : openSettingsPage}
        disable={!!state.timerId}
      >
        {state.isSettingsOpen ? "↩" : "⚙"}
      </Button>
    </header>
  );
}

export default Header;
