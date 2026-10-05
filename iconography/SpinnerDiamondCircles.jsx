import animation from "./data/4027-spinner-diamond-circles.json";
import { Lordicon } from "./player.jsx";

export function SpinnerDiamondCircles(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerDiamondCircles;
