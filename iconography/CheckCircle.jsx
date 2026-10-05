import animation from "./data/24-check-circle.json";
import { Lordicon } from "./player.jsx";

export function CheckCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CheckCircle;
