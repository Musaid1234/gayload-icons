import webmUrl from "../media/0256-shield-tick.webm";
import svgUrl from "../media/0256-shield-tick.svg";
import { UnicornIcon } from "../player.jsx";

export function ShieldTick(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ShieldTick;
