import webmUrl from "../media/0344-pan.webm";
import svgUrl from "../media/0344-pan.svg";
import { UnicornIcon } from "../player.jsx";

export function Pan(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Pan;
