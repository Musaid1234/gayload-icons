import animation from "./data/4079-hand-swipe-right-left.json";
import { Lordicon } from "./player.jsx";

export function HandSwipeRightLeft(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default HandSwipeRightLeft;
