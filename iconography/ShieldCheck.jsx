import animation from "./data/457-shield-check.json";
import { Lordicon } from "./player.jsx";

export function ShieldCheck(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ShieldCheck;
