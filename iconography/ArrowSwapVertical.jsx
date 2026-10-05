import animation from "./data/3112-arrow-swap-vertical.json";
import { Lordicon } from "./player.jsx";

export function ArrowSwapVertical(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowSwapVertical;
