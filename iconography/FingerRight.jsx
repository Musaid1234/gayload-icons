import animation from "./data/4234-finger-right.json";
import { Lordicon } from "./player.jsx";

export function FingerRight(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default FingerRight;
