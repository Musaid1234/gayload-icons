import webmUrl from "../media/0320-at.webm";
import svgUrl from "../media/0320-at.svg";
import { UnicornIcon } from "../player.jsx";

export function At(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default At;
