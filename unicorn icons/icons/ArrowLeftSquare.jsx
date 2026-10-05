import webmUrl from "../media/0039-arrow-left-square.webm";
import svgUrl from "../media/0039-arrow-left-square.svg";
import { UnicornIcon } from "../player.jsx";

export function ArrowLeftSquare(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ArrowLeftSquare;
