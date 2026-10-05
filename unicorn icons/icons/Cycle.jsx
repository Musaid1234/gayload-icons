import webmUrl from "../media/0108-cycle.webm";
import svgUrl from "../media/0108-cycle.svg";
import { UnicornIcon } from "../player.jsx";

export function Cycle(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Cycle;
