import animation from "./data/4383-number-list.json";
import { Lordicon } from "./player.jsx";

export function NumberList(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default NumberList;
