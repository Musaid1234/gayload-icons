import webmUrl from "../media/0379-cross.webm";
import svgUrl from "../media/0379-cross.svg";
import { UnicornIcon } from "../player.jsx";

export function Cross(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Cross;
