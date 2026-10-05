import animation from "./data/4285-calendar-cross.json";
import { Lordicon } from "./player.jsx";

export function CalendarCross(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CalendarCross;
