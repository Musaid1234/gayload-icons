import animation from "./data/67-magnifier-minus.json";
import { Lordicon } from "./player.jsx";

export function MagnifierMinus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default MagnifierMinus;
