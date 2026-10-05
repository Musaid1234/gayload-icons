import webmUrl from "../media/0163-align-left.webm";
import svgUrl from "../media/0163-align-left.svg";
import { UnicornIcon } from "../player.jsx";

export function AlignLeft(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default AlignLeft;
