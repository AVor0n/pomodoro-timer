import { useContext } from "react";
import Button from "../../components/Button/Button";
import {
  incrementBreakLength,
  decrementBreakLength,
  incrementSessionLength,
  decrementSessionLength,
} from "../../ts/actionCreators";
import context from "../../ts/context";
import "./settings.css";
import upArrow from "../../assets/add.svg";
import downArrow from "../../assets/minus.svg";
function Settings() {
  const [state, dispatch] = useContext(context);

  return (
    <div className="settings__wrapper">
      <h2 className="settings__title">Settings</h2>
      <div className="settings__options">
        <div className="settings-option__wrapper">
          <p className="settings-option__title">Session length</p>
          <div className="settings-option__controls">
            <Button primary action={() => dispatch(decrementSessionLength())}>
              <img src={downArrow} />
            </Button>
            <span className="settings-option__value">{state.sesionLength}</span>
            <Button primary action={() => dispatch(incrementSessionLength())}>
              <img src={upArrow} />
            </Button>
            <div className="leaf settings-option__background" />
          </div>
        </div>
        <div className="settings-option__wrapper">
          <p className="settings-option__title">Break length</p>
          <div className="settings-option__controls">
            <Button primary action={() => dispatch(decrementBreakLength())}>
              <img src={downArrow} />
            </Button>
            <span className="settings-option__value">{state.breakLength}</span>
            <Button primary action={() => dispatch(incrementBreakLength())}>
              <img src={upArrow} />
            </Button>
            <div className="leaf settings-option__background" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;
