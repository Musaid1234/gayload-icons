import animation from "./data/727-widgets-plus.json";
import { Lordicon } from "./player.jsx";

export function WidgetsPlus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default WidgetsPlus;
