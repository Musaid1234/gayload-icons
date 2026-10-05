import webmUrl from "../media/0050-arrow-block-right.webm";
import svgUrl from "../media/0050-arrow-block-right.svg";
import { UnicornIcon } from "../player.jsx";

export function ArrowBlockRight(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ArrowBlockRight;
