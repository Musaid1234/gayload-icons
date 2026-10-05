import animation from "./data/751-arrow-out-square.json";
import { Lordicon } from "./player.jsx";

export function ArrowOutSquare(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowOutSquare;
