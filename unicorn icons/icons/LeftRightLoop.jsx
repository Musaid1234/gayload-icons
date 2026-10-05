import webmUrl from "../media/0011-left-right-loop.webm";
import svgUrl from "../media/0011-left-right-loop.svg";
import { UnicornIcon } from "../player.jsx";

export function LeftRightLoop(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default LeftRightLoop;
