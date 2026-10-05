import webmUrl from "../media/0084-calendar-cross.webm";
import svgUrl from "../media/0084-calendar-cross.svg";
import { UnicornIcon } from "../player.jsx";

export function CalendarCross(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CalendarCross;
