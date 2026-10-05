import webmUrl from "../media/0171-battery-charging.webm";
import svgUrl from "../media/0171-battery-charging.svg";
import { UnicornIcon } from "../player.jsx";

export function BatteryCharging(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BatteryCharging;
