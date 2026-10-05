import webmUrl from "../media/0250-paint-roller.webm";
import svgUrl from "../media/0250-paint-roller.svg";
import { UnicornIcon } from "../player.jsx";

export function PaintRoller(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default PaintRoller;
