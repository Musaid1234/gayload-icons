import webmUrl from "../media/0100-stop.webm";
import svgUrl from "../media/0100-stop.svg";
import { UnicornIcon } from "../player.jsx";

export function Stop(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Stop;
