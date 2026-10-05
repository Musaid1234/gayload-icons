import webmUrl from "../media/0051-arrow-block-left.webm";
import svgUrl from "../media/0051-arrow-block-left.svg";
import { UnicornIcon } from "../player.jsx";

export function ArrowBlockLeft(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ArrowBlockLeft;
