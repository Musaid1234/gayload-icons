import animation from "./data/3097-pause-circle.json";
import { Lordicon } from "./player.jsx";

export function PauseCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PauseCircle;
