import animation from "./data/4036-spinner-spiral.json";
import { Lordicon } from "./player.jsx";

export function SpinnerSpiral(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerSpiral;
