import webmUrl from "../media/0465-green-bulb.webm";
import svgUrl from "../media/0465-green-bulb.svg";
import { UnicornIcon } from "../player.jsx";

export function GreenBulb2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default GreenBulb2;
