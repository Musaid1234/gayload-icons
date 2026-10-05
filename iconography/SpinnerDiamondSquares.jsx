import animation from "./data/4026-spinner-diamond-squares.json";
import { Lordicon } from "./player.jsx";

export function SpinnerDiamondSquares(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerDiamondSquares;
