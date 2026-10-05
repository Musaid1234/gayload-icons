import webmUrl from "../media/0301-zoom-in.webm";
import svgUrl from "../media/0301-zoom-in.svg";
import { UnicornIcon } from "../player.jsx";

export function ZoomIn(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ZoomIn;
