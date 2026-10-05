import animation from "./data/483-building.json";
import { Lordicon } from "./player.jsx";

export function Building(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Building;
