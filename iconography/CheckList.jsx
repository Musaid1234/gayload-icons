import animation from "./data/4381-check-list.json";
import { Lordicon } from "./player.jsx";

export function CheckList(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CheckList;
