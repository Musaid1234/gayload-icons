import animation from "./data/4021-spinner-circle.json";
import { Lordicon } from "./player.jsx";

export function SpinnerCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerCircle;
