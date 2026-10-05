import webmUrl from "../media/0000-turn-u.webm";
import svgUrl from "../media/0000-turn-u.svg";
import { UnicornIcon } from "../player.jsx";

export function TurnU(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default TurnU;
