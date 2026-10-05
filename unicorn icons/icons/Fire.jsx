import webmUrl from "../media/0400-fire.webm";
import svgUrl from "../media/0400-fire.svg";
import { UnicornIcon } from "../player.jsx";

export function Fire(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Fire;
