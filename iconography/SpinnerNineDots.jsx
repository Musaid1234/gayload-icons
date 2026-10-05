import animation from "./data/4020-spinner-nine-dots.json";
import { Lordicon } from "./player.jsx";

export function SpinnerNineDots(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerNineDots;
