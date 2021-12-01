import "./tomatoContainer.css";
import { ReactNode } from "react";

function TomatoContainer(props: { children: ReactNode }) {
  return (
    <div className="tomato">
      <div className="root"></div>
      <div className="leaf leaf-1"></div>
      <div className="leaf leaf-2"></div>
      <div className="leaf leaf-3"></div>
      {props.children}
    </div>
  );
}

export default TomatoContainer;
