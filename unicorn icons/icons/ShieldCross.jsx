import webmUrl from "../media/0253-shield-cross.webm";
import svgUrl from "../media/0253-shield-cross.svg";
import { UnicornIcon } from "../player.jsx";

export function ShieldCross(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ShieldCross;
