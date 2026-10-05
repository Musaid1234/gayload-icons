import animation from "./data/4286-calendar-check.json";
import { Lordicon } from "./player.jsx";

export function CalendarCheck(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CalendarCheck;
