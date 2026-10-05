import webmUrl from "../media/0426-calendar-star.webm";
import svgUrl from "../media/0426-calendar-star.svg";
import { UnicornIcon } from "../player.jsx";

export function CalendarStar(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CalendarStar;
