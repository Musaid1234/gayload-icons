import webmUrl from "../media/0014-cheveron-single-up-square.webm";
import svgUrl from "../media/0014-cheveron-single-up-square.svg";
import { UnicornIcon } from "../player.jsx";

export function CheveronSingleUpSquare(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CheveronSingleUpSquare;
