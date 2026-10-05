import webmUrl from "../media/0240-mind-map.webm";
import svgUrl from "../media/0240-mind-map.svg";
import { UnicornIcon } from "../player.jsx";

export function MindMap(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default MindMap;
