import webmUrl from "../media/0296-zoom-out.webm";
import svgUrl from "../media/0296-zoom-out.svg";
import { UnicornIcon } from "../player.jsx";

export function ZoomOut(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ZoomOut;
