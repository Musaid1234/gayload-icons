import webmUrl from "../media/0270-toggle-on.webm";
import svgUrl from "../media/0270-toggle-on.svg";
import { UnicornIcon } from "../player.jsx";

export function ToggleOn(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ToggleOn;
