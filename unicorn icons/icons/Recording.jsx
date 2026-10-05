import webmUrl from "../media/0480-recording.webm";
import svgUrl from "../media/0480-recording.svg";
import { UnicornIcon } from "../player.jsx";

export function Recording(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Recording;
