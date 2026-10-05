import webmUrl from "../media/0105-unmute.webm";
import svgUrl from "../media/0105-unmute.svg";
import { UnicornIcon } from "../player.jsx";

export function Unmute(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Unmute;
