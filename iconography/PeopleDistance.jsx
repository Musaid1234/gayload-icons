import animation from "./data/1251-people-distance.json";
import { Lordicon } from "./player.jsx";

export function PeopleDistance(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PeopleDistance;
