import webmUrl from "../media/0299-rainbow.webm";
import svgUrl from "../media/0299-rainbow.svg";
import { UnicornIcon } from "../player.jsx";

export function Rainbow(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Rainbow;
