import webmUrl from "../media/0086-green-bulb.webm";
import svgUrl from "../media/0086-green-bulb.svg";
import { UnicornIcon } from "../player.jsx";

export function GreenBulb(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default GreenBulb;
