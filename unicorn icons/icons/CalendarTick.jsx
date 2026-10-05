import webmUrl from "../media/0427-calendar-tick.webm";
import svgUrl from "../media/0427-calendar-tick.svg";
import { UnicornIcon } from "../player.jsx";

export function CalendarTick(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CalendarTick;
