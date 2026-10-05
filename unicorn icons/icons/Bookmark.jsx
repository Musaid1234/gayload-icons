import webmUrl from "../media/0177-bookmark.webm";
import svgUrl from "../media/0177-bookmark.svg";
import { UnicornIcon } from "../player.jsx";

export function Bookmark(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Bookmark;
