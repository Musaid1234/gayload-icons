import webmUrl from "../media/0061-spray-bottle.webm";
import svgUrl from "../media/0061-spray-bottle.svg";
import { UnicornIcon } from "../player.jsx";

export function SprayBottle(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default SprayBottle;
