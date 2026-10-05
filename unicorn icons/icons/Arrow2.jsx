import webmUrl from "../media/0310-arrow2.webm";
import svgUrl from "../media/0310-arrow2.svg";
import { UnicornIcon } from "../player.jsx";

export function Arrow2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Arrow2;
