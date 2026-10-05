import webmUrl from "../media/0394-triangle-alert.webm";
import svgUrl from "../media/0394-triangle-alert.svg";
import { UnicornIcon } from "../player.jsx";

export function TriangleAlert(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default TriangleAlert;
