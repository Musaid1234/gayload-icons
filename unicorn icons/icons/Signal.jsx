import webmUrl from "../media/0259-signal.webm";
import svgUrl from "../media/0259-signal.svg";
import { UnicornIcon } from "../player.jsx";

export function Signal(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Signal;
