import webmUrl from "../media/0376-pen.webm";
import svgUrl from "../media/0376-pen.svg";
import { UnicornIcon } from "../player.jsx";

export function Pen(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Pen;
