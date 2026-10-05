import animation from "./data/4022-spinner-half-circles.json";
import { Lordicon } from "./player.jsx";

export function SpinnerHalfCircles(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerHalfCircles;
