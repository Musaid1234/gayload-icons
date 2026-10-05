import animation from "./data/4093-arrow-trending-down.json";
import { Lordicon } from "./player.jsx";

export function ArrowTrendingDown(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowTrendingDown;
