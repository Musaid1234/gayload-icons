import animation from "./data/3386-arrow-u-turn-up-left.json";
import { Lordicon } from "./player.jsx";

export function ArrowUTurnUpLeft(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowUTurnUpLeft;
