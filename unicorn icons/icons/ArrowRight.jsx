import webmUrl from "../media/0308-arrow-right.webm";
import svgUrl from "../media/0308-arrow-right.svg";
import { UnicornIcon } from "../player.jsx";

export function ArrowRight(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ArrowRight;
