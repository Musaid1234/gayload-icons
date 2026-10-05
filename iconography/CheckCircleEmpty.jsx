import animation from "./data/4489-check-circle-empty.json";
import { Lordicon } from "./player.jsx";

export function CheckCircleEmpty(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CheckCircleEmpty;
