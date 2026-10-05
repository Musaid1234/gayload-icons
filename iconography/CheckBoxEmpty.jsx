import animation from "./data/4490-check-box-empty.json";
import { Lordicon } from "./player.jsx";

export function CheckBoxEmpty(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CheckBoxEmpty;
