import webmUrl from "../media/0229-marker.webm";
import svgUrl from "../media/0229-marker.svg";
import { UnicornIcon } from "../player.jsx";

export function Marker(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Marker;
