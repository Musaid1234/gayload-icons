import webmUrl from "../media/0425-calendar-search.webm";
import svgUrl from "../media/0425-calendar-search.svg";
import { UnicornIcon } from "../player.jsx";

export function CalendarSearch(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CalendarSearch;
