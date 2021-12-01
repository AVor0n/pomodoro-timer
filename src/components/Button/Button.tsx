import { MouseEventHandler, ReactNode } from "react";
import "./button.css";

interface ButtonPorps {
  primary?: boolean;
  action?: MouseEventHandler;
  children: ReactNode;
}

function Button(props: ButtonPorps) {
  const className = props.primary ? "btn btn--primary" : "btn";

  return (
    <button className={className} onClick={props.action}>
      {props.children}
    </button>
  );
}

export default Button;
