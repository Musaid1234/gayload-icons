import webmUrl from "../media/0003-turn-right.webm";
import svgUrl from "../media/0003-turn-right.svg";
import { UnicornIcon } from "../player.jsx";

export function TurnRight(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default TurnRight;
