import animation from "./data/4308-heart-half.json";
import { Lordicon } from "./player.jsx";

export function HeartHalf(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default HeartHalf;
