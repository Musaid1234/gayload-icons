import webmUrl from "../media/0242-pin.webm";
import svgUrl from "../media/0242-pin.svg";
import { UnicornIcon } from "../player.jsx";

export function Pin(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Pin;
