import animation from "./data/32-chevron-left.json";
import { Lordicon } from "./player.jsx";

export function ChevronLeft(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ChevronLeft;
