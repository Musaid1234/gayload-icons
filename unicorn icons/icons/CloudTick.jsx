import webmUrl from "../media/0189-cloud-tick.webm";
import svgUrl from "../media/0189-cloud-tick.svg";
import { UnicornIcon } from "../player.jsx";

export function CloudTick(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CloudTick;
