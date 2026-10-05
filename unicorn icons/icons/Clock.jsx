import webmUrl from "../media/0083-clock.webm";
import svgUrl from "../media/0083-clock.svg";
import { UnicornIcon } from "../player.jsx";

export function Clock(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Clock;
