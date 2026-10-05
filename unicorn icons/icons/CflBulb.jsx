import webmUrl from "../media/0097-cfl-bulb.webm";
import svgUrl from "../media/0097-cfl-bulb.svg";
import { UnicornIcon } from "../player.jsx";

export function CflBulb(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CflBulb;
