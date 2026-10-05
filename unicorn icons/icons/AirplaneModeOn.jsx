import webmUrl from "../media/0167-airplane-mode-on.webm";
import svgUrl from "../media/0167-airplane-mode-on.svg";
import { UnicornIcon } from "../player.jsx";

export function AirplaneModeOn(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default AirplaneModeOn;
