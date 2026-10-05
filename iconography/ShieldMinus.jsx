import animation from "./data/4264-shield-minus.json";
import { Lordicon } from "./player.jsx";

export function ShieldMinus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ShieldMinus;
