import webmUrl from "../media/0269-toggle-off.webm";
import svgUrl from "../media/0269-toggle-off.svg";
import { UnicornIcon } from "../player.jsx";

export function ToggleOff(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ToggleOff;
