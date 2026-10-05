import animation from "./data/250-smartphone-rotate-right.json";
import { Lordicon } from "./player.jsx";

export function SmartphoneRotateRight(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SmartphoneRotateRight;
