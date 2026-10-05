import webmUrl from "../media/0413-post-box.webm";
import svgUrl from "../media/0413-post-box.svg";
import { UnicornIcon } from "../player.jsx";

export function PostBox2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default PostBox2;
