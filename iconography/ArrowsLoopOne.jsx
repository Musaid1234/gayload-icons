import animation from "./data/3406-arrows-loop-one.json";
import { Lordicon } from "./player.jsx";

export function ArrowsLoopOne(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowsLoopOne;
