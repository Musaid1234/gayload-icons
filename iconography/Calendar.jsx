import animation from "./data/28-calendar.json";
import { Lordicon } from "./player.jsx";

export function Calendar(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Calendar;
