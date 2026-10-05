import webmUrl from "../media/0277-tick.webm";
import svgUrl from "../media/0277-tick.svg";
import { UnicornIcon } from "../player.jsx";

export function Tick(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Tick;
