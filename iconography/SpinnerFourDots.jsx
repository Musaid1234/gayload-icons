import animation from "./data/4019-spinner-four-dots.json";
import { Lordicon } from "./player.jsx";

export function SpinnerFourDots(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerFourDots;
