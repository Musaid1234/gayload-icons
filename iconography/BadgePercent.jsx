import animation from "./data/756-badge-percent.json";
import { Lordicon } from "./player.jsx";

export function BadgePercent(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BadgePercent;
