import animation from "./data/364-calendar-dots.json";
import { Lordicon } from "./player.jsx";

export function CalendarDots(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CalendarDots;
