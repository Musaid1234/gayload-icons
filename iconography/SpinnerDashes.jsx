import animation from "./data/4029-spinner-dashes.json";
import { Lordicon } from "./player.jsx";

export function SpinnerDashes(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerDashes;
