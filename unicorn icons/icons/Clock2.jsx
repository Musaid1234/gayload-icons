import webmUrl from "../media/0437-clock.webm";
import svgUrl from "../media/0437-clock.svg";
import { UnicornIcon } from "../player.jsx";

export function Clock2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Clock2;
