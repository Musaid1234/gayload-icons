import animation from "./data/667-person-cycling.json";
import { Lordicon } from "./player.jsx";

export function PersonCycling(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PersonCycling;
