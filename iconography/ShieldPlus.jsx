import animation from "./data/4263-shield-plus.json";
import { Lordicon } from "./player.jsx";

export function ShieldPlus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ShieldPlus;
