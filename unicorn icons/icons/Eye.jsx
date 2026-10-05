import webmUrl from "../media/0211-eye.webm";
import svgUrl from "../media/0211-eye.svg";
import { UnicornIcon } from "../player.jsx";

export function Eye(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Eye;
