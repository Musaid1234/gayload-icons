import animation from "./data/4384-checkbox-list.json";
import { Lordicon } from "./player.jsx";

export function CheckboxList(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CheckboxList;
