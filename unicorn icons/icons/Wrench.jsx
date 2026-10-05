import webmUrl from "../media/0291-wrench.webm";
import svgUrl from "../media/0291-wrench.svg";
import { UnicornIcon } from "../player.jsx";

export function Wrench(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Wrench;
