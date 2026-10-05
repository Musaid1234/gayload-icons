import animation from "./data/4262-shield-cross.json";
import { Lordicon } from "./player.jsx";

export function ShieldCross(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ShieldCross;
