import webmUrl from "../media/0312-box-open-tick.webm";
import svgUrl from "../media/0312-box-open-tick.svg";
import { UnicornIcon } from "../player.jsx";

export function BoxOpenTick(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BoxOpenTick;
