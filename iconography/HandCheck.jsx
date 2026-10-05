import animation from "./data/4354-hand-check.json";
import { Lordicon } from "./player.jsx";

export function HandCheck(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default HandCheck;
