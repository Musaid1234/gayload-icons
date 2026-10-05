import animation from "./data/3413-chevron-left-circle.json";
import { Lordicon } from "./player.jsx";

export function ChevronLeftCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ChevronLeftCircle;
