import webmUrl from "../media/0063-pill-bottle.webm";
import svgUrl from "../media/0063-pill-bottle.svg";
import { UnicornIcon } from "../player.jsx";

export function PillBottle(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default PillBottle;
