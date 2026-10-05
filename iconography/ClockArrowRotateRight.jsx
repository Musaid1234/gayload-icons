import animation from "./data/3105-clock-arrow-rotate-right.json";
import { Lordicon } from "./player.jsx";

export function ClockArrowRotateRight(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ClockArrowRotateRight;
