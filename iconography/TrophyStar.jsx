import animation from "./data/433-trophy-star.json";
import { Lordicon } from "./player.jsx";

export function TrophyStar(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default TrophyStar;
