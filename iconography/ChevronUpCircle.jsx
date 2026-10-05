import animation from "./data/3410-chevron-up-circle.json";
import { Lordicon } from "./player.jsx";

export function ChevronUpCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ChevronUpCircle;
