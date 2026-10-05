import webmUrl from "../media/0080-calendar-plus.webm";
import svgUrl from "../media/0080-calendar-plus.svg";
import { UnicornIcon } from "../player.jsx";

export function CalendarPlus(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CalendarPlus;
