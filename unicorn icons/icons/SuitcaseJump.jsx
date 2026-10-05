import webmUrl from "../media/0360-suitcase-jump.webm";
import svgUrl from "../media/0360-suitcase-jump.svg";
import { UnicornIcon } from "../player.jsx";

export function SuitcaseJump(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default SuitcaseJump;
