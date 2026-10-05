import webmUrl from "../media/0338-electric-charger.webm";
import svgUrl from "../media/0338-electric-charger.svg";
import { UnicornIcon } from "../player.jsx";

export function ElectricCharger(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ElectricCharger;
