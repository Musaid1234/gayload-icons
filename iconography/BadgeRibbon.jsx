import animation from "./data/3235-badge-ribbon.json";
import { Lordicon } from "./player.jsx";

export function BadgeRibbon(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BadgeRibbon;
