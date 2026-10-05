import animation from "./data/1021-list-rules.json";
import { Lordicon } from "./player.jsx";

export function ListRules(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ListRules;
