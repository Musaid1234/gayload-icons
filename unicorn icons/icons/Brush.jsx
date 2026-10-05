import webmUrl from "../media/0180-brush.webm";
import svgUrl from "../media/0180-brush.svg";
import { UnicornIcon } from "../player.jsx";

export function Brush(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Brush;
