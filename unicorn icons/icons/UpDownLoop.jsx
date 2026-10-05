import webmUrl from "../media/0002-up-down-loop.webm";
import svgUrl from "../media/0002-up-down-loop.svg";
import { UnicornIcon } from "../player.jsx";

export function UpDownLoop(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default UpDownLoop;
