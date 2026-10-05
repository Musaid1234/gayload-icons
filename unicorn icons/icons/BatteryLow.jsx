import webmUrl from "../media/0174-battery-low.webm";
import svgUrl from "../media/0174-battery-low.svg";
import { UnicornIcon } from "../player.jsx";

export function BatteryLow(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BatteryLow;
