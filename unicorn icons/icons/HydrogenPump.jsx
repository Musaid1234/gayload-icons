import webmUrl from "../media/0339-hydrogen-pump.webm";
import svgUrl from "../media/0339-hydrogen-pump.svg";
import { UnicornIcon } from "../player.jsx";

export function HydrogenPump(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default HydrogenPump;
