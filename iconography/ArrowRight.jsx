import animation from "./data/230-arrow-right.json";
import { Lordicon } from "./player.jsx";

export function ArrowRight(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowRight;
