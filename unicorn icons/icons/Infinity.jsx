import webmUrl from "../media/0149-infinity.webm";
import svgUrl from "../media/0149-infinity.svg";
import { UnicornIcon } from "../player.jsx";

export function Infinity(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Infinity;
