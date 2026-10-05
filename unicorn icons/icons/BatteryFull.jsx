import webmUrl from "../media/0173-battery-full.webm";
import svgUrl from "../media/0173-battery-full.svg";
import { UnicornIcon } from "../player.jsx";

export function BatteryFull(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BatteryFull;
