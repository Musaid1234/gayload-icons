import webmUrl from "../media/0121-compass.webm";
import svgUrl from "../media/0121-compass.svg";
import { UnicornIcon } from "../player.jsx";

export function Compass(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Compass;
