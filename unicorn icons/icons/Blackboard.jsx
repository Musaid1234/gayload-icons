import webmUrl from "../media/0123-blackboard.webm";
import svgUrl from "../media/0123-blackboard.svg";
import { UnicornIcon } from "../player.jsx";

export function Blackboard(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Blackboard;
