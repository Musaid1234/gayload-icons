import webmUrl from "../media/0089-electric-tower.webm";
import svgUrl from "../media/0089-electric-tower.svg";
import { UnicornIcon } from "../player.jsx";

export function ElectricTower(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ElectricTower;
