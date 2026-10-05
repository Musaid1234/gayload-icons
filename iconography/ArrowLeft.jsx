import animation from "./data/2753-arrow-left.json";
import { Lordicon } from "./player.jsx";

export function ArrowLeft(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowLeft;
