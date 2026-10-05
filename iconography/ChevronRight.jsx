import animation from "./data/31-chevron-right.json";
import { Lordicon } from "./player.jsx";

export function ChevronRight(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ChevronRight;
