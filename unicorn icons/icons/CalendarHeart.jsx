import webmUrl from "../media/0424-calendar-heart.webm";
import svgUrl from "../media/0424-calendar-heart.svg";
import { UnicornIcon } from "../player.jsx";

export function CalendarHeart(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CalendarHeart;
