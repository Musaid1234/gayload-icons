import webmUrl from "../media/0087-stopwatch.webm";
import svgUrl from "../media/0087-stopwatch.svg";
import { UnicornIcon } from "../player.jsx";

export function Stopwatch(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Stopwatch;
