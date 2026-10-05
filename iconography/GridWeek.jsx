import animation from "./data/3110-grid-week.json";
import { Lordicon } from "./player.jsx";

export function GridWeek(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default GridWeek;
