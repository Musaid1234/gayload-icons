import webmUrl from "../media/0329-text-align-center.webm";
import svgUrl from "../media/0329-text-align-center.svg";
import { UnicornIcon } from "../player.jsx";

export function TextAlignCenter(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default TextAlignCenter;
