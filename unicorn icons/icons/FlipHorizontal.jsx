import webmUrl from "../media/0370-flip-horizontal.webm";
import svgUrl from "../media/0370-flip-horizontal.svg";
import { UnicornIcon } from "../player.jsx";

export function FlipHorizontal(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default FlipHorizontal;
