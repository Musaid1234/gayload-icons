import webmUrl from "../media/0094-tag.webm";
import svgUrl from "../media/0094-tag.svg";
import { UnicornIcon } from "../player.jsx";

export function Tag(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Tag;
