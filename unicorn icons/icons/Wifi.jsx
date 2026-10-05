import webmUrl from "../media/0300-wifi.webm";
import svgUrl from "../media/0300-wifi.svg";
import { UnicornIcon } from "../player.jsx";

export function Wifi(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Wifi;
