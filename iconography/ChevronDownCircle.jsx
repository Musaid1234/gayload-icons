import animation from "./data/3411-chevron-down-circle.json";
import { Lordicon } from "./player.jsx";

export function ChevronDownCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ChevronDownCircle;
