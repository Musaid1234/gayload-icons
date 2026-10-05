import animation from "./data/3412-chevron-right-circle.json";
import { Lordicon } from "./player.jsx";

export function ChevronRightCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ChevronRightCircle;
