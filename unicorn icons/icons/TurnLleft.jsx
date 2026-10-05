import webmUrl from "../media/0004-turn-lleft.webm";
import svgUrl from "../media/0004-turn-lleft.svg";
import { UnicornIcon } from "../player.jsx";

export function TurnLleft(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default TurnLleft;
