import animation from "./data/4382-dash-list.json";
import { Lordicon } from "./player.jsx";

export function DashList(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default DashList;
