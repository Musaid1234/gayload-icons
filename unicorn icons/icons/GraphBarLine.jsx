import webmUrl from "../media/0152-graph-bar-line.webm";
import svgUrl from "../media/0152-graph-bar-line.svg";
import { UnicornIcon } from "../player.jsx";

export function GraphBarLine(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default GraphBarLine;
