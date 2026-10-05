import webmUrl from "../media/0022-cheveron-single-down-square.webm";
import svgUrl from "../media/0022-cheveron-single-down-square.svg";
import { UnicornIcon } from "../player.jsx";

export function CheveronSingleDownSquare(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CheveronSingleDownSquare;
