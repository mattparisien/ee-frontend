import classNames from "classnames";
import { ExitNav } from "./Svg";

export default function ViewportNav(props) {
  return (
    <div className="viewport-nav -fixed">
      <button className="viewport-nav__exit-btn" type="button" onClick={props.onClick}>
        {ExitNav()}
      </button>
    </div>
  )
}