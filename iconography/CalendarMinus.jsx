import animation from "./data/4284-calendar-minus.json";
import { Lordicon } from "./player.jsx";

export function CalendarMinus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CalendarMinus;
