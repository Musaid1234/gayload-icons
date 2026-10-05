import webmUrl from "../media/0268-thumbs-up.webm";
import svgUrl from "../media/0268-thumbs-up.svg";
import { UnicornIcon } from "../player.jsx";

export function ThumbsUp(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ThumbsUp;
