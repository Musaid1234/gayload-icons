import webmUrl from "../media/0463-electric-tower.webm";
import svgUrl from "../media/0463-electric-tower.svg";
import { UnicornIcon } from "../player.jsx";

export function ElectricTower2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ElectricTower2;
