import webmUrl from "../media/0383-thumbs-down.webm";
import svgUrl from "../media/0383-thumbs-down.svg";
import { UnicornIcon } from "../player.jsx";

export function ThumbsDown(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ThumbsDown;
