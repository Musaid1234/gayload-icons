import animation from "./data/4028-spinner-ring.json";
import { Lordicon } from "./player.jsx";

export function SpinnerRing(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerRing;
