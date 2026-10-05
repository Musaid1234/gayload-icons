import webmUrl from "../media/0233-flag.webm";
import svgUrl from "../media/0233-flag.svg";
import { UnicornIcon } from "../player.jsx";

export function Flag(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Flag;
