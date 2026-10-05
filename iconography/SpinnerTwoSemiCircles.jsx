import animation from "./data/4025-spinner-two-semi-circles.json";
import { Lordicon } from "./player.jsx";

export function SpinnerTwoSemiCircles(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerTwoSemiCircles;
