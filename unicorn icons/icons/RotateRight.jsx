import webmUrl from "../media/0006-rotate-right.webm";
import svgUrl from "../media/0006-rotate-right.svg";
import { UnicornIcon } from "../player.jsx";

export function RotateRight(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default RotateRight;
