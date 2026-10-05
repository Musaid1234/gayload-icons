import animation from "./data/4309-star-half.json";
import { Lordicon } from "./player.jsx";

export function StarHalf(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default StarHalf;
