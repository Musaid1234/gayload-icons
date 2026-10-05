import webmUrl from "../media/0461-tag.webm";
import svgUrl from "../media/0461-tag.svg";
import { UnicornIcon } from "../player.jsx";

export function Tag2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Tag2;
