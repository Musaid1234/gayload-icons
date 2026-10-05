import webmUrl from "../media/0331-calendar.webm";
import svgUrl from "../media/0331-calendar.svg";
import { UnicornIcon } from "../player.jsx";

export function Calendar(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Calendar;
