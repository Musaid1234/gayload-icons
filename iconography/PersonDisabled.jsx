import animation from "./data/651-person-disabled.json";
import { Lordicon } from "./player.jsx";

export function PersonDisabled(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PersonDisabled;
