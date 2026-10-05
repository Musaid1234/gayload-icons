import webmUrl from "../media/0436-stopwatch.webm";
import svgUrl from "../media/0436-stopwatch.svg";
import { UnicornIcon } from "../player.jsx";

export function Stopwatch2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Stopwatch2;
