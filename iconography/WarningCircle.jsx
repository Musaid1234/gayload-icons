import animation from "./data/260-warning-circle.json";
import { Lordicon } from "./player.jsx";

export function WarningCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default WarningCircle;
