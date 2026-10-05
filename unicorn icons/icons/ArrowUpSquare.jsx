import webmUrl from "../media/0037-arrow-up-square.webm";
import svgUrl from "../media/0037-arrow-up-square.svg";
import { UnicornIcon } from "../player.jsx";

export function ArrowUpSquare(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ArrowUpSquare;
