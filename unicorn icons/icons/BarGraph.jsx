import webmUrl from "../media/0396-bar-graph.webm";
import svgUrl from "../media/0396-bar-graph.svg";
import { UnicornIcon } from "../player.jsx";

export function BarGraph(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BarGraph;
