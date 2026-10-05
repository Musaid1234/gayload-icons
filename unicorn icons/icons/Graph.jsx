import webmUrl from "../media/0145-graph.webm";
import svgUrl from "../media/0145-graph.svg";
import { UnicornIcon } from "../player.jsx";

export function Graph(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Graph;
