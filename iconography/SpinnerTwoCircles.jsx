import animation from "./data/4024-spinner-two-circles.json";
import { Lordicon } from "./player.jsx";

export function SpinnerTwoCircles(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerTwoCircles;
