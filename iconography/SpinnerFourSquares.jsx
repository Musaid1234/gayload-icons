import animation from "./data/4040-spinner-four-squares.json";
import { Lordicon } from "./player.jsx";

export function SpinnerFourSquares(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerFourSquares;
