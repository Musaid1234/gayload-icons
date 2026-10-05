import animation from "./data/3108-checkbox-list-square.json";
import { Lordicon } from "./player.jsx";

export function CheckboxListSquare(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CheckboxListSquare;
