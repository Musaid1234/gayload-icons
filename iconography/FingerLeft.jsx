import animation from "./data/4235-finger-left.json";
import { Lordicon } from "./player.jsx";

export function FingerLeft(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default FingerLeft;
