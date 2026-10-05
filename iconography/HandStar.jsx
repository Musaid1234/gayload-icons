import animation from "./data/4353-hand-star.json";
import { Lordicon } from "./player.jsx";

export function HandStar(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default HandStar;
