import webmUrl from "../media/0139-post-box.webm";
import svgUrl from "../media/0139-post-box.svg";
import { UnicornIcon } from "../player.jsx";

export function PostBox(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default PostBox;
