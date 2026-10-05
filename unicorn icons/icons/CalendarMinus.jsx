import webmUrl from "../media/0311-calendar-minus.webm";
import svgUrl from "../media/0311-calendar-minus.svg";
import { UnicornIcon } from "../player.jsx";

export function CalendarMinus(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CalendarMinus;
