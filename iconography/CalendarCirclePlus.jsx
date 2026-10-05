import animation from "./data/973-calendar-circle-plus.json";
import { Lordicon } from "./player.jsx";

export function CalendarCirclePlus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CalendarCirclePlus;
