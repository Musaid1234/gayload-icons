import webmUrl from "../media/0072-iv-drip.webm";
import svgUrl from "../media/0072-iv-drip.svg";
import { UnicornIcon } from "../player.jsx";

export function IvDrip(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default IvDrip;
