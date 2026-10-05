import animation from "./data/4018-spinner-three-dots.json";
import { Lordicon } from "./player.jsx";

export function SpinnerThreeDots(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerThreeDots;
