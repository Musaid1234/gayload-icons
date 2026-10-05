import webmUrl from "../media/0019-cheveron-single-left.webm";
import svgUrl from "../media/0019-cheveron-single-left.svg";
import { UnicornIcon } from "../player.jsx";

export function CheveronSingleLeft(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CheveronSingleLeft;
