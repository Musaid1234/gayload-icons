import webmUrl from "../media/0015-cheveron-single-right.webm";
import svgUrl from "../media/0015-cheveron-single-right.svg";
import { UnicornIcon } from "../player.jsx";

export function CheveronSingleRight(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CheveronSingleRight;
