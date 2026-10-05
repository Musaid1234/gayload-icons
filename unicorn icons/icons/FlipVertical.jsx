import webmUrl from "../media/0220-flip-vertical.webm";
import svgUrl from "../media/0220-flip-vertical.svg";
import { UnicornIcon } from "../player.jsx";

export function FlipVertical(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default FlipVertical;
