import webmUrl from "../media/0111-mute.webm";
import svgUrl from "../media/0111-mute.svg";
import { UnicornIcon } from "../player.jsx";

export function Mute(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Mute;
