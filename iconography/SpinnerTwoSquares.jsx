import animation from "./data/4037-spinner-two-squares.json";
import { Lordicon } from "./player.jsx";

export function SpinnerTwoSquares(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerTwoSquares;
