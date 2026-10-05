import webmUrl from "../media/0007-rotate-left.webm";
import svgUrl from "../media/0007-rotate-left.svg";
import { UnicornIcon } from "../player.jsx";

export function RotateLeft(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default RotateLeft;
