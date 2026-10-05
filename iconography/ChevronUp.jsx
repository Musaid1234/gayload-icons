import animation from "./data/34-chevron-up.json";
import { Lordicon } from "./player.jsx";

export function ChevronUp(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ChevronUp;
