import animation from "./data/4031-spinner-square-circle.json";
import { Lordicon } from "./player.jsx";

export function SpinnerSquareCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerSquareCircle;
