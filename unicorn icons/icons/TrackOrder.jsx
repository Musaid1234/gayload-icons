import webmUrl from "../media/0337-track-order.webm";
import svgUrl from "../media/0337-track-order.svg";
import { UnicornIcon } from "../player.jsx";

export function TrackOrder(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default TrackOrder;
