import animation from "./data/4283-calendar-plus.json";
import { Lordicon } from "./player.jsx";

export function CalendarPlus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CalendarPlus;
