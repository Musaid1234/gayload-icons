import animation from "./data/33-chevron-down.json";
import { Lordicon } from "./player.jsx";

export function ChevronDown(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ChevronDown;
