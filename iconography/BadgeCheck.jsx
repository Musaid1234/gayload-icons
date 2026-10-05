import animation from "./data/4256-badge-check.json";
import { Lordicon } from "./player.jsx";

export function BadgeCheck(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BadgeCheck;
