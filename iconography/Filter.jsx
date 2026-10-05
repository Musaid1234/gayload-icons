import animation from "./data/736-filter.json";
import { Lordicon } from "./player.jsx";

export function Filter(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Filter;
