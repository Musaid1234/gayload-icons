import animation from "./data/4311-three-stars.json";
import { Lordicon } from "./player.jsx";

export function ThreeStars(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ThreeStars;
