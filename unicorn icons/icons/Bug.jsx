import webmUrl from "../media/0102-bug.webm";
import svgUrl from "../media/0102-bug.svg";
import { UnicornIcon } from "../player.jsx";

export function Bug(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Bug;
