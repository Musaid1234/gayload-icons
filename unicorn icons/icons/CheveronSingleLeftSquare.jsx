import webmUrl from "../media/0020-cheveron-single-left-square.webm";
import svgUrl from "../media/0020-cheveron-single-left-square.svg";
import { UnicornIcon } from "../player.jsx";

export function CheveronSingleLeftSquare(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CheveronSingleLeftSquare;
