import webmUrl from "../media/0420-alarm-clock.webm";
import svgUrl from "../media/0420-alarm-clock.svg";
import { UnicornIcon } from "../player.jsx";

export function AlarmClock2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default AlarmClock2;
