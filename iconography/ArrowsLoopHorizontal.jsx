import animation from "./data/3401-arrows-loop-horizontal.json";
import { Lordicon } from "./player.jsx";

export function ArrowsLoopHorizontal(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowsLoopHorizontal;
