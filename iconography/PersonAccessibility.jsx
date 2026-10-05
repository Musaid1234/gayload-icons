import animation from "./data/360-person-accessibility.json";
import { Lordicon } from "./player.jsx";

export function PersonAccessibility(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PersonAccessibility;
