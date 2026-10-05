import webmUrl from "../media/0042-arrow-down-square.webm";
import svgUrl from "../media/0042-arrow-down-square.svg";
import { UnicornIcon } from "../player.jsx";

export function ArrowDownSquare(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ArrowDownSquare;
