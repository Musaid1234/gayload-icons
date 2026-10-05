import animation from "./data/3382-arrow-up-right.json";
import { Lordicon } from "./player.jsx";

export function ArrowUpRight(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowUpRight;
