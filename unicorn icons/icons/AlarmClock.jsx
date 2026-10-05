import webmUrl from "../media/0099-alarm-clock.webm";
import svgUrl from "../media/0099-alarm-clock.svg";
import { UnicornIcon } from "../player.jsx";

export function AlarmClock(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default AlarmClock;
