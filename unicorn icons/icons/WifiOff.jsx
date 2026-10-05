import webmUrl from "../media/0293-wifi-off.webm";
import svgUrl from "../media/0293-wifi-off.svg";
import { UnicornIcon } from "../player.jsx";

export function WifiOff(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default WifiOff;
