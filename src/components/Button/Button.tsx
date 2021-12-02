import { MouseEventHandler, ReactNode } from "react";
import "./button.css";

interface ButtonPorps {
  primary?: boolean;
  action?: MouseEventHandler;
  disable?: boolean;
  children: ReactNode;
}

function Button(props: ButtonPorps) {
  const className = props.primary ? "btn btn--primary" : "btn";

  return (
    <button
      className={className}
      onClick={props.action}
      disabled={props.disable}
      title={props.disable ? "Сначала остановите таймер" : ""}
    >
      {props.children}
    </button>
  );
}

export default Button;
