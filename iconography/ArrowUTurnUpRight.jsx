import animation from "./data/216-arrow-u-turn-up-right.json";
import { Lordicon } from "./player.jsx";

export function ArrowUTurnUpRight(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowUTurnUpRight;
