import webmUrl from "../media/0107-icecream-cone.webm";
import svgUrl from "../media/0107-icecream-cone.svg";
import { UnicornIcon } from "../player.jsx";

export function IcecreamCone(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default IcecreamCone;
