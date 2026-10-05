import animation from "./data/196-clock-arrow-rotate-left.json";
import { Lordicon } from "./player.jsx";

export function ClockArrowRotateLeft(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ClockArrowRotateLeft;
