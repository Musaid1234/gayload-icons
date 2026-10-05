import animation from "./data/373-check-list-square.json";
import { Lordicon } from "./player.jsx";

export function CheckListSquare(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CheckListSquare;
