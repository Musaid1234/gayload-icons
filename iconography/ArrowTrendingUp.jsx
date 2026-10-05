import animation from "./data/4094-arrow-trending-up.json";
import { Lordicon } from "./player.jsx";

export function ArrowTrendingUp(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowTrendingUp;
