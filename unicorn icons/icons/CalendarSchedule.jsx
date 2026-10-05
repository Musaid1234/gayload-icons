import webmUrl from "../media/0423-calendar-schedule.webm";
import svgUrl from "../media/0423-calendar-schedule.svg";
import { UnicornIcon } from "../player.jsx";

export function CalendarSchedule(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CalendarSchedule;
