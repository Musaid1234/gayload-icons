import animation from "./data/51-minus.json";
import { Lordicon } from "./player.jsx";

export function Minus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Minus;
