import animation from "./data/4033-spinner-three-squares.json";
import { Lordicon } from "./player.jsx";

export function SpinnerThreeSquares(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerThreeSquares;
