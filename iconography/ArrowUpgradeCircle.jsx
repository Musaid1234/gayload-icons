import animation from "./data/3106-arrow-upgrade-circle.json";
import { Lordicon } from "./player.jsx";

export function ArrowUpgradeCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowUpgradeCircle;
